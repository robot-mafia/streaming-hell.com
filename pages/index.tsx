import { NextPage, NextPageContext } from 'next';
import styled from 'styled-components';
import fetch from 'isomorphic-unfetch';
import { Card } from '../ui/card';
import { Song } from '../ui/song';
import { Link } from '../ui/link';
import { LinksBlock } from '../ui/links-block';
import React from 'react';
import AppleMusicIcon from '../assets/images/service-icons/apple-music.svg';
import SpotifyIcon from '../assets/images/service-icons/spotify.svg';
import YoutubeIcon from '../assets/images/service-icons/youtube.svg';
import YoutubeMusicIcon from '../assets/images/service-icons/youtube-music.svg';
import GoogleMusicIcon from '../assets/images/service-icons/google-music.svg';
import PandoraIcon from '../assets/images/service-icons/pandora.svg';
import DeezerIcon from '../assets/images/service-icons/deezer.svg';
import AmazonMusicIcon from '../assets/images/service-icons/amazon-music.svg';
import TidalIcon from '../assets/images/service-icons/tidal.svg';
import NapsterIcon from '../assets/images/service-icons/napster.svg';
import YandexIcon from '../assets/images/service-icons/yandex.svg';
import ItunesIcon from '../assets/images/service-icons/itunes.svg';
import GooglePlayIcon from '../assets/images/service-icons/google-play.svg';
import AmazonIcon from '../assets/images/service-icons/amazon.svg';
import SpinrillaIcon from '../assets/images/service-icons/spinrilla.svg';
import SoundCloudIcon from '../assets/images/service-icons/soundcloud.svg';

type ItunesPageProps = {
  data: any;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  width: 100%;
`;

const Container = styled.div`
  text-align: center;
  max-width: 356px;
  height: 100%;
  flex: 1 0 0%;
  margin: auto;
  padding: 16px;
`;

const GetLink = ({ data, platform, name, children }): any => {
  if (data.linksByPlatform[platform]) {
    return (
      <Link url={data.linksByPlatform[platform].url} name={name}>
        {children}
      </Link>
    );
  } else {
    return <div></div>;
  }
};

export const ItunesPage: NextPage<ItunesPageProps> = ({ data }) => {
  const currentSong = data.entitiesByUniqueId[data.entityUniqueId];
  return (
    <Wrapper>
      <Container>
        <Card>
          <Song
            title={currentSong.title}
            artistName={currentSong.artistName}
            thumbnailUrl={currentSong.thumbnailUrl}
          ></Song>
        </Card>
        <Card title="Слушать">
          <LinksBlock>
            <GetLink data={data} platform="appleMusic" name="Apple Music">
              <AppleMusicIcon />
            </GetLink>
            <GetLink data={data} platform="spotify" name="Spotify">
              <SpotifyIcon />
            </GetLink>
            <GetLink data={data} platform="youtube" name="YouTube">
              <YoutubeIcon />
            </GetLink>
            <GetLink data={data} platform="youtubeMusic" name="YouTube Music">
              <YoutubeMusicIcon />
            </GetLink>
            <GetLink data={data} platform="google" name="Google Music">
              <GoogleMusicIcon />
            </GetLink>
            <GetLink data={data} platform="pandora" name="Pandora">
              <PandoraIcon />
            </GetLink>
            <GetLink data={data} platform="deezer" name="Deezer">
              <DeezerIcon />
            </GetLink>
            <GetLink data={data} platform="soundcloud" name="SoundCloud">
              <SoundCloudIcon />
            </GetLink>
            <GetLink data={data} platform="amazonMusic" name="Amazon Music">
              <AmazonMusicIcon />
            </GetLink>
            <GetLink data={data} platform="tidal" name="Tidal">
              <TidalIcon />
            </GetLink>
            <GetLink data={data} platform="napster" name="Napster">
              <NapsterIcon />
            </GetLink>
            <GetLink data={data} platform="spinrilla" name="Spinrilla">
              <SpinrillaIcon />
            </GetLink>
            <GetLink data={data} platform="yandex" name="Yandex">
              <YandexIcon />
            </GetLink>
          </LinksBlock>
        </Card>
        <Card title="Купить">
          <LinksBlock>
            <GetLink data={data} platform="itunes" name="iTunes">
              <ItunesIcon />
            </GetLink>
            <GetLink data={data} platform="googleStore" name="Google Play">
              <GooglePlayIcon />
            </GetLink>
            <GetLink data={data} platform="amazonStore" name="Amazon">
              <AmazonIcon />
            </GetLink>
          </LinksBlock>
        </Card>
      </Container>
    </Wrapper>
  );
};

ItunesPage.getInitialProps = async (ctx: NextPageContext) => {
  const { query } = ctx;

  if (query.url) {
    const res = await fetch(
      `${process.env.STREAMING_HELL_API_ENDPOINT}/links/byUrl?url=${query.url}`,
    );
    const json = await res.json();
    return { data: json };
  }
};

export default ItunesPage;
