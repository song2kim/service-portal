import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import tw, { styled } from 'twin.macro';
import LinkButton from '@/components/LinkButton';
import ROUTE from '@/constants/route';
import device from '@/styles/theme';
import Image from 'next/image';

const StyledError = styled.section`
  ${tw`bg-violet-100`}
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 176px;
  padding-bottom: 176px;
  .error {
    &__title {
      ${tw`text-8xl text-violet-500`};
      margin-bottom:8px;
    }
    &__sub {
      ${tw`text-4xl`};
      margin-bottom: 24px;
    }
    &__description {
      ${tw`text-2xl`};
      text-align: center;
      margin-bottom: 40px;
    } 
  }
  
  @media ${device.mobile} {
    padding-right: 24px;
    padding-left: 24px;
    h2 {
      ${tw`text-m-md`}
    }
  }
`;

const Custom404 = () => (
    <StyledError>
        <Image
            src="/assets/images/img_error_jellyoctos.svg"
            alt=""
            width="462px"
            height="400px"
        />
        <h2 className="error__title">Error 404</h2>
        <p className="error__sub">Page not found</p>
        <p className="error__description">
            Sorry, we can&apos;t seem to find what you&apos;re looking for.
            <br />
            Check the web address and try again or return to the homepage.
        </p>
        <LinkButton color="violet-400" size="large" href={ROUTE.HOME}>Back to home</LinkButton>
    </StyledError>
);

export const getStaticProps = async ({ locale }: { locale: string }) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common'])),
    },
});

export default Custom404;
