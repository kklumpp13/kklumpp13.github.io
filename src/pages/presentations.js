import React from 'react';
import { Link } from 'gatsby';
import Layout from '../layout/layout';
import styled from 'styled-components';

const StyledAbout = styled.section`
  padding: 1rem; 

  a {
    margin-left: -4px;
  }

  @media screen and (min-width: 62.5em) {
    padding: 6.375rem 13.75rem; 
  }
`;

export default () => (
  <Layout>
    <StyledAbout>
      <h1>Conference Talks</h1>
      <h2>Developing accessible forms</h2>
      <p><Link to="https://connect.tech/session?id=4144">Connect.Tech 2019</Link> - Atlanta, GA</p>
      <p><b>Description:</b> Much like death and taxes, filling out an online form is one of life’s unfortunate certainties. Using the Web Content Accessibility Guidelines as a reference point, we’ll walk through code examples that teach you how to develop a form that is easy for all users to interact with.</p>
      <div>
        <Link to="/slides/accessible-forms">Slides</Link>
      </div>
    </StyledAbout>
  </Layout>
);
