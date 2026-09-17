// Subtle, low-volume Web Audio tactile sound generator for Nashville Studios

let audioCtx: AudioContext | null = null;
let isMuted: boolean = false;
let lastHoverTime = 0;

// Listeners for sound mute state changes
type Listener = (muted: boolean) => void;
const listeners: Set<Listener> = new Set();

// Initialize or resume AudioContext safely on user interaction
function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume().catch(() => {});
  }
  return audioCtx;
}

export function isSoundMuted(): boolean {
  return isMuted;
}

export function setSoundMuted(muted: boolean): void {
  isMuted = muted;
  listeners.forEach((fn) => fn(muted));
}

export function toggleSound(): boolean {
  const nextState = !isMuted;
  setSoundMuted(nextState);
  if (!nextState) {
    // Play a gentle confirmation blip when unmuting
    playTactileClick();
  }
  return nextState;
}

export function subscribeSoundState(listener: Listener): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

/**
 * Subtle tactile click sound:
 * Crisp, low-volume wooden/glass haptic pulse (0.025s)
 */
export function playTactileClick(volumeMultiplier = 1): void {
  if (isMuted) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    // Sound shaping: starts at 680Hz, quickly drops to 140Hz
    osc.type = 'sine';
    osc.frequency.setValueAtTime(680, now);
    osc.frequency.exponentialRampToValueAtTime(140, now + 0.028);

    // Filter to give a soft, organic, tactile quality
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1200, now);
    filter.frequency.exponentialRampToValueAtTime(300, now + 0.028);

    // Low-volume envelope: quick attack, fast natural exponential decay
    const peakVolume = 0.065 * volumeMultiplier;
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.linearRampToValueAtTime(peakVolume, now + 0.003);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.03);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.035);
  } catch {
    // Gracefully handle browser autoplay policy / audio interruptions
  }
}

/**
 * Subtle tactile hover sound:
 * Gentle, airy glass resonance (0.018s).
 * Rate-limited so sweeping across items creates a smooth pleasant texture.
 */
export function playTactileHover(volumeMultiplier = 1): void {
  if (isMuted) return;
  const nowMs = Date.now();
  if (nowMs - lastHoverTime < 45) return; // 45ms debounce threshold
  lastHoverTime = nowMs;

  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    // High, soft glass ping (1850Hz to 1100Hz)
    osc.type = 'sine';
    osc.frequency.setValueAtTime(1850, now);
    osc.frequency.exponentialRampToValueAtTime(1100, now + 0.02);

    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1600, now);
    filter.Q.setValueAtTime(1.5, now);

    // Barely-there ambient tick
    const peakVolume = 0.028 * volumeMultiplier;
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.linearRampToValueAtTime(peakVolume, now + 0.002);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.022);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.025);
  } catch {
    // Ignore audio interruption
  }
}
