import tw from 'twin.macro';
import styled from 'styled-components';
import LinkText from './linkText';

interface HomeSectionProps {
    imgSrc: string;
    iconSrc: string;
    title: string;
    href: string;
    linkText: string;
    text: string;
    hasBg?: boolean;
}

const StyledHomeSection = styled.section<HomeSectionProps>`
  display: flex;
  align-items: center;
  min-height: 624px;

  ${(props) => (props.hasBg ? tw`bg-gray-100` : tw`bg-white`)
};
  
  .section {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    column-gap: 40px;
    max-width: 1120px;
    margin: 0 auto;
    .thumbnail {
      grid-column: 1 / span 7;
      min-height: 512px;
    }
    .description {
      display: flex;
      align-items: center;
      grid-column: span 5 / -1;
      &__icon {
        flex-grow: 0;
      }
      &__title {
        ${tw`font-serif text-4xl text-gray-600`};
        margin-top: 8px;
        margin-bottom: 20px;
      }
      &__text {
        ${tw`text-xl text-gray-500`};
        margin-bottom: 24px;
      }
    }
  }
`;

const HomeSection = ({
    imgSrc, iconSrc, title, href, linkText, text, hasBg,
}: HomeSectionProps) => (
    <StyledHomeSection hasBg={hasBg}>
        <div className="section">
            <img className="thumbnail" src={`/assets/images/${imgSrc}.svg`} alt="" />
            <div className="description">
                <div className="description__inner">
                    <img className="description__icon" src={`/assets/images/${iconSrc}.svg`} alt="icon" />
                    <h4 className="description__title">{title}</h4>
                    <p className="description__text">{text}</p>
                    <LinkText href={href}>{linkText}</LinkText>
                </div>
            </div>
        </div>
    </StyledHomeSection>
);

export default HomeSection;
