import tw from 'twin.macro';
import styled from 'styled-components';
import LinkText from '@/components/LinkText';
import { IcArrowRight } from '@/assets/icons';
import ROUTE from '@/constants/route';
import device from '@/styles/theme';

const StyledProductHelp = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 392px;
  .help {
    text-align: center;
      &__thumbnail {
        display: inline-block;
      }
    &__title {
      ${tw`text-6xl font-serif`}
      margin: 12px 0 16px;
    }
  }
  
  @media ${device.mobile} {
    padding: 0 24px;
  }
`;

function ProductSection() {
    return (
        <StyledProductHelp>
            <div className="help">
                <img className="help__thumbnail" src="/assets/images/img_products_jellyoctos.svg" alt="" />
                <p className="help__title">Not finding what you’re looking for?</p>
                <LinkText href={ROUTE.DOCS}>
                    Visit the Docs for more
                    <IcArrowRight />
                </LinkText>
            </div>
        </StyledProductHelp>
    );
}

export default ProductSection;
