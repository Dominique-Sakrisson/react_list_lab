import React from 'react';
import { render, screen } from '@testing-library/react';
import AvatarContainer from './AvatarContainer.jsx';

describe('Tests the avatar container', () => {
  it('renders a list of characters to the page', async () => {
    render(<AvatarContainer />);

    screen.getByText('Loading...');
    const ul = await screen.findByRole('list', { name: 'characters' });
    expect(ul).not.toBeEmptyDOMElement();
    expect(ul).toMatchInlineSnapshot(`
      <ul
        aria-label="characters"
      >
        <li>
          <img
            alt="Analay"
            src="https://vignette.wikia.nocookie.net/avatar/images/c/c3/Analay.png/revision/latest?cb=20140430182201"
          />
          <p>
            Analay
          </p>
          <p>
            Unnamed team
          </p>
          <p />
        </li>
        <li>
          <img
            alt="Arik"
            src="https://vignette.wikia.nocookie.net/avatar/images/6/6f/Arik.png/revision/latest?cb=20140808184002"
          />
          <p>
            Arik
          </p>
          <p>
            Earth Kingdom Air Force
          </p>
          <p>
            Korra 
          </p>
        </li>
        <li>
          <img
            alt="Baatar Jr."
            src="https://vignette.wikia.nocookie.net/avatar/images/4/45/Baatar_Jr..png/revision/latest?cb=20150409193510"
          />
          <p>
            Baatar Jr.
          </p>
          <p>
             Beifong family Military of the Earth Empire (formerly) Metal Clan
          </p>
          <p>
            Metal Clan 
          </p>
        </li>
        <li>
          <img
            alt="Bolin"
            src="https://vignette.wikia.nocookie.net/avatar/images/d/d4/Bolin.png/revision/latest?cb=20150406232314"
          />
          <p>
            Bolin
          </p>
          <p>
             Fire Ferrets (formerly) Kuvira's army (deserted) Team Avatar Triple Threat Triad (formerly) Republic City Police
          </p>
          <p>
            Amon
          </p>
        </li>
        <li>
          <img
            alt="Chan (Fire Nation admiral)"
          />
          <p>
            Chan (Fire Nation admiral)
          </p>
          <p>
            Fire Nation Navy
          </p>
          <p>
            Earth Kingdom
          </p>
        </li>
        <li>
          <img
            alt="Chit Sang"
            src="https://vignette.wikia.nocookie.net/avatar/images/8/81/Chit_Sang.png/revision/latest?cb=20121021000707"
          />
          <p>
            Chit Sang
          </p>
          <p />
          <p>
            Azula
          </p>
        </li>
        <li>
          <img
            alt="Asami Sato"
            src="https://vignette.wikia.nocookie.net/avatar/images/b/b6/Asami_Sato.png/revision/latest?cb=20150407110150"
          />
          <p>
            Asami Sato
          </p>
          <p>
             Future Industries Sato family Team Avatar
          </p>
          <p>
            Amon
          </p>
        </li>
        <li>
          <img
            alt="Bum-Ju"
            src="https://vignette.wikia.nocookie.net/avatar/images/b/b6/Bum-Ju.png/revision/latest?cb=20140730103156"
          />
          <p>
            Bum-Ju
          </p>
          <p>
            Spirit World
          </p>
          <p />
        </li>
        <li>
          <img
            alt="Butler"
            src="https://vignette.wikia.nocookie.net/avatar/images/8/82/Butler.png/revision/latest?cb=20121107115044"
          />
          <p>
            Butler
          </p>
          <p>
            Sato family
          </p>
          <p />
        </li>
        <li>
          <img
            alt="Broadsword man"
            src="https://vignette.wikia.nocookie.net/avatar/images/9/98/Broadsword_man.png/revision/latest?cb=20130630171553"
          />
          <p>
            Broadsword man
          </p>
          <p>
            Earth Kingdom
          </p>
          <p>
            Zuko
          </p>
        </li>
        <li>
          <img
            alt="Aiwei"
            src="https://vignette.wikia.nocookie.net/avatar/images/0/07/Aiwei_reveals_Korra%27s_lie.png/revision/latest?cb=20140808130551"
          />
          <p>
            Aiwei
          </p>
          <p>
             Metal Clan (formerly) Red Lotus (formerly)
          </p>
          <p>
            Suyin Beifong
          </p>
        </li>
        <li>
          <img
            alt="Animal control officer"
            src="https://vignette.wikia.nocookie.net/avatar/images/5/58/Animal_control_officer.png/revision/latest?cb=20140504160655"
          />
          <p>
            Animal control officer
          </p>
          <p />
          <p>
            Momo
          </p>
        </li>
        <li>
          <img
            alt="Chow"
            src="https://vignette.wikia.nocookie.net/avatar/images/5/51/Chow.png/revision/latest?cb=20140730173827"
          />
          <p>
            Chow
          </p>
          <p />
          <p />
        </li>
        <li>
          <img
            alt="Circus master"
            src="https://vignette.wikia.nocookie.net/avatar/images/a/a5/Circus_master.png/revision/latest?cb=20130706153819"
          />
          <p>
            Circus master
          </p>
          <p>
            Fire Nation circus
          </p>
          <p>
            Appa
          </p>
        </li>
        <li>
          <img
            alt="Bujing"
            src="https://vignette.wikia.nocookie.net/avatar/images/7/76/Bujing.png/revision/latest?cb=20130714152817"
          />
          <p>
            Bujing
          </p>
          <p>
            Fire Nation military
          </p>
          <p>
            Zuko
          </p>
        </li>
        <li>
          <img
            alt="Buttercup Raiko"
            src="https://vignette.wikia.nocookie.net/avatar/images/e/ed/Buttercup_Raiko.png/revision/latest?cb=20150409193510"
          />
          <p>
            Buttercup Raiko
          </p>
          <p>
            United Republic Government
          </p>
          <p>
            Varrick
          </p>
        </li>
        <li>
          <img
            alt="Cabbage merchant"
            src="https://vignette.wikia.nocookie.net/avatar/images/2/2f/Cabbage_merchant.png/revision/latest?cb=20140112200908"
          />
          <p>
            Cabbage merchant
          </p>
          <p>
             Cabbage Corp Earth Kingdom
          </p>
          <p>
            The 
          </p>
        </li>
        <li>
          <img
            alt="Calm man"
            src="https://vignette.wikia.nocookie.net/avatar/images/b/b6/Calm_man.png/revision/latest?cb=20130814093330"
          />
          <p>
            Calm man
          </p>
          <p>
            Earth Kingdom
          </p>
          <p>
            Fire Nation
          </p>
        </li>
        <li>
          <img
            alt="Chin"
            src="https://vignette.wikia.nocookie.net/avatar/images/6/6f/Chin_the_Great.png/revision/latest?cb=20140215111604"
          />
          <p>
            Chin
          </p>
          <p />
          <p>
            Avatar
          </p>
        </li>
        <li>
          <img
            alt="Chit Sang's friend"
            src="https://vignette.wikia.nocookie.net/avatar/images/6/6e/Chit_Sang%27s_friend.png/revision/latest?cb=20121120131829"
          />
          <p>
            Chit Sang's friend
          </p>
          <p />
          <p>
            The warden
          </p>
        </li>
      </ul>
    `);
  });
});
