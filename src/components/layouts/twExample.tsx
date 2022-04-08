import { FC } from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';

const Heading = styled.h1`
  ${tw`underline`}
`;

const TwExample: FC = () => {
    console.log('TW detached');
    return <Heading>I am twin.macro</Heading>;
};

export default TwExample;
