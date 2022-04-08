import { FC } from 'react';
import { useRouter } from 'next/router';
import ScExample from '../../components/layouts/scExample';
import TwExample from '../../components/layouts/twExample';

const Main: FC = () => {
    const router = useRouter();
    return (
        <div style={{ textAlign: 'center' }}>
            <ScExample />
            <TwExample />
            <button type="button" onClick={() => router.back()}>go Back</button>
        </div>
    );
};

export default Main;
