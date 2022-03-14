import { FC } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  font-size: large;
`;

const ScExample: FC = () => {
    console.log('detached');
    return (
        <Container>
            <h1 className="underline">I am styled-component</h1>
        </Container>
    );
};

export default ScExample;
