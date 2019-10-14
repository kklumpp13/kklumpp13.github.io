import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './global-style';
import Helmet from 'react-helmet';
import Header from './header';
import Footer from './footer';
import useSiteMetadata from '../hooks/use-sitemetadata';
import favicon from '../../static/favicon.png';

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-top: 0;
`;

const Main = styled.main`
  flex: 1 0 auto;
  margin: 0 auto;

  // Max-width: 14400px
  @media screen and (min-width: 62.5em) {
    max-width: 90rem; 
  }
`;

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <>
      <GlobalStyle />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link href="https://fonts.googleapis.com/css?family=Fira+Sans:400,500,700|Roboto:400,500,700&display=swap" rel="stylesheet" />
        <link rel="icon" href={favicon} />
      </Helmet>
      <Header />
      <ContentWrapper>
        <Main>
          {children}
        </Main>
        <Footer />
      </ContentWrapper>
    </>
  );
};

export default Layout;
