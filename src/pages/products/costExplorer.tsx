import ProductTopic from 'components/ProductsTopic';
import ProductSection from 'components/ProductsSection';
import ProductsHelp from 'components/ProductsHelp';
import FAQSection from 'components/FAQ';
import ROUTE from 'constants/route';
import ReadySection from '../../components/ReadySection';
import React from 'react';

const Answer2 = (
    <>
        <p>SpaceONE displays the cost usage data through the one-page dashboard and customizable widgets. Various types of visualization examples are listed below.!</p>
        <ul>
            <li>* Cost usage classified by selected standards</li>
            <li>* Monthly cost usage trend</li>
            <li>* Cost usage by cloud region</li>
            <li>* Traffic cost usage</li>
            <li>* CDN cost usage</li>
            <li>* Cost comparison with overall budget</li>
            <li>* Budget usage by project</li>
        </ul>
    </>
);

const CostExplorer = () => {
    const TopicData = {
        title: 'Analyze your costs easily and \nOptimize resources',
        subtitle: 'View your billing details thoroughly and optimize resources based on cost data analyzed. Control expenses and prevent overspendigs with budget management feature. ',
        iconSrc: 'ic_home_cost',
        href: ROUTE.TALKTOSALES,
    };

    const ProductData = [
        {
            coreValue: 'Cost Analysis',
            title: 'Explore cost details categorized by various standards',
            description: 'Group cost data by regions, cloud service providers, products. Various resource attributes and custom tags can be used for categorizing cloud cost data. Apply filters or set new queries to find the specific details you are looking for.',
            imgSrc: 'img_products_cost_analysis',
            hasBg: true,
            isReverse: false,
        }, {
            coreValue: 'Cost Dashboard',
            title: 'Visualize cost data with customized dashbaords',
            description: 'Add your own widgets to Cost Explorer dashboard with different layouts. From monthly spendings to cloud account cost insights, you can manage all cloud infrastucture cost in ONE-page dahsboard. ',
            imgSrc: 'img_products_cost_analysis',
            hasBg: true,
            isReverse: true,
        }, {
            coreValue: 'Budget',
            title: 'Manage expenditures through budgets and alerts',
            description: 'Set cost budgets on each project and manage the resource usage. Get notified based on custom thresholds through budget alerts. Check detected cost surges by comparing monthly resource cost data.',
            imgSrc: 'img_products_cost_analysis',
            hasBg: true,
            isReverse: false,
        },
    ];

    const FAQData = [
        {
            title: 'What kinds of standards are available for cost data classification?',
            content: 'Cost data can be categorized by cloud providers, cloud accounts, projects, categories, regions, products, and instance types. Each cost data can be subdivided daily/monthly, and can be viewed as cumulative data by specifying a specific time period.',
        },
        {
            title: 'What kinds of cost data are displayed through the dashboard?',
            content: Answer2,
        },
        {
            title: 'What features can I use to report based on SpaceONE cost data?',
            content: 'You can generate and export cost data reports. Create PDF format reports based on the dashboard you already customized via SpaceONE Cost Explorer. You can also download the cost dataset in xlsx file format.',
        },
        {
            title: 'Can I integrate SpaceONE with billing data managed in-house?',
            content: 'In addition to the cloud cost data provided by SpaceONE, you can integrate in-house cost data managed by ERP or Excel with SpaceONE. You can build your own custom plugin to import the in-house cost data. ',
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

            <FAQSection title="Want to learn more about Cost Explorer?" FAQData={FAQData} />
            <ProductsHelp />

            <ReadySection title="Ready for Cost Explorer to Analyze Cost Easily?" />
        </>
    );
};

export default CostExplorer;
