import tw from 'twin.macro';
import styled from 'styled-components';

const Heading = styled.h1`
  ${tw`underline`}
  //@apply underline
`;

const TwExample = () => {
    return <Heading>I am twin.macro</Heading>;
};

export default TwExample;
