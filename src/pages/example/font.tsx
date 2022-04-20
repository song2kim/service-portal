import { FC } from 'react';
import tw from 'twin.macro';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const StyledContainer = styled.div`
  ${tw`bg-violet-200`}
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding: 20px;
  
  h2 {
    ${tw`text-white text-4xl`}
  }
`;

const StyledGoBack = styled.button`
  ${tw`bg-violet-300`}
  position: fixed;
  top: 80px;
  right: 30px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const ExFont: FC = () => {
    const router = useRouter();
    return (
        <StyledContainer>
            <section>
                <h2>Font Family [Font Weight]</h2>
                <ul>
                    <li tw="font-serif font-light">Work Sans [light] 1234567890 Lorem ipsum dolor sit am</li>
                    <li tw="font-serif font-normal">Work Sans [normal/regular] 1234567890 Lorem ipsum dolor sit am</li>
                    <li tw="font-serif font-medium">Work Sans [medium] 1234567890 Lorem ipsum dolor sit am</li>
                    <li tw="font-serif font-semibold">Work Sans [semibold] 1234567890 Lorem ipsum dolor sit am</li>
                    <li tw="font-sans font-normal">Pretendard [normal] 1234567890 Lorem ipsum dolor sit am</li>
                    <li tw="font-sans font-medium">Pretendard [medium] 1234567890 Lorem ipsum dolor sit am</li>
                    <li tw="font-sans font-semibold">Pretendard [semi-bold] 1234567890 Lorem ipsum dolor sit am</li>
                    <li tw="font-sans font-bold">Pretendard [bold] 1234567890 Lorem ipsum dolor sit am</li>
                </ul>
            </section>
            <section>
                <h2>Font size</h2>
                <ul>
                    <li tw="font-sans text-sm">Pretendard 1234567890 Lorem ipsum dolor sit am</li>
                    <li tw="font-sans text-md">Pretendard 1234567890 Lorem ipsum dolor sit am</li>
                    <li tw="font-sans text-lg">Pretendard 1234567890 Lorem ipsum dolor sit am</li>
                    <li tw="font-sans text-xl">Pretendard 1234567890 Lorem ipsum dolor sit am</li>
                    <li tw="font-sans text-2xl">Pretendard 1234567890 Lorem ipsum dolor sit am</li>
                    <li tw="font-sans text-3xl">Pretendard 1234567890 Lorem ipsum dolor sit am</li>
                    <li tw="font-sans text-4xl">Pretendard 1234567890 Lorem ipsum dolor sit am</li>
                    <li tw="font-sans text-5xl">Pretendard 1234567890 Lorem ipsum dolor sit am</li>
                    <li tw="font-sans text-6xl">Pretendard 1234567890 Lorem ipsum dolor sit am</li>
                    <li tw="font-sans text-7xl">Pretendard 1234567890 Lorem ipsum dolor sit am</li>
                    <li tw="font-sans text-8xl">Pretendard 1234567890 Lorem ipsum dolor sit am</li>
                    <li tw="font-sans text-9xl">Pretendard 1234567890 Lorem ipsum dolor sit am</li>
                </ul>
                <ul>
                    <li tw="font-serif text-sm">Work Sans 1234567890 Lorem ipsum dolor sit am</li>
                    <li tw="font-serif text-md">Work Sans 1234567890 Lorem ipsum dolor sit am</li>
                    <li tw="font-serif text-lg">Work Sans 1234567890 Lorem ipsum dolor sit am</li>
                    <li tw="font-serif text-xl">Work Sans 1234567890 Lorem ipsum dolor sit am</li>
                    <li tw="font-serif text-2xl">Work Sans 1234567890 Lorem ipsum dolor sit am</li>
                    <li tw="font-serif text-3xl">Work Sans 1234567890 Lorem ipsum dolor sit am</li>
                    <li tw="font-serif text-4xl">Work Sans 1234567890 Lorem ipsum dolor sit am</li>
                    <li tw="font-serif text-5xl">Work Sans 1234567890 Lorem ipsum dolor sit am</li>
                    <li tw="font-serif text-6xl">Work Sans 1234567890 Lorem ipsum dolor sit am</li>
                    <li tw="font-serif text-7xl">Work Sans 1234567890 Lorem ipsum dolor sit am</li>
                    <li tw="font-serif text-8xl">Work Sans 1234567890 Lorem ipsum dolor sit am</li>
                    <li tw="font-serif text-9xl">Work Sans 1234567890 Lorem ipsum dolor sit am</li>
                </ul>
            </section>
            <StyledGoBack onClick={() => router.back()}>go Back</StyledGoBack>
        </StyledContainer>
    );
};

export default ExFont;
