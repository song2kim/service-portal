import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import tw, { styled } from 'twin.macro';
import LinkButton from '../components/LinkButton';
import ROUTE from '../constants/route';

const StyledError = styled.section`
  ${tw`bg-violet-100`}
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 176px 0;
  h2 {
    ${tw`text-8xl`};
    margin: 8px 0 16px;
  }
  p {
    margin-bottom: 26px;
  }
`;

const Custom404 = () => (
    <StyledError>
        <img src="/assets/images/img_error_jellyoctos.svg" alt="" />
        <h2>404</h2>
        <p>Sorry, we can’t find what you’re looking for.</p>
        <LinkButton color="violet-400" size="large" href={ROUTE.HOME}>Back to home</LinkButton>
    </StyledError>
);

export const getStaticProps = async ({ locale }: { locale: string }) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common'])),
    },
});

export default Custom404;
