import { useEffect } from 'react';
import { playTactileClick, playTactileHover } from '../utils/sound';

/**
 * Hook to attach delegated tactile audio interactions to buttons, cards, and interactive controls.
 */
export function useTactileSounds() {
  useEffect(() => {
    // Selectors that should trigger tactile audio feedback
    const interactiveSelector = [
      '.btn-primary',
      '.btn-outline',
      '.variation2-card',
      '.glass-badge',
      '.glass-liquid-nav a',
      '.glass-liquid-nav button',
      'button:not([data-no-sound])',
      'a.cursor-pointer',
      '[role="button"]',
    ].join(', ');

    let currentHoverTarget: Element | null = null;

    const handlePointerOver = (e: PointerEvent) => {
      // Only trigger on mouse/stylus hover, avoid touch simulating hover
      if (e.pointerType === 'touch') return;

      const target = (e.target as Element)?.closest(interactiveSelector);
      if (target && target !== currentHoverTarget) {
        currentHoverTarget = target;
        playTactileHover();
      }
    };

    const handlePointerOut = (e: PointerEvent) => {
      const target = (e.target as Element)?.closest(interactiveSelector);
      if (target && target === currentHoverTarget) {
        currentHoverTarget = null;
      }
    };

    const handlePointerDown = (e: PointerEvent) => {
      const target = (e.target as Element)?.closest(interactiveSelector);
      if (target) {
        playTactileClick();
      }
    };

    document.addEventListener('pointerover', handlePointerOver, { passive: true });
    document.addEventListener('pointerout', handlePointerOut, { passive: true });
    document.addEventListener('pointerdown', handlePointerDown, { passive: true });

    return () => {
      document.removeEventListener('pointerover', handlePointerOver);
      document.removeEventListener('pointerout', handlePointerOut);
      document.removeEventListener('pointerdown', handlePointerDown);
    };
  }, []);
}
