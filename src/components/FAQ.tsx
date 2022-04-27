import tw from 'twin.macro';
import styled from 'styled-components';
import Accordion from './Accordion';

interface FAQProps {
    title: string;
}

const StyledFAQSection = styled.section`
    ${tw`bg-gray-100`};
    padding: 112px 160px;
    .faq {
      width: 1120px;
      margin: 0 auto;
      &__title {
        ${tw`font-serif text-6xl font-medium`};
        margin-bottom: 48px;
        text-align: center;
      }  
    }
    
`;

function FAQSection({ title = 'FAQ' }: FAQProps) {
    const FAQData = [
        {
            title: 'What kind of resource data does SpaceONE collect?',
            contents: 'This is contents',
        },
        {
            title: 'Does SpaceONE support integration with private cloud?',
            contents: 'This is contents',
        },
        {
            title: 'How often does SpaceONE collect cloud resource data? Can I customize collecting schedule?',
            contents: 'This is contents',
        },
        {
            title: 'How can I export cloud resource dataset to analyze?',
            contents: 'This is contents',
        },
    ];

    return (
        <StyledFAQSection>
            <div className="faq">
                <h3 className="faq__title">{title}</h3>
                {FAQData.map((item, index) => (
                    <Accordion title={item.title} contents={item.contents} key={index} />
                ))}
            </div>
        </StyledFAQSection>
    );
}

export default FAQSection;
