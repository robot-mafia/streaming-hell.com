import { FC } from 'react';
import s from './hero.module.css';

export const Hero: FC = () => {
  return (
    <div className={s.box}>
      <div className={s.header}>
        <h1 className={s.title}>
          Share and find music between streaming services
        </h1>
      </div>
    </div>
  );
};
