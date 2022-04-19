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
`;

const StyledItemRow = styled.li`
    > a {
      margin-right: 10px;
    } 
`;

const Main: FC = () => {
    const router = useRouter();
    return (
        <>
            <StyledContainer>
                <StyledItemRow><LinkButton href="/">default button</LinkButton></StyledItemRow>
                <StyledItemRow>
                    <LinkButton color="violet-400" size="medium">violet / medium</LinkButton>
                    <LinkButton color="violet-400" size="large">violet / large</LinkButton>
                </StyledItemRow>
                <StyledItemRow>
                    <LinkButton color="white" size="medium">white / medium</LinkButton>
                    <LinkButton color="white" size="large">white / large</LinkButton>
                </StyledItemRow>
            </StyledContainer>
            <button style={{ width: '100%' }} type="button" onClick={() => router.back()}>go Back</button>
        </>
    );
};

export default Main;
