import tw from 'twin.macro';
import styled from 'styled-components';
import LinkButton from 'components/LinkButton';

interface TopicSectionProps {
    title: string;
    subtitle: string;
    iconSrc: string;
    href: string;
}

const StyledTopicSection = styled.section`
  max-width: 1120px;
  margin: 0 auto;
  padding: 176px 0 112px;
  .topic {
    text-align: center;
    white-space: pre-wrap;
    &__icon {
      display: inline-block;
      width: 80px;
      min-height: 80px;
      margin-bottom: 16px;
    }
    &__title {
    ${tw`text-8xl font-medium font-serif`}
    }
    &__subtitle {
      padding: 20px 0 46px;
    }
  }
`;

function ProductTopic({
    title = 'title', subtitle = 'subtitle', iconSrc = '/', href = '/',
}: TopicSectionProps) {
    return (
        <StyledTopicSection>
            <div className="topic">
                <img className="topic__icon" src={`/assets/images/${iconSrc}.svg`} alt={title} />
                <h2 className="topic__title">{title}</h2>
                <p className="topic__subtitle">{subtitle}</p>
                <LinkButton href={href} color="violet-400" size="large">Talk to Sales</LinkButton>
            </div>
        </StyledTopicSection>
    );
}

export default ProductTopic;
