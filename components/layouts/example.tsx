import { FC } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  font-size: large;
`;

const Example: FC = () => {
    console.log('detached');
    return (
        <Container className="underline">
            <h1>hello servicePortal</h1>
        </Container>
    );
};

export default Example;
