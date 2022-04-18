import { FC, PropsWithChildren } from 'react';
import s from './card.module.css';

export interface CardProps {
  readonly title?: string;
}

export const Card: FC<PropsWithChildren<CardProps>> = ({ title, children }) => {
  const Header = () => {
    if (title) {
      return <div className={s.header}>{title}</div>;
    }
    return null;
  };

  return (
    <div className={s.box}>
      <Header />
      <div>{children}</div>
    </div>
  );
};
