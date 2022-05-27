import tw from 'twin.macro';
import styled from 'styled-components';

const Heading = styled.h1`
  ${tw`underline`}
  //@apply underline
`;

const TwExample = () => <Heading>I am twin.macro</Heading>;

export default TwExample;
