import tw from 'twin.macro';
import styled from 'styled-components';
import device from '@/styles/theme';

interface TopicSectionProps {
    title: string;
    description: string;
}

const StyledTopicSection = styled.section`
  display: flex;
  height: 480px;
  align-items: center;
  .topic {
    display: grid;
    grid-template-columns: repeat(12,1fr);
    row-gap: 8px;
    width: 1120px;
    margin: 0 auto;
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

  @media ${device.laptop} {
    .topic {
      grid-template-columns: repeat(8,1fr);
      column-gap: 24px;
      padding-left: 24px;
      padding-right: 24px;
      &__title {
        grid-column: span 2;
      }
      &__description {
        grid-column: span 6 / -1;
      }
    }
  }

  @media ${device.tablet} {
    //height: auto;
    .topic {
      grid-template-columns: repeat(4,1fr);
      &__title {
        grid-column: span 4;
      }
      &__description {
        grid-column: span 4 / -1;
        padding-top: 0;
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
