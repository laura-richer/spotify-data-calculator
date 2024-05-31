import { render, screen } from '@testing-library/svelte';
import { expect, test, describe } from 'vitest';

import Header from '$lib/components/Header.svelte';

describe('Header', () => {
  test('should render the title', () => {
    render(Header)
    const title = screen.getByText('Spotify data calculator');
    expect(title).toBeInTheDocument();
  })
})
