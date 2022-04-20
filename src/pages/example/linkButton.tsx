import { FC } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import tw from 'twin.macro';
import LinkButton from 'components/linkButton';

const StyledContainer = styled.ul`
  ${tw`bg-violet-200`}
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding: 20px;
  min-height: calc(100vh - 64px);
`;

const StyledItemRow = styled.li`
    > a {
      margin-right: 10px;
    } 
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

const ExLinkButton: FC = () => {
    const router = useRouter();
    return (
        <>
            <StyledContainer>
                <StyledItemRow>
                    <LinkButton color="violet-400" size="medium">violet / medium</LinkButton>
                    <LinkButton color="violet-400" size="large">violet / large</LinkButton>
                </StyledItemRow>
                <StyledItemRow>
                    <LinkButton color="white" size="medium">white / medium</LinkButton>
                    <LinkButton color="white" size="large">white / large</LinkButton>
                </StyledItemRow>
            </StyledContainer>
            <StyledGoBack type="button" onClick={() => router.back()}>go Back</StyledGoBack>
        </>
    );
};

export default ExLinkButton;
