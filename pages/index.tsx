import { NextPage, NextPageContext } from 'next';
import styled from 'styled-components';
import fetch from 'isomorphic-unfetch';
import dynamic from 'next/dynamic';

const SongPage = dynamic(() => import('./song'));

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 60px);
  margin-bottom: 60px;
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

const Hero = styled.h1`
  display: flex;
  align-items: center;
  max-width: 600px;
  height: 130px;
  max-height: 100%;
  margin-top: 20px;
  margin-bottom: 0;
  padding: 25px;
`;

const HeroText = styled.h1`
  color: #172b4d;
  font-size: 40px;
  font-weight: 400;
  line-height: 60px;

  @media (max-width: 428px) {
    font-size: 30px;
    line-height: 50px;
  }
`;

type IndexPageProps = {
  songUrl?: string;
  data?: any;
};

export const IndexPage: NextPage<IndexPageProps> = ({ songUrl, data }) => {
  return (
    <Wrapper>
      {songUrl ? (
        <Container>
          <SongPage data={data} />
        </Container>
      ) : (
        <Hero>
          <HeroText>Share and find music between streaming services</HeroText>
        </Hero>
      )}
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
