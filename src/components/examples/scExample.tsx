import styled from 'styled-components';
import { Check } from 'assets/icons';

const Heading = styled.h1`
  text-decoration: underline;
`;

const ScExample = () => (
    <>
        <Heading>I am styled-component</Heading>
        <Check />
    </>
);

export default ScExample;
