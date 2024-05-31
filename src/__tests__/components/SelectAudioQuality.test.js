import { render, fireEvent, screen } from '@testing-library/svelte';
import { expect, test, describe } from 'vitest';

import { audioQualities } from '$lib/constants/audio-qualities.js';
import SelectAudioQuality from '$lib/components/SelectAudioQuality.svelte';

describe('Select audio quality', () => {
  test('should render a button for each audio quality', () => {
   const { container } = render(SelectAudioQuality);
   const audioQualityButtons = container.querySelectorAll('button');

    expect(audioQualityButtons.length).toBe(audioQualities.length);
  });

  test('should render audio quality buttons with no active state', () => {
    const { container } = render(SelectAudioQuality);
    const audioQualityButtons = container.querySelectorAll('button');

    audioQualityButtons.forEach(button => {
      expect(button.classList).not.toContain('btn--active')
    })
  })

  test('should apply active state to button after click', async () => {
    const { container } = render(SelectAudioQuality);
    const audioQualityButtons = container.querySelectorAll('button');

    const firstButton = screen.getByText('Low');

    await fireEvent.click(firstButton);

    audioQualityButtons.forEach(button => {
      if (button !== firstButton) expect(button.classList).not.toContain('btn--active');
      else expect(button.classList).toContain('btn--active');
    })
  });
});

