import React from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';
import Layout from '../layout/layout';
import { mutedAccent, mutedSecondary, primary, white } from '../css/colors';

const PageLink = styled(Link)`
  display: inline-block;
  padding: 1rem 1.25rem;
`;

const StyledIntro = styled.section`
display: flex;
flex-direction: column;
padding: 1rem; 
text-align: center;

// 1000px
@media screen and (min-width: 62.5em) {
  padding: 6.375rem 17.5rem;
}
`;

const StyledWhy = styled.section`
  background-color: ${mutedAccent};
  display: flex;
  padding: 1rem; 

  // 1000px
  @media screen and (min-width: 62.5em) {
    padding: 6.375rem 17.5rem;
  }
`;

const StyledWhyImage = styled.img`
  display: none;

  @media screen and (min-width: 62.5em) {
    display: block;
    margin-right: 60px;
  }
`;

const StyledPublicContent = styled.section`
  display: flex;
  justify-content: center;
  padding: 1rem;

  @media screen and (min-width: 62.5em) {
    padding: 6.375rem 17.5rem;
  }
`;

const StyledAbout = styled.section`
  background-color: ${mutedSecondary};
  padding: 1rem; 

  @media screen and (min-width: 62.5em) {
    padding: 6.375rem 13.75rem; 
  }
`;

const StyledBanner = styled.div`
  align-items: center;
  background-color: ${primary};
  color: ${white};
  display: flex;
  justify-content: center;
  min-height: 50px;
`;

export default () => {

  return (
    <Layout>
      <StyledBanner>
        <p>This site is a work in progress as I learn how to use Gatsby.</p>
      </StyledBanner>
      <StyledIntro>
        <img src="../headshot.svg" alt="Headshot" />
        <div>
          <h1 css={css`
            display: inline;
          `}>
            My name is Krystal Klumpp. I'm a Senior UI Engineer at SoFi.
          </h1>
          <p css={css`
            display: inline;
            font-size: 2.25rem;
            font-weight: 500;
        `}>
            {" "}I primarily work with JavaScript, HTML5, CSS3 & responsive design techniques.</p>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/krystalklumpp/">Contact me</a>
        </div>
      </StyledIntro>
      <StyledWhy>
        <StyledWhyImage src="../icon_dev.svg" alt="" />
        <div>
          <h2>Why I'm an engineer</h2>
          <p css={css`
            font-size: 1.25rem;
            font-weight: 500;
          `}>
            Before I became a developer, one criticism I often heard was that I was always trying to learn something new. Jack of all trades, master of none and all that nonsense. But programming is a field where an overly developed sense of curiosity is a basic requirement just to remain relevant. And now this 'weakness' is a strength.
          </p>
        </div>
      </StyledWhy>
      <StyledPublicContent>
        <div css={css`
          padding: 0 .8rem;
          text-align: center;
        `}>
          <img src="../icon_preso.svg" alt="" />
          <h2>Presentations</h2>
          <div css={css`
            margin-top: 0;
          `}>
            <PageLink to="/presentations">Check them out</PageLink>
          </div>
        </div>
      </StyledPublicContent>
      <StyledAbout>
        <h2>About me</h2>
        <p>After graduating with a BA in Japanese Language and Literature from the University of Georgia, I took the next logical step and enlisted in the U.S. Army. While in the Army I worked as a target audience analyst and cultural expert over the course of two deployments to Afghanistan.</p>
        <p>Post-Army I spent two months on a solo bike tour across the U.S. before moving to Harbin, China for 7 months. After Harbin taught me what cold really means, I headed over to Japan where I lived off of ramen and Pocky for 3 years (yes, I know you're likely weeping with jealousy right now). In Tokyo, I attended the Communication Studies program at Temple University in Tokyo, Japan. Though I had intended to become a journalist, I quickly became more interested in how information was being presented than in the information itself.</p>
        <p>Aside from the aspects of multimedia journalism that initially caught my attention, the main draw of programming for me was the need to continuously learn and grow.</p>
      </StyledAbout>
    </Layout >
  )
};
