import { FC } from 'react';
import { useRouter } from 'next/router';
import LinkText from '../../components/linkText';

const Main: FC = () => {
    const router = useRouter();
    return (
        <div style={{ padding: '10px' }}>
            <LinkText href="/example/linkButton">linkButton</LinkText>
            <br />
            <LinkText href="/example/linkText">linkText</LinkText>
            <button style={{ width: '100%' }} type="button" onClick={() => router.back()}>go Back</button>
        </div>
    );
};

export default Main;
