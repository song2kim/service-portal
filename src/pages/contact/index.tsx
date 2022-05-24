import TopicSection from 'components/TopicSection';
import styled from 'styled-components';
import tw from 'twin.macro';
import LinkText from 'components/LinkText';
import { IcExternal } from 'assets/icons';
import ROUTE from 'constants/route';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const StyledContact = styled.div`
  ${tw`bg-violet-500 text-white`};
`;

const StyledContactChannels = styled.section`
  ${tw`border-gray-200`};
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 40px;
  max-width: 1120px;
  margin: 64px auto 0;
  padding-top: 64px;
  border-top-width: 1px;
  
  .contact {
    ${tw`border-gray-200`};
    display: flex;
    flex-direction: column;
    grid-column: 4 span;
    padding-bottom: 137px;
    border-bottom-width: 1px;
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
`;

const StyledAddressList = styled.section`
    ${tw``};
  max-width: 1120px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 48px;
  margin-top: 88px;
  padding-bottom: 700px;
  
  .address {
    grid-column: span 4;
    &__text {
      white-space: pre-line;
    }
    > a {
      ${tw`text-violet-200`};
      margin-top: 16px;
    }
  }
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
                { text: 'Facebook', href: ROUTE.FACEBOOK },
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
            </StyledContactChannels>
            <StyledAddressList>
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
            </StyledAddressList>
        </StyledContact>
    );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common'])),
    },
});

export default Contact;
