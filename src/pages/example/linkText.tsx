import { FC } from 'react';
import { useRouter } from 'next/router';
import LinkText from 'components/linkText';
import styled from 'styled-components';
import tw from 'twin.macro';

const StyledContainer = styled.div`
  ${tw`bg-violet-200`}
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding: 20px;
  min-height: calc(100vh - 64px);
`;

const StyledGoBack = styled.button`
  ${tw`bg-violet-300`}
  position: fixed;
  top: 80px;
  right: 30px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const ExLinkText: FC = () => {
    const router = useRouter();
    return (
        <StyledContainer>
            <LinkText href="/">default button</LinkText>
            <StyledGoBack onClick={() => router.back()}>go Back</StyledGoBack>
        </StyledContainer>
    );
};

export default ExLinkText;
