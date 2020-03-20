import { NextPage, NextPageContext } from 'next';
import styled from 'styled-components';
import fetch from 'isomorphic-unfetch';
import { Navigation } from '../ui/navigation';
import dynamic from 'next/dynamic';

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
  max-width: 280px;

  @media (min-width: 380px) {
    max-width: 345px;
  }

  width: 100%;
  height: 100%;
  flex: 1 0 0%;
  margin: auto;
  padding: 16px;
`;

const UnderConstruction = styled.h1`
  font-size: 20px;
`;

type IndexPageProps = {
  songUrl?: string;
  data?: any;
};

const SongPage = dynamic(() => import('./song'));

export const IndexPage: NextPage<IndexPageProps> = ({ songUrl, data }) => {
  return (
    <Wrapper>
      <Navigation></Navigation>
      <Container>
        {songUrl ? (
          <SongPage data={data} />
        ) : (
          <UnderConstruction>Сайт находится в разработке...</UnderConstruction>
        )}
      </Container>
    </Wrapper>
  );
};

IndexPage.getInitialProps = async (ctx: NextPageContext) => {
  const { query } = ctx;

  if (query.url) {
    const res = await fetch(
      `${process.env.STREAMING_HELL_API_ENDPOINT}/links/byUrl?url=${query.url}`,
    );
    const json = await res.json();
    return { songUrl: query.url as string, data: json };
  }
  return {};
};

export default IndexPage;
