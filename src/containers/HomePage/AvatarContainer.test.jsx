import React from 'react';
import { render, screen } from '@testing-library/react';
import AvatarContainer from './AvatarContainer.jsx';
import { MemoryRouter } from 'react-router';

describe('Tests the avatar container', () => {
  it('renders a list of characters to the page', async () => {
    render(
      <MemoryRouter>
        <AvatarContainer />
      </MemoryRouter>
    );

    screen.getByText('Loading...');
    const ul = await screen.findByRole('list', { name: 'characters' });
    expect(ul).not.toBeEmptyDOMElement();
    // expect(ul).toMatchInlineSnapshot();
  });
});
