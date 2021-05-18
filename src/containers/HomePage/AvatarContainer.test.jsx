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
    expect(ul).toMatchInlineSnapshot(`
      <ul
        aria-label="characters"
      >
        <li>
          <a
            href="/5cf5679a915ecad153ab68d1"
          >
            <img
              alt="Analay"
              aria-label="character-image"
              role="image"
              src="https://vignette.wikia.nocookie.net/avatar/images/c/c3/Analay.png/revision/latest?cb=20140430182201"
            />
            <p>
              character name is: 
              Analay
            </p>
            <p>
              Affiliations are: 
              Unnamed team
            </p>
            <p>
              Enemies are: 
            </p>
          </a>
        </li>
        <li>
          <a
            href="/5cf5679a915ecad153ab68d5"
          >
            <img
              alt="Arik"
              aria-label="character-image"
              role="image"
              src="https://vignette.wikia.nocookie.net/avatar/images/6/6f/Arik.png/revision/latest?cb=20140808184002"
            />
            <p>
              character name is: 
              Arik
            </p>
            <p>
              Affiliations are: 
              Earth Kingdom Air Force
            </p>
            <p>
              Enemies are: 
              Korra 
            </p>
          </a>
        </li>
        <li>
          <a
            href="/5cf5679a915ecad153ab68e2"
          >
            <img
              alt="Baatar Jr."
              aria-label="character-image"
              role="image"
              src="https://vignette.wikia.nocookie.net/avatar/images/4/45/Baatar_Jr..png/revision/latest?cb=20150409193510"
            />
            <p>
              character name is: 
              Baatar Jr.
            </p>
            <p>
              Affiliations are: 
               Beifong family Military of the Earth Empire (formerly) Metal Clan
            </p>
            <p>
              Enemies are: 
              Metal Clan 
            </p>
          </a>
        </li>
        <li>
          <a
            href="/5cf5679a915ecad153ab68e9"
          >
            <img
              alt="Bolin"
              aria-label="character-image"
              role="image"
              src="https://vignette.wikia.nocookie.net/avatar/images/d/d4/Bolin.png/revision/latest?cb=20150406232314"
            />
            <p>
              character name is: 
              Bolin
            </p>
            <p>
              Affiliations are: 
               Fire Ferrets (formerly) Kuvira's army (deserted) Team Avatar Triple Threat Triad (formerly) Republic City Police
            </p>
            <p>
              Enemies are: 
              Amon
            </p>
          </a>
        </li>
        <li>
          <a
            href="/5cf5679a915ecad153ab68fd"
          >
            <img
              alt="Chan (Fire Nation admiral)"
              aria-label="character-image"
              role="image"
            />
            <p>
              character name is: 
              Chan (Fire Nation admiral)
            </p>
            <p>
              Affiliations are: 
              Fire Nation Navy
            </p>
            <p>
              Enemies are: 
              Earth Kingdom
            </p>
          </a>
        </li>
        <li>
          <a
            href="/5cf5679a915ecad153ab6900"
          >
            <img
              alt="Chit Sang"
              aria-label="character-image"
              role="image"
              src="https://vignette.wikia.nocookie.net/avatar/images/8/81/Chit_Sang.png/revision/latest?cb=20121021000707"
            />
            <p>
              character name is: 
              Chit Sang
            </p>
            <p>
              Affiliations are: 
            </p>
            <p>
              Enemies are: 
              Azula
            </p>
          </a>
        </li>
        <li>
          <a
            href="/5cf5679a915ecad153ab68d7"
          >
            <img
              alt="Asami Sato"
              aria-label="character-image"
              role="image"
              src="https://vignette.wikia.nocookie.net/avatar/images/b/b6/Asami_Sato.png/revision/latest?cb=20150407110150"
            />
            <p>
              character name is: 
              Asami Sato
            </p>
            <p>
              Affiliations are: 
               Future Industries Sato family Team Avatar
            </p>
            <p>
              Enemies are: 
              Amon
            </p>
          </a>
        </li>
        <li>
          <a
            href="/5cf5679a915ecad153ab68f0"
          >
            <img
              alt="Bum-Ju"
              aria-label="character-image"
              role="image"
              src="https://vignette.wikia.nocookie.net/avatar/images/b/b6/Bum-Ju.png/revision/latest?cb=20140730103156"
            />
            <p>
              character name is: 
              Bum-Ju
            </p>
            <p>
              Affiliations are: 
              Spirit World
            </p>
            <p>
              Enemies are: 
            </p>
          </a>
        </li>
        <li>
          <a
            href="/5cf5679a915ecad153ab68f5"
          >
            <img
              alt="Butler"
              aria-label="character-image"
              role="image"
              src="https://vignette.wikia.nocookie.net/avatar/images/8/82/Butler.png/revision/latest?cb=20121107115044"
            />
            <p>
              character name is: 
              Butler
            </p>
            <p>
              Affiliations are: 
              Sato family
            </p>
            <p>
              Enemies are: 
            </p>
          </a>
        </li>
        <li>
          <a
            href="/5cf5679a915ecad153ab68ed"
          >
            <img
              alt="Broadsword man"
              aria-label="character-image"
              role="image"
              src="https://vignette.wikia.nocookie.net/avatar/images/9/98/Broadsword_man.png/revision/latest?cb=20130630171553"
            />
            <p>
              character name is: 
              Broadsword man
            </p>
            <p>
              Affiliations are: 
              Earth Kingdom
            </p>
            <p>
              Enemies are: 
              Zuko
            </p>
          </a>
        </li>
        <li>
          <a
            href="/5cf5679a915ecad153ab68cf"
          >
            <img
              alt="Aiwei"
              aria-label="character-image"
              role="image"
              src="https://vignette.wikia.nocookie.net/avatar/images/0/07/Aiwei_reveals_Korra%27s_lie.png/revision/latest?cb=20140808130551"
            />
            <p>
              character name is: 
              Aiwei
            </p>
            <p>
              Affiliations are: 
               Metal Clan (formerly) Red Lotus (formerly)
            </p>
            <p>
              Enemies are: 
              Suyin Beifong
            </p>
          </a>
        </li>
        <li>
          <a
            href="/5cf5679a915ecad153ab68d2"
          >
            <img
              alt="Animal control officer"
              aria-label="character-image"
              role="image"
              src="https://vignette.wikia.nocookie.net/avatar/images/5/58/Animal_control_officer.png/revision/latest?cb=20140504160655"
            />
            <p>
              character name is: 
              Animal control officer
            </p>
            <p>
              Affiliations are: 
            </p>
            <p>
              Enemies are: 
              Momo
            </p>
          </a>
        </li>
        <li>
          <a
            href="/5cf5679a915ecad153ab6904"
          >
            <img
              alt="Chow"
              aria-label="character-image"
              role="image"
              src="https://vignette.wikia.nocookie.net/avatar/images/5/51/Chow.png/revision/latest?cb=20140730173827"
            />
            <p>
              character name is: 
              Chow
            </p>
            <p>
              Affiliations are: 
            </p>
            <p>
              Enemies are: 
            </p>
          </a>
        </li>
        <li>
          <a
            href="/5cf5679a915ecad153ab6906"
          >
            <img
              alt="Circus master"
              aria-label="character-image"
              role="image"
              src="https://vignette.wikia.nocookie.net/avatar/images/a/a5/Circus_master.png/revision/latest?cb=20130706153819"
            />
            <p>
              character name is: 
              Circus master
            </p>
            <p>
              Affiliations are: 
              Fire Nation circus
            </p>
            <p>
              Enemies are: 
              Appa
            </p>
          </a>
        </li>
        <li>
          <a
            href="/5cf5679a915ecad153ab68ee"
          >
            <img
              alt="Bujing"
              aria-label="character-image"
              role="image"
              src="https://vignette.wikia.nocookie.net/avatar/images/7/76/Bujing.png/revision/latest?cb=20130714152817"
            />
            <p>
              character name is: 
              Bujing
            </p>
            <p>
              Affiliations are: 
              Fire Nation military
            </p>
            <p>
              Enemies are: 
              Zuko
            </p>
          </a>
        </li>
        <li>
          <a
            href="/5cf5679a915ecad153ab68f6"
          >
            <img
              alt="Buttercup Raiko"
              aria-label="character-image"
              role="image"
              src="https://vignette.wikia.nocookie.net/avatar/images/e/ed/Buttercup_Raiko.png/revision/latest?cb=20150409193510"
            />
            <p>
              character name is: 
              Buttercup Raiko
            </p>
            <p>
              Affiliations are: 
              United Republic Government
            </p>
            <p>
              Enemies are: 
              Varrick
            </p>
          </a>
        </li>
        <li>
          <a
            href="/5cf5679a915ecad153ab68f7"
          >
            <img
              alt="Cabbage merchant"
              aria-label="character-image"
              role="image"
              src="https://vignette.wikia.nocookie.net/avatar/images/2/2f/Cabbage_merchant.png/revision/latest?cb=20140112200908"
            />
            <p>
              character name is: 
              Cabbage merchant
            </p>
            <p>
              Affiliations are: 
               Cabbage Corp Earth Kingdom
            </p>
            <p>
              Enemies are: 
              The 
            </p>
          </a>
        </li>
        <li>
          <a
            href="/5cf5679a915ecad153ab68f8"
          >
            <img
              alt="Calm man"
              aria-label="character-image"
              role="image"
              src="https://vignette.wikia.nocookie.net/avatar/images/b/b6/Calm_man.png/revision/latest?cb=20130814093330"
            />
            <p>
              character name is: 
              Calm man
            </p>
            <p>
              Affiliations are: 
              Earth Kingdom
            </p>
            <p>
              Enemies are: 
              Fire Nation
            </p>
          </a>
        </li>
        <li>
          <a
            href="/5cf5679a915ecad153ab68ff"
          >
            <img
              alt="Chin"
              aria-label="character-image"
              role="image"
              src="https://vignette.wikia.nocookie.net/avatar/images/6/6f/Chin_the_Great.png/revision/latest?cb=20140215111604"
            />
            <p>
              character name is: 
              Chin
            </p>
            <p>
              Affiliations are: 
            </p>
            <p>
              Enemies are: 
              Avatar
            </p>
          </a>
        </li>
        <li>
          <a
            href="/5cf5679a915ecad153ab6901"
          >
            <img
              alt="Chit Sang's friend"
              aria-label="character-image"
              role="image"
              src="https://vignette.wikia.nocookie.net/avatar/images/6/6e/Chit_Sang%27s_friend.png/revision/latest?cb=20121120131829"
            />
            <p>
              character name is: 
              Chit Sang's friend
            </p>
            <p>
              Affiliations are: 
            </p>
            <p>
              Enemies are: 
              The warden
            </p>
          </a>
        </li>
      </ul>
    `);
  });
});
