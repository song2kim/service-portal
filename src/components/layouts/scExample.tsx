import { FC } from 'react';
import styled from 'styled-components';

const Heading = styled.h1`
  text-decoration: underline;
`;

const ScExample: FC = () => {
    console.log('SC detached');
    return <Heading>I am styled-component</Heading>;
};

export default ScExample;
