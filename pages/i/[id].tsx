import { NextPage, NextPageContext } from "next";
import { useRouter } from "next/router";
import fetch from "isomorphic-unfetch";

type ItunesPageProps = {
  linksByPlatform: any;
};

export const ItunesPage: NextPage<ItunesPageProps> = ({ linksByPlatform }) => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <div>
        <a target="_blank" href={linksByPlatform.appleMusic.url}>
          Apple Music
        </a>
      </div>
    </div>
  );
};

ItunesPage.getInitialProps = async (ctx: NextPageContext) => {
  const { id } = ctx.query;
  const res = await fetch(
    `https://api.song.link/v1-alpha.1/links?platform=itunes&type=song&id=${id}`
  );
  const json = await res.json();
  return { linksByPlatform: json.linksByPlatform };
};

export default ItunesPage;
