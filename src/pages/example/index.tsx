import { FC } from 'react';
import { useRouter } from 'next/router';
import LinkText from 'components/LinkText';
import styled from 'styled-components';
import tw from 'twin.macro';

const StyledGoBack = styled.button`
  ${tw`bg-violet-300`}
  position: fixed;
  top: 80px;
  right: 30px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const ExIndex: FC = () => {
    const router = useRouter();
    return (
        <div style={{ padding: '10px' }}>
            <ul>
                <li><LinkText href="/example/font">font</LinkText></li>
                <li><LinkText href="/example/linkButton">linkButton</LinkText></li>
                <li><LinkText href="/example/linkText">linkText</LinkText></li>
            </ul>
            <StyledGoBack onClick={() => router.back()}>go Back</StyledGoBack>
        </div>
    );
};

export default ExIndex;
