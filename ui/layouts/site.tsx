import { Navigation } from '../navigation';

export const SiteLayout: React.FC = ({ children }) => {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
};
