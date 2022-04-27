import { useRouter } from 'next/router';
import styled from 'styled-components';
import tw from 'twin.macro';
import LinkButton from 'components/LinkButton';

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

function ExLinkButton() {
    const router = useRouter();
    return (
        <>
            <StyledContainer>
                <StyledItemRow>
                    <LinkButton href="/" color="violet-400" size="medium">violet / medium</LinkButton>
                    <LinkButton href="/" color="violet-400" size="medium">Talk to Sale</LinkButton>
                    <LinkButton href="/" color="violet-400" size="large">violet / large</LinkButton>
                </StyledItemRow>
                <StyledItemRow>
                    <LinkButton href="/" color="white" size="medium">white / medium</LinkButton>
                    <LinkButton href="/" color="white" size="large">white / large</LinkButton>
                </StyledItemRow>
            </StyledContainer>
            <StyledGoBack type="button" onClick={() => router.back()}>go Back</StyledGoBack>
        </>
    );
}

export default ExLinkButton;
