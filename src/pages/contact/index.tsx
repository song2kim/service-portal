import TopicSection from 'components/TopicSection';
import styled from 'styled-components';
import tw from 'twin.macro';
import LinkText from 'components/LinkText';
import { IcExternal } from 'assets/icons';

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
                { text: 'Technical support', href: '/' },
                { text: 'CloudForet documentation', href: '/' },
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
                { text: 'Github', href: '/' },
                { text: 'Youtube', href: '/' },
                { text: 'Facebook', href: '/' },
            ],
        },
    ];

    const AddressData = [
        {
            name: 'Seoul',
            address: '46 Nonhyeon-ro 85-gil\nYeoksam-dong\nGangnam-gu\nSeoul\nSouth Korea',
            href: 'https://www.google.com/maps/dir//Seoul,+Nonhyeon-ro+85-gil,+%EB%A9%94%EA%B0%80%EC%A1%B4%EB%B9%8C%EB%94%A9,+%EB%A9%94%EA%B0%80%EC%A1%B4%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C/data=!3m1!5s0x60188ca42e1df2c5:0xf9d5804bd9e36647!4m8!4m7!1m0!1m5!1m1!1s0x357ca1567124f385:0xa411d346f9163a6c!2m2!1d127.0342741!2d37.4982296',
        },
        {
            name: 'Tokyo',
            address: '6 Chome−12−18\nJingumae\nShibuya City\nTokyo\nJapan',
            href: 'https://www.google.com/maps/dir//WeWork+%E3%82%A2%E3%82%A4%E3%82%B9%E3%83%90%E3%83%BC%E3%82%B0+%E6%97%A5%E6%9C%AC+%E3%80%92150-0001+%E6%9D%B1%E4%BA%AC%E9%83%BD%E6%B8%8B%E8%B0%B7%E5%8C%BA%E7%A5%9E%E5%AE%AE%E5%89%8D%EF%BC%96%E4%B8%81%E7%9B%AE%EF%BC%91%EF%BC%92%E2%88%92%EF%BC%91%EF%BC%98+%E3%82%B8+%E3%82%A2%E3%82%A4%E3%82%B9%E3%83%90%E3%83%BC%E3%82%B0+1F/@35.6663762,139.7042606,19z/data=!4m8!4m7!1m0!1m5!1m1!1s0x60188d74a015fe2d:0x8483879597545cbe!2m2!1d139.7042606!2d35.6663762',
        },
        {
            name: 'Hong Kong',
            address: '46/F, Lee Garden One\n33 Hysan Ave\nCauseway Bay\nHong Kong',
            href: 'https://www.google.com/maps/dir//WeWork+Lee+Garden+One+46%2FF,+Lee+Garden+One+33+Hysan+Ave+Causeway+Bay,+Hong+Kong/@22.2784388,114.1847145,18z/data=!4m8!4m7!1m0!1m5!1m1!1s0x340401950dcad0bf:0x3e2d09888a08fb94!2m2!1d114.1847145!2d22.2784388',
        },
        {
            name: 'Vietnam',
            address: '54 P. Liễu Giai\nNgọc Khánh\nBa Đình\nHà Nội 117000\nVietnam',
            href: 'https://www.google.com/maps/dir//Lotte+Center+H%C3%A0+N%E1%BB%99i+54+P.+Li%E1%BB%85u+Giai+Ng%E1%BB%8Dc+Kh%C3%A1nh+Ba+%C4%90%C3%ACnh,+H%C3%A0+N%E1%BB%99i+117000,+Vi%E1%BB%87t+Nam/@21.0318761,105.8123032,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3135ab6cf59cc7e1:0xe98382655f28598e!2m2!1d105.8123032!2d21.0318761',
        },
        {
            name: 'California',
            address: '3031 Tisch Way\n110 Plaza West\nSan Jose\nCA 95128\nUnited States',
            href: 'https://www.google.com/maps/dir//Spaces+-+California,+San+Jose+-+Spaces+San+Jose+-+Santana+Row+Plaza+West+3031+Tisch+Way+%23110+San+Jose,+CA+95128,+United+States/@37.317537,-121.9476266,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x808fcadf57871f6b:0x74d3caea4de9be67!2m2!1d-121.9476266!2d37.317537',
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
                        <LinkText href={item.href}>
                            Get directions
                            <IcExternal />
                        </LinkText>
                    </div>
                ))}
            </StyledAddressList>
        </StyledContact>
    );
};

export default Contact;
