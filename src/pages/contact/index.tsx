import TopicSection from '@/components/TopicSection';
import styled from 'styled-components';
import tw from 'twin.macro';
import LinkText from '@/components/LinkText';
import { IcExternal } from '@/assets/icons';
import ROUTE from '@/constants/route';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import device from '@/styles/theme';
import Image from 'next/image';

const StyledContact = styled.div`
  ${tw`bg-violet-500 text-white`};
  .img-map {
    padding-top: 24px;
    padding-bottom: 40px;
    text-align: center;
  }
`;

const StyledContactChannels = styled.section`
  margin-top: 64px;
  .inner {
    ${tw`border-gray-200`};
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 40px;
    max-width: 1120px;
    margin:0 auto;
    padding-top: 64px;
    padding-bottom: 137px;
    border-top-width: 1px;
  }
  .contact {
    display: flex;
    flex-direction: column;
    grid-column: 4 span;
    &__channels {
      ${tw`text-3xl font-normal`};
    }
    > a {
      ${tw`text-white`};
      margin-top: 12px;
      svg {
        margin-left: 4px;
      }
    }
  }

  @media ${device.laptop} {
    padding-right: 24px;
    padding-left: 24px;
  }
  
  @media ${device.tablet} {
    .inner {
      grid-template-columns: repeat(8, 1fr);
      row-gap: 48px;
      padding-bottom: 88px;
    }  
  }

  @media ${device.mobile} {
    .inner {
      grid-template-columns: repeat(4, 1fr);  
      row-gap: 40px;
      padding-bottom: 64px;
    }
  }
`;

const StyledAddressList = styled.section`
  .inner {
    max-width: 1120px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 40px;
    grid-row-gap: 48px;
  }
  .address {
    grid-column: span 4;
    &__name {
      ${tw`text-3xl`};
      margin-bottom: 8px;
    }
    &__text {
      ${tw`text-lg`};
      white-space: pre-line;
      margin-bottom: 16px;
    }
    > a {
      ${tw`text-violet-200`};
    }
    &:nth-child(1), :nth-child(2), :nth-child(3) {
      ${tw`border-gray-200`};
      border-top-width: 1px;
      padding-top: 88px;
    }
  }
  
  @media ${device.laptop} {
    padding-right: 24px;
    padding-left: 24px;
  };
  
  @media ${device.tablet} {
    .inner { 
      grid-template-columns: repeat(8, 1fr);
    }
    .address {
      &:nth-child(3) {
        border: none;
        padding-top: 0;
      }
    }
  };
  
  @media ${device.mobile} {
    .inner {
      grid-template-columns: repeat(4, 1fr);
      grid-row-gap: 24px;  
    }
    .address {
      &:nth-child(2) {
        border: none;
        padding-top: 0;
      }
    }
  };
`;

const Contact = () => {
    const TopicData = {
        title: 'Contact',
        description: 'Have a question? \nPlease let us know how can we help.',
    };

    const ContactChannelsData = [
        {
            title: 'Support',
            contactList: [
                { text: 'Documentation', href: ROUTE.DOCS },
                { text: 'Sales Support', href: ROUTE.TALKTOSALES },
                { text: 'Technical Support', href: ROUTE.DEMO },
            ],
        },
        {
            title: 'Email',
            contactList: [
                { text: 'support@spaceone.com', href: 'mailto:support@spaceone.com' },
            ],
        },
        {
            title: 'Social',
            contactList: [
                { text: 'GitHub', href: ROUTE.GIT },
                { text: 'Youtube', href: ROUTE.YOUTUBE },
            ],
        },
    ];

    const AddressData = [
        {
            name: 'Seoul',
            address: '46 Nonhyeon-ro 85-gil\nYeoksam-dong\nGangnam-gu\nSeoul\nSouth Korea',
            href: ROUTE.COMPANY.SEOUL,
        },
        {
            name: 'Tokyo',
            address: '6 Chome−12−18\nJingumae\nShibuya City\nTokyo\nJapan',
            href: ROUTE.COMPANY.TOKYO,
        },
        {
            name: 'Shanghai',
            address: '235, WeWork\n135 Yanping Lu\nJing\'an District\nShanghai, 200042\nChina',
            href: ROUTE.COMPANY.SHANGHAIL,
        },
        {
            name: 'Hong Kong',
            address: '46/F, Lee Garden One\n33 Hysan Ave\nCauseway Bay\nHong Kong',
            href: ROUTE.COMPANY.HONGKONG,
        },
        {
            name: 'Vietnam',
            address: '54 P. Liễu Giai\nNgọc Khánh\nBa Đình\nHà Nội 117000\nVietnam',
            href: ROUTE.COMPANY.VIETNAML,
        },
        {
            name: 'California',
            address: '3031 Tisch Way\n110 Plaza West\nSan Jose\nCA 95128\nUnited States',
            href: ROUTE.COMPANY.CALIFORNIAL,
        },
    ];

    return (
        <StyledContact>
            <TopicSection title={TopicData.title} description={TopicData.description} />
            <StyledContactChannels>
                <div className="inner">
                    {ContactChannelsData.map((item) => (
                        <div className="contact" key={item.title}>
                            <div className="contact__channels">{item.title}</div>
                            {item.contactList.map((contact) => (
                                <LinkText href={`${contact.href}`} key={contact.text}>
                                    {contact.text}
                                    <IcExternal />
                                </LinkText>
                            ))}
                        </div>
                    ))}
                </div>
            </StyledContactChannels>
            <StyledAddressList>
                <div className="inner">
                    {AddressData.map((item) => (
                        <div className="address" key={item.name}>
                            <p className="address__name">{item.name}</p>
                            <p className="address__text">{item.address}</p>
                            <LinkText href={item.href} target="_blank">
                                Get directions
                                <IcExternal />
                            </LinkText>
                        </div>
                    ))}
                </div>
            </StyledAddressList>
            <div className="img-map">
                <Image
                    src="/assets/images/img_contact_map.svg"
                    width="1200px"
                    height="630px"
                />
            </div>
        </StyledContact>
    );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common'])),
    },
});

export default Contact;
