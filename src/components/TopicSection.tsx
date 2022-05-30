import tw, { theme } from 'twin.macro';
import styled from 'styled-components';

interface TopicSectionProps {
    title: string;
    description: string;
}

const StyledTopicSection = styled.section`
  display: flex;
  height: 416px;
  .topic {
    display: grid;
    grid-template-columns: repeat(12,1fr);
    width: 1120px;
    margin: 0 auto;
    padding-top: 176px;
    white-space: pre-wrap;
    &__title {
      ${tw`font-serif font-medium text-8xl`};
      grid-column: span 4;
    }
    &__description {
      ${tw`font-serif text-2xl`};
      flex-shrink: 0;
      grid-column: span 8 / -1;
      padding-top: 62px;
    }
  }
`;

function TopicSection({
    title = 'Title', description = 'This is description', ...props
}: TopicSectionProps) {
    return (
        <StyledTopicSection {...props}>
            <div className="topic">
                <h2 className="topic__title">{title}</h2>
                <p className="topic__description">{description}</p>
            </div>
        </StyledTopicSection>
    );
}

export default TopicSection;
