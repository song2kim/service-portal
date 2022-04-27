import tw from 'twin.macro';
import styled from 'styled-components';
import {IcArrowTop } from 'assets/icons';
import React from 'react';
import LinkButton from 'components/LinkButton';

const StyledReadySection = styled.section`
  ${tw`bg-violet-500`}
  .ready-section {
    ${tw`border-violet-200`}
    max-width: 926px;
    padding: 48px 0;
    margin: 0 auto;
    border-bottom-width: 1px;
    h3 {
      ${tw`text-white text-6xl`}
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

const ReadySection = () => {
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
                    Ready for
                    <br />
                    New Cloud Management Platform?
                </h3>
                <div className="ready-section__buttons">
                    <LinkButton color="white" size="large" href="/">Talk to Sales</LinkButton>
                    <button className="button-top" onClick={goToTop}>
                        <span className="button-top__text">Back to the top</span>
                        <IcArrowTop />
                    </button>
                </div>
            </div>
        </StyledReadySection>
    );
};

export default ReadySection;
