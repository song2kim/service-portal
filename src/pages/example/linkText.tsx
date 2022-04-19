import { FC } from 'react';
import { useRouter } from 'next/router';
import LinkText from 'components/linkText';

const Main: FC = () => {
    const router = useRouter();
    return (
        <>
            <LinkText href="">default button</LinkText>
            <button style={{ width: '100%' }} type="button" onClick={() => router.back()}>go Back</button>
        </>
    );
};

export default Main;
