import React from 'react';
import styled from 'styled-components';

const AlbumArtworkContainer = styled.div`
  position: relative;
  padding: 0 0 100%;
`;

const AlbumArtwork = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const SongInfo = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  padding: 8px;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 15px;
  margin-bottom: 4px;
`;

const ArtistName = styled.div`
  font-weight: 500;
  font-size: 13px;
  color: black;
`;

export interface SongProps {
  title: string;
  artistName: string;
  thumbnailUrl: string;
}

export const Song: React.FC<SongProps> = ({
  title,
  artistName,
  thumbnailUrl,
}) => {
  return (
    <div>
      <AlbumArtworkContainer>
        <AlbumArtwork src={thumbnailUrl} alt="Album artwork"></AlbumArtwork>
      </AlbumArtworkContainer>
      <SongInfo>
        <Title>{title}</Title>
        <ArtistName>{artistName}</ArtistName>
      </SongInfo>
    </div>
  );
};
