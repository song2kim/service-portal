import tw from 'twin.macro';
import styled from 'styled-components';
import LinkButton from './linkButton';
import LinkText from './linkText';

const StyledReadySection = styled.section`
  ${tw`bg-violet-500`}
      .inner {
        ${tw`border-violet-200`}
        max-width: 926px;
        padding: 48px 0;
        margin: 0 auto;
        border-bottom-width: 1px;  
      }
      h3 {
        ${tw`text-white text-6xl`}
      }
      .buttons {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        margin: 24px 0 0;
      }
`;

const Footer = () => (
    <StyledReadySection>
        <div className="inner">
            <h3>
                Ready for
                <br />
                New Cloud Management Platform?
            </h3>
            <div className="buttons">
                <LinkButton color="white" size="large" href="/">Talk to Sales</LinkButton>
                <LinkText href="/" tw="text-white">Back to the top</LinkText>
            </div>
        </div>
    </StyledReadySection>
);

export default Footer;
