import tw from 'twin.macro';
import styled from 'styled-components';

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
    &__thumbnail {
      grid-column: span 6;
      ${(props) => (props.isReverse ? 'grid-column-end: -1' : '')};
      min-width: 540px;
      min-height: 368px;
    }
    &__text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      grid-column: span 5;
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
                    <h2 className="section__title">{title}</h2>
                    <p className="section__description">{description}</p>
                </div>
            </div>
        </StyledProductSection>
    );
}

export default ProductSection;
