import tw from 'twin.macro';
import styled from 'styled-components';
import Accordion from '@/components/Accordion';
import device from '@/styles/theme';

interface FAQProps {
    title?: string;
    FAQData: Array<{title: string; content: string | object}>;
}

const StyledFAQSection = styled.section`
    ${tw`bg-gray-100`};
    padding-top: 88px;
    padding-right: 160px;
    padding-bottom: 160px;
    padding-left: 160px;
    .faq {
      width: 1120px;
      margin: 0 auto;
      &__title {
        ${tw`font-serif text-6xl font-medium`};
        margin-top: 24px;
        margin-bottom: 48px;
        text-align: center;
      }  
    }
  
  @media ${device.laptop} {
    padding-right: 24px;
    padding-left: 24px;
    .faq {
      width: auto;
    }
  }
`;

function FAQSection({ title, FAQData = [] }: FAQProps) {
    return (
        <StyledFAQSection>
            <div className="faq">
                {title && <h3 className="faq__title">{title}</h3>}
                {FAQData.map((item) => (
                    <Accordion key={item.title} title={item.title} content={item.content} />
                ))}
            </div>
        </StyledFAQSection>
    );
}

export default FAQSection;
