import { NextPage } from 'next';
import styled from 'styled-components';
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

const Container = styled.div``;

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

export type SongPageProps = {
  data: any;
};

export const SongPage: NextPage<SongPageProps> = ({ data }) => {
  if (data) {
    const currentSong = data.entitiesByUniqueId[data.entityUniqueId];
    return (
      <Container>
        <Card>
          <Song
            title={currentSong.title}
            artistName={currentSong.artistName}
            thumbnailUrl={currentSong.thumbnailUrl}
          ></Song>
        </Card>
        <Card title="Listen">
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
        <Card title="Buy">
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
    );
  } else {
    return null;
  }
};

export default SongPage;
