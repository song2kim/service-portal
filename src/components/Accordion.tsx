import tw from 'twin.macro';
import styled from 'styled-components';
import { IcArrowUpLg, IcArrowDownLg } from 'assets/icons';
import React from 'react';

interface AccordionProps {
  title: string;
  content: string;
}

const StyledAccordion = styled.div`
    ${tw`bg-white border border-gray-100`};
    max-width: 926px;
    margin: 0 auto;
    border-bottom-width: 4px;
    .accordion {
      &__header {
        ${tw`text-xl`}
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 20px;
        svg {
          flex-shrink: 0;
        }
      }
      &__title {
        text-align: left;
      }
      &__content {
        ${tw`text-lg`}
        overflow: hidden;
        height: 0;
        width: 100%;
        padding: 0 16px;
        transition: height 0.35s ease;
      }
    }
`;

function Accordion({ title = 'title', content = 'This is accordion' }: AccordionProps) {
    const parentRef = React.useRef<HTMLDivElement>(null);
    const childRef = React.useRef<HTMLDivElement>(null);

    const [isCollapse, setIsCollapse] = React.useState(false);

    const handleButtonClick = React.useCallback(
        (event) => {
            event.stopPropagation();
            if (parentRef.current === null || childRef.current === null) {
                return;
            }
            if (parentRef.current.clientHeight > 0) {
                parentRef.current.style.height = '0';
            } else {
                parentRef.current.style.height = `${childRef.current.clientHeight + 20}px`;
            }
            setIsCollapse(!isCollapse);
        },
        [isCollapse],
    );

    // const parentRefHeight = parentRef.current?.style.height ?? '0px';

    return (
        <StyledAccordion>
            <div className="accordion">
                <button className="accordion__header" onClick={handleButtonClick} type="button">
                    <p className="accordion__title">{title}</p>
                    {isCollapse ? <IcArrowUpLg /> : <IcArrowDownLg />}
                </button>
                <div className="accordion__content" ref={parentRef}>
                    <p ref={childRef}>
                        {content}
                    </p>
                </div>
            </div>
        </StyledAccordion>
    );
}

export default Accordion;
