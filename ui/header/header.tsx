import { FC } from 'react';
import s from './header.module.css';

export const Header: FC = () => {
  return (
    <header className={s.box}>
      <a href="/" className={s.logo}>
        <img
          className={s.logoImg}
          src="/images/logo.svg"
        />
        <div className={s.logoText}>Streaming Hell</div>
      </a>
    </header>
  );
};
