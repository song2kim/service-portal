import type { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import LinkText from '../components/linkText';
import tw from 'twin.macro';

const StyledSectionHome = styled.section`
  display: flex;
  align-items: center;
  min-height: 624px;
  border: solid 1px yellowgreen;
  
  .section {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    column-gap: 40px;
    padding: 0 160px;
    min-width: 1120px;
    .thumbnail {
      grid-column: 1 / span 7;
      min-height: 512px;
    }
    .description {
      display: flex;
      align-items: center;
      grid-column: span 5 / -1;
      &__icon {
        flex-grow: 0;
      }
      &__title {
        ${tw`font-serif text-4xl text-gray-600`};
        margin-top: 8px;
        margin-bottom: 20px;
      }
      &__text {
        ${tw`text-xl text-gray-500`};
        margin-bottom: 24px;
      }
    }
  }
`;

const Home: NextPage = () => (
    <>
        <Head>
            <title>Service Portal</title>
            <meta name="description" content="ServicePortal home description" />
        </Head>
        <div className="section-topic">topic section</div>
        <div className="section-vod" />
        <StyledSectionHome>
            <div className="section">
                <img className="thumbnail" src="/assets/images/img_home_management1.svg" alt="이미지" />
                <div className="description">
                    <div className="description__inner">
                        <img className="description__icon" src="/assets/images/img_home_management2.svg" alt="아이콘" />
                        <p className="description__title">Discover and manage multicloud resources</p>
                        <div className="description__text">Collect and categorize multicloud assets in one platform. Search cloud resources quickly and analyze them with detailed information in a single dashboard.</div>
                        <LinkText href="/">Learn about Asset Inventory</LinkText>
                    </div>
                </div>
            </div>
        </StyledSectionHome>
    </>
);

export default Home;
