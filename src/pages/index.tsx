import type { NextPage } from 'next';
import Head from 'next/head';
import HomeSection from 'components/HomeSection';
import LinkButton from 'components/LinkButton';
import LinkText from 'components/LinkText';
import { IcArrowRight } from 'assets/icons';
import styled from 'styled-components';
import tw from 'twin.macro';
import Customers from 'components/Customers';
import React from 'react';

const StyledTopicSection = styled.section`
  ${tw`bg-violet-100`}
  padding-top: 112px;
  margin-bottom: 112px;
  .topic {
    max-width: 926px;
    margin: 0 auto;
    &__inner {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      column-gap: 40px;
      margin-bottom: 40px;
    }
    &__left {
      grid-column: 1 / span 7;
    }
    &__right {
      grid-column: span 5 / -1;
      align-self: end;
    }
    &__title { 
      ${tw`font-serif font-semibold text-9xl text-gray-600`}
        span {
          ${tw`text-primary`}
          display: inline-block;
          margin-left: 12px;
        }
    }
    &__subtitle {
      ${tw`text-xl text-gray-500`}
      margin-top: 24px;
    }
    &__thumbnail {
        width: 100%; 
        height: 100%;
    }
  }
  .customers {
    display: flex;
    height: 128px;
    align-items: center;
    margin-top: 16px;
    p {
      ${tw`text-lg text-gray-300`}
      margin-right: 32px;
    }
  }
  .video {
    ${tw`font-serif text-lg text-white`}
    width: 1400px;
    min-height: 640px;
    margin: 64px auto 0;

    background-color: lightseagreen;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const StyledH3 = styled.h3`
  ${tw`font-serif font-medium text-7xl`}
  text-align: center;
`;

const StyledHelpSection = styled.section`
  ${tw`bg-violet-100`}
  padding: 112px 0;
  
  .help {
    display: flex;
    align-items: center;
    column-gap: 40px;
    max-width: 926px;
    margin: 40px auto 0;
    &__item {
      display: flex;
      align-items: center;
      column-gap: 16px;
    }
    &__icon {
      flex-shrink: 0;
      width: 80px;
    }
    &__title {
      ${tw`font-semibold text-3xl text-gray-600`}
    }
    &__text {
      ${tw`text-lg text-gray-500`}
      margin: 8px 0;
    }
  }
`;

const Home: NextPage = () => {

    const HomeSectionDate = [
        {
            title: 'Discover and manage multicloud resources',
            text: 'Collect and categorize multicloud assets in one platform. Search cloud resources quickly and analyze them with detailed information in a single dashboard.',
            imgSrc: 'img_home_asset_inventory',
            iconSrc: 'ic_home_asset_inventory',
            href: '/',
            linkText: 'Learn about Asset Inventory',
            hasBg: false,
        },
        {
            title: 'Notify events and manage incidents automatically',
            text: 'Respond to incidents quickly with real-time notifications. Improve user experience by strengthening your team\'s capability based on post-mortem features.',
            imgSrc: 'img_home_alert',
            iconSrc: 'ic_home_alert',
            href: '/',
            linkText: 'Learn about Alert Manager',
            hasBg: true,
        },
        {
            title: 'Analyze your costs easily and optimize resources',
            text: 'View your billing details thoroughly and optimize resources based on cost data analyzed. Control expenses and prevent overspendings with budget management feature. ',
            imgSrc: 'img_home_cost',
            iconSrc: 'ic_home_cost',
            href: '/',
            linkText: 'Learn about Cost Explorer',
            hasBg: false,
        },
        {
            title: 'Control user access through identity integration and RBAC',
            text: 'Add users easily by integrating external identity services such as Google oAuth and Keycloak. Manage SpaceONE user access by assigning roles through RBAC feature.',
            imgSrc: 'img_home_IMA',
            iconSrc: 'ic_home_IMA',
            href: '/',
            linkText: 'Learn about IAM',
            hasBg: true,
        },
    ];

    const HomeSectoinList = HomeSectionDate.map(
        (item) => (
            <HomeSection
                title={item.title}
                text={item.text}
                imgSrc={item.imgSrc}
                iconSrc={item.iconSrc}
                href={item.href}
                linkText={item.linkText}
                hasBg={item.hasBg}
            />
        )
        ,
    );

    const HelpSectionDate = [
        {
            title: 'Documentation',
            text: 'Find the best ways to start managing cloud infrastructure with CloudForet’s easy-to-follow documentation.',
            iconSrc: 'ic_home_community',
            href: '/',
            linkText: 'Visit the Documentation',
        },
        {
            title: 'CloudForet Community',
            text: 'Join our forum and share your knowledge with the broader community. Connect with fellow users and learn new skills.',
            iconSrc: 'ic_home_documentation',
            href: '/',
            linkText: 'Visit the Community',
        },
    ];

    const HelpSectionList = HelpSectionDate.map(
        (item) => (
            <div className="help__item">
                <img
                    className="help__left help__icon"
                    src={`/assets/images/${item.iconSrc}.svg`}
                    alt=""
                />
                <div className="help__right ">
                    <strong className="help__title">{item.title}</strong>
                    <div className="help__text">{item.text}</div>
                    <LinkText href={item.href}>
                        {item.linkText}
                        <IcArrowRight />
                    </LinkText>
                </div>
            </div>
        )
        ,
    );

    return (
        <>
            <Head>
                <title>Service Portal</title>
                <meta name="description" content="ServicePortal home description" />
            </Head>
            <StyledTopicSection>
                <div className="topic">
                    <div className="topic__inner">
                        <div className="topic__left">
                            <h2 className="topic__title">
                                Manage All Cloud Resources in
                                <span>One Platform</span>
                            </h2>
                            <p className="topic__subtitle">
                                We make our universe a better place that
                                changes the way you operates in the IT infrastructures across
                                on-premises and multiclouds.
                            </p>
                        </div>
                        <img
                            className="topic__right topic__thumbnail"
                            src="/assets/images/img_home_topic.svg"
                            alt="topic"
                        />
                    </div>
                    <LinkButton color="violet-400" size="large" href="">Talk to Sales</LinkButton>
                    <div className="customers">
                        <p>Loved by customers</p>
                        <Customers />
                    </div>
                </div>
                <div className="video">Watch the Video</div>
            </StyledTopicSection>
            <StyledH3>We make multicloud managed</StyledH3>
            {HomeSectoinList}
            <StyledHelpSection>
                <StyledH3>We’ll help you</StyledH3>
                <div className="help">{HelpSectionList}</div>
            </StyledHelpSection>
        </>
    );
};

export default Home;
