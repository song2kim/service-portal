import tw from 'twin.macro';
import styled from 'styled-components';
import { IcArrowTop } from 'assets/icons';
import React from 'react';
import LinkButton from 'components/LinkButton';
import ROUTE from '../constants/route';

const StyledReadySection = styled.section`
  ${tw`bg-violet-500`}
  .ready-section {
    ${tw`border-violet-200`}
    max-width: 926px;
    padding: 48px 0;
    margin: 0 auto;
    border-bottom-width: 1px;
    h3 {
      ${tw`text-white text-6xl`};
      white-space: pre-line;
    }
    &__buttons {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      margin: 24px 0 0;
    }
  }
  .button-top {
    ${tw`text-white`}
    &__text {
      display: inline-block;
      margin-right: 4px;
    }
  }   
`;

const ReadySection = ({ title = 'Ready for\nNew Cloud Management Platform?' }: { title?: string }) => {
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    };

    return (
        <StyledReadySection>
            <div className="ready-section">
                <h3>
                    {title}
                </h3>
                <div className="ready-section__buttons">
                    <LinkButton color="white" size="large" href={ROUTE.TALKTOSALES}>Talk to Sales</LinkButton>
                    <button className="button-top" onClick={goToTop} type="button">
                        <span className="button-top__text">Back to the top</span>
                        <IcArrowTop />
                    </button>
                </div>
            </div>
        </StyledReadySection>
    );
};

export default ReadySection;
