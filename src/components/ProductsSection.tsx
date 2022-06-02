import tw from 'twin.macro';
import styled from 'styled-components';
import device from '@/styles/theme';

interface ProductSectionProps {
    coreValue: string;
    title: string;
    description: string;
    imgSrc: string;
    hasBg: boolean;
    isReverse: boolean;
}

type ProductSectionStyle = Partial<ProductSectionProps>

const StyledProductSection = styled.section<ProductSectionStyle>`
  display: flex;
  align-items: center;
  min-height: 624px;
  
  ${(props) => (props.hasBg ? tw`bg-violet-100` : tw`bg-white`)}
  
  .section {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    column-gap: 40px;
    grid-auto-flow: dense;
    max-width: 1120px;
    margin: 0 auto;
    align-items: center;
    &__thumbnail {
      ${tw`bg-violet-100`}
      grid-column-start: span 6;
      ${(props) => (props.isReverse ? 'grid-column-end: -1' : '')};
      width: 100%;
      box-shadow: 12px 8px 14px 4px rgba(213, 213, 213, 0.35);
      border-radius: 16px;
    }
    &__text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      grid-column-start: span 5;
      ${(props) => (props.isReverse ? '' : 'grid-column-end: -1;')};
    }
    &__corevalue {
      ${tw`text-sm text-violet-300`}
      font-style: normal; 
    }
    &__title {
      ${tw`font-serif text-4xl`}
    }
    &__description { 
      ${tw`text-lg text-gray-500`}
      margin-top: 16px;
    }
  }
  
  @media ${device.laptop} {
    padding-top: 58px;
    padding-bottom: 58px;
    padding-right: 24px;
    padding-left: 24px;
    .section {
      grid-template-columns: repeat(8, 1fr);
      &__thumbnail {
        grid-column-start: span 5;
      }
      &__text {
        grid-column-start: span 3;
      }
    }
  }

  @media ${device.tablet} {
    min-height: auto;
    padding-top: 75px;
    padding-bottom: 75px;
    .section {
      grid-template-columns: repeat(4, 1fr);
      column-gap: 24px;
      &__thumbnail {
        grid-column-start: span 2;
        min-width: auto;
      }
      &__text {
        grid-column-start: span 2;
      }
    }
  }
  
  @media ${device.mobile} {
    padding-top: 48px;
    padding-bottom: 48px;
    .section {
      row-gap: 24px;
      &__thumbnail {
        grid-column-start: span 4;
        min-height: auto;
      }
      &__text {
        grid-column-start: span 4;
      }
    }
  }
`;

function ProductSection({
    coreValue = 'core value',
    title = 'title',
    description = 'description',
    imgSrc = '/', hasBg = false,
    isReverse = false,
}: ProductSectionProps) {
    return (
        <StyledProductSection isReverse={isReverse} hasBg={hasBg}>
            <div className="section">
                <img className="section__thumbnail" src={`/assets/images/${imgSrc}.svg`} alt={title} />
                <div className="section__text">
                    <em className="section__corevalue">{coreValue}</em>
                    <h3 className="section__title">{title}</h3>
                    <p className="section__description">{description}</p>
                </div>
            </div>
        </StyledProductSection>
    );
}

export default ProductSection;
