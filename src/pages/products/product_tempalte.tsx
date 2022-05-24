import ProductTopic from 'components/ProductsTopic';
import ProductSection from 'components/ProductsSection';
import ProductsHelp from 'components/ProductsHelp';
import FAQSection from 'components/FAQ';
import ROUTE from 'constants/route';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const AssetInventory = () => {
    const TopicData = {
        title: 'Analyze your costs easily and \nOptimize resources',
        subtitle: 'View your billing details thoroughly and optimize resources based on cost data analyzed. Control expenses and prevent overspendigs with budget management feature. ',
        iconSrc: 'ic_home_cost',
        href: ROUTE.TALKTOSALES,
    };

    const ProductData = [
        {
            coreValue: '',
            title: '',
            description: '',
            imgSrc: '',
            hasBg: true,
            isReverse: false,
        }, {
            coreValue: '',
            title: '',
            description: '',
            imgSrc: '',
            hasBg: true,
            isReverse: false,
        }, {
            coreValue: '',
            title: '',
            description: '',
            imgSrc: '',
            hasBg: true,
            isReverse: false,
        }, {
            coreValue: '',
            title: '',
            description: '',
            imgSrc: '',
            hasBg: true,
            isReverse: false,
        },
    ];

    const FAQData = [
        {
            title: '',
            content: '',
        },
        {
            title: '',
            content: '',
        },
        {
            title: '',
            content: '',
        },
        {
            title: '',
            content: '',
        },
        {
            title: '',
            content: '',
        },
    ];

    return (
        <>
            <ProductTopic
                title={TopicData.title}
                subtitle={TopicData.subtitle}
                iconSrc={TopicData.iconSrc}
                href={TopicData.href}
            />
            {ProductData.map((item) => (
                <ProductSection
                    key={item.title}
                    coreValue={item.coreValue}
                    title={item.title}
                    description={item.description}
                    imgSrc={item.imgSrc}
                    hasBg={item.hasBg}
                    isReverse={item.isReverse}
                />
            ))}
            <FAQSection title="Want to learn more about Asset Inventory?" FAQData={FAQData} />
            <ProductsHelp />
        </>
    );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common'])),
    },
});

export default AssetInventory;
