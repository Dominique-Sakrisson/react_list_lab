import React from 'react';
import { render, screen } from '@testing-library/react';
import Character from './AvatarItemContainer.jsx';

describe('Tests the avatar container', () => {
  it('renders a singel character to the page', async () => {
    render(<Character />);

    screen.getByText('Loading...');
    const ul = await screen.findByRole('list', { name: 'characters' });
    expect(ul).not.toBeEmptyDOMElement();
    expect(ul).toMatchInlineSnapshot();
  });
});
