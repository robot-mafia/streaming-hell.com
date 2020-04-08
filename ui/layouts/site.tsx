import styled from 'styled-components';
import { Navigation } from '../navigation';
import { Footer } from '../footer';

const Layout = styled.div`
  height: 100%;
  min-height: 100%;
`;

export const SiteLayout: React.FC = ({ children }) => {
  return (
    <Layout>
      <Navigation />
      {children}
      <Footer />
    </Layout>
  );
};
