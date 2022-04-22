import {
  NextPage,
  InferGetServerSidePropsType,
  GetServerSideProps,
} from 'next';
import s from '../../../styles/entity-page.module.css';
import { LinksResponse } from '../../../types/links-response';
import { Card } from '../../../ui/card/card';
import { platforms } from '../../../types/platforms';

enum PlatformKey {
  s = 'spotify',
  i = 'itunes',
  y = 'youtube',
  g = 'google',
  p = 'pandora',
  d = 'deezer',
  t = 'tidal',
  a = 'amazonMusic',
  sc = 'soundcloud',
  n = 'napster',
  ya = 'yandex',
  sp = 'spinrilla',
  au = 'audius',
  am = 'audiomack',
  b = 'bandcamp',
  ah = 'anghami',
  bp = 'boomplay',
}

interface UrlQuery {
  type: string;
  platformKey: string;
  id: string;
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  try {
    const { type, platformKey, id } = ctx.query as unknown as UrlQuery;
    const platform = PlatformKey[platformKey as keyof typeof PlatformKey];

    const urlSearchParams = new URLSearchParams({
      type,
      platform,
      id,
      key: process.env.META_API_KEY!,
    });

    const getVKLink = (query: string): string => {
      const params = new URLSearchParams({
        'c[q]': query,
        'c[per_page]': '200',
        'c[section]': 'audio',
      });
      return `https://vk.com/search?${params.toString()}`;
    };

    const url = `${process.env
      .META_API_URL!}/links?${urlSearchParams.toString()}`;
    console.log(`API Request: ${url}`);

    const response = await fetch(url);
    const data: LinksResponse = await response.json();

    // @ts-ignore
    if (data.statusCode) return { notFound: true };

    const entity = data.entitiesByUniqueId[data.entityUniqueId];

    const listen = Object.entries(data.linksByPlatform)
      .filter(([platformName]) => {
        // skip not exists platforms
        return !!platforms[platformName as keyof typeof platforms];
      })
      .filter(
        ([platformName]) =>
          !platforms[platformName as keyof typeof platforms].isStore
      )
      .map(([platformName, links]) => {
        return {
          name: platforms[platformName as keyof typeof platforms].name,
          url: links.url,
          logo: platforms[platformName as keyof typeof platforms].logo,
        };
      });

    listen.push({
      name: platforms.vk.name,
      url: getVKLink(`${entity.artistName} - ${entity.title}`),
      logo: platforms.vk.logo,
    });

    const buy = Object.entries(data.linksByPlatform)
      .filter(([platformName]) => {
        // skip not exists platforms
        return !!platforms[platformName as keyof typeof platforms];
      })
      .filter(
        ([platformName]) =>
          platforms[platformName as keyof typeof platforms].isStore
      )
      .map(([platformName, links]) => {
        return {
          name: platforms[platformName as keyof typeof platforms].name,
          url: links.url,
          logo: platforms[platformName as keyof typeof platforms].logo,
        };
      });

    return {
      props: {
        data: {
          entity,
          listen,
          buy,
        },
      },
    };
  } catch (e) {
    console.error(e);

    // return 404 page if something get wrong
    return { notFound: true };
  }
};

const Entity: NextPage = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div className={s.box}>
      <Card>
        <div className={s.thumbnailBox}>
          <img
            className={s.thumbnail}
            src={data.entity.thumbnailUrl}
            alt="Album artwork"
          />
        </div>
        <div className={s.songInfo}>
          <div className={s.title}>{data.entity.title}</div>
          <div className={s.artistName}>{data.entity.artistName}</div>
        </div>
      </Card>
      <Card title="Listen">
        <div className={s.links}>
          <div className={s.linksBox}>
            {data.listen.map((link: any) => (
              <a
                key={link.name}
                target="_blank"
                rel="noreferrer"
                href={link.url}
                className={s.linksBlock}
              >
                <div className={s.linksBlockBox}>
                  <img src={link.logo} alt="Streaming provider logotype" />
                  <div className={s.linksBlockTitle}>{link.name}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </Card>
      {data.buy.length > 0 ? (
        <Card title="Buy">
          <div className={s.links}>
            <div className={s.linksBox}>
              {data.buy.map((link: any) => (
                <a
                  key={link.name}
                  target="_blank"
                  rel="noreferrer"
                  href={link.url}
                  className={s.linksBlock}
                >
                  <div className={s.linksBlockBox}>
                    <img src={link.logo} alt="Streaming provider logotype" />
                    <div className={s.linksBlockTitle}>{link.name}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </Card>
      ) : null}
    </div>
  );
};

export default Entity;
