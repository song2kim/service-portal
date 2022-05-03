import ProductTopic from 'components/ProductsTopic';
import ProductSection from 'components/ProductsSection';
import ProductsHelp from 'components/ProductsHelp';
import FAQSection from 'components/FAQ';
import { useRouter } from 'next/router';
import ROUTE from '../../constants/route';

const AssetInventory = () => {
    const router = useRouter();
    console.log(router.pathname === ROUTE.PRODUCT.ASSET_INVENTORY);
    const TopicData = {
        title: 'Discover and\nManage multicloud resources',
        subtitle: 'Collect and categorize multicloud assets in one platform.\nSearch cloud resources quickly and analyze them with detailed information in one dashboard.',
        iconSrc: 'ic_home_community',
        href: '/',
    };

    const ProductData = [
        {
            coreValue: 'Cloud Inventory',
            title: 'Discover and scan all your assets in cloud',
            description: 'Integrate all your cloud service accounts and scan all existing resources. All cloud resources are collected through SpaceONE collector plugins based on cloud-platform-native APIs.',
            imgSrc: 'img_products_inventory',
            hasBg: true,
            isReverse: false,
        },
        {
            coreValue: 'Search Engine',
            title: 'Search your assets based on powerful query engine',
            description: 'Search with SpaceONE query engine based on raw resource data SpaceONE collected. SpaceONE provides various data including OS-level metrics, hardware information, connectivity information between cloud services, performance metrics, and tags you customized.',
            imgSrc: 'img_products_inventory',
            hasBg: false,
            isReverse: true,
        },
    ];

    const FAQData = [
        {
            title: 'What kind of resource data does SpaceONE collect?',
            content: 'This is content',
        },
        {
            title: 'Does SpaceONE support integration with private cloud?',
            content: 'This is content',
        },
        {
            title: 'How often does SpaceONE collect cloud resource data? Can I customize collecting schedule?',
            content: 'This is content',
        },
        {
            title: 'How can I export cloud resource dataset to analyze?',
            content: 'This is content',
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

export default AssetInventory;
