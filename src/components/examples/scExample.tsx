import styled from 'styled-components';
import {Check} from '../../assets/icons';

const Heading = styled.h1`
  text-decoration: underline;
`;

const ScExample = () => {
    return (
        <>
            <Heading>I am styled-component</Heading>
            <Check />
        </>
    );
};

export default ScExample;
