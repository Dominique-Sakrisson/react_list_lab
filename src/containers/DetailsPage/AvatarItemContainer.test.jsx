import React from 'react';
import { render, screen } from '@testing-library/react';
import Character from './AvatarItemContainer.jsx';
import { MemoryRouter } from 'react-router';
import AvatarItemContainer from './AvatarItemContainer.jsx';


describe('Tests the avatar container', () => {
  it('renders a single character to the page', async () => {
    render(<MemoryRouter >
        <AvatarItemContainer match={{
      params:{
        id:'5cf5679a915ecad153ab68d1'
        }
      }}/>
      </MemoryRouter>
      );

    screen.getByText('Loading...');
    const img = await screen.findByRole('image', { name: 'character-image' });
    
  });
});
