import ProductTopic from 'components/ProductsTopic';
import ProductSection from 'components/ProductsSection';
import ProductsHelp from 'components/ProductsHelp';
import FAQSection from 'components/FAQ';
import ROUTE from 'constants/route';
import React from 'react';
import ReadySection from 'components/ReadySection';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const AssetInventory = () => {
    const TopicData = {
        title: 'Discover and \nManage multicloud resources',
        subtitle: 'Collect and categorize multi-cloud assets in ONE platform. \nSearch cloud resources quickly and analyze them with detailed information in ONE dashboard.',
        iconSrc: 'ic_home_community',
        href: ROUTE.TALKTOSALES,
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
        {
            coreValue: 'Monitoring',
            title: 'Integrate monitoring data from cloud service providers',
            description: 'View monitoring data from AWS Cloudwatch, Azure Monitor and GCP Operations suite(formerly Stackdriver) in real-time. Consolidate monitoring features and visualize the data in SpaceONE by pre-built integration feature.',
            imgSrc: 'img_products_inventory',
            hasBg: true,
            isReverse: false,
        },
        {
            coreValue: 'Change Management',
            title: 'View change histories of cloud resources',
            description: 'Manage changes from cloud resources. SpaceONE records any change in resource data. Change management is essential in fault management and governance.',
            imgSrc: 'img_products_inventory',
            hasBg: true,
            isReverse: true,
        },
    ];

    const FAQData = [
        {
            title: 'How does SpaceONE collect resource data from cloud service providers such as AWS, Azure and GCP?',
            content: 'SpaceONE provides customized collectors for each cloud service provider. Each collector collects resource data via the API provided by each cloud service provider.',
        },
        {
            title: 'What kind of resource data does SpaceONE collect?',
            content: 'SpaceONE supports various cloud service data. SpaceONE collects cloud service data provided by public cloud service providers (AWS, Azure, Google Cloud) as shown in the list below.',
        },
        {
            title: 'What kind of cloud services can be integrated with SpaceONE Asset Inventory? Does SpaceONE support integration with private cloud?',
            content: 'SpaceONE supports public cloud service providers including AWS, Azure, and Google Cloud. It also supports private cloud service providers, namely OpenStack and VMware. Furthermore, it can be integrated with Kubernetes (K8S). ',
        },
        {
            title: 'How often does SpaceONE collect cloud resource data? Can I customize collecting schedule?',
            content: 'You can adjust the resource collection schedule yourself. You can set the schedule by specifying a datetime in units of days and hours.',
        },
        {
            title: 'How can I export cloud resource dataset to analyze?',
            content: 'You can export resource data sets to a file in xlsx format.',
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

            <ReadySection title="Ready for Asset Inventory to \n Discover Multi-Cloud Resources?" />
        </>
    );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common'])),
    },
});

export default AssetInventory;
