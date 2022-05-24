import ProductTopic from 'components/ProductsTopic';
import ProductSection from 'components/ProductsSection';
import ProductsHelp from 'components/ProductsHelp';
import FAQSection from 'components/FAQ';
import ROUTE from 'constants/route';
import ReadySection from 'components/ReadySection';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const AlertManager = () => {
    const TopicData = {
        title: 'Notify events and manage incidents automatically',
        subtitle: 'Respond to incidents quickly with real-time notifications. Improve user experience by strengthening your team\'s capability based on post-mortem features.',
        iconSrc: 'ic_home_alert',
        href: ROUTE.TALKTOSALES,
    };

    const ProductData = [
        {
            coreValue: 'Alert Dashboard',
            title: 'Get incident alerts from external monitoring solutions',
            description: 'Manage incident alerts in ONE dashboard. Integrate SpaceONE with Grafana, Zabbix, Prometheus and Amazon SNS. Automate receiving alerts by webhook based SpaceONE plugins.',
            imgSrc: 'img_products_cost_analysis',
            hasBg: true,
            isReverse: false,
        },
        {
            coreValue: 'Notifications',
            title: 'Send notifications through various channels',
            description: 'Get notified automatically through Slack, Telegram, Jira, Email, SMS or Voice call. Apply escalation policy to deliver notifications efficiently.',
            imgSrc: 'img_products_cost_analysis',
            hasBg: false,
            isReverse: true,
        },
        {
            coreValue: 'Incident History',
            title: 'Manage workflows to resolve incidents',
            description: 'Assign members to each incident generated. Manage incident alerts through urgency and issue-handling status. Keep track of incident history and manage workflows to resolve incidents.',
            imgSrc: 'img_products_cost_analysis',
            hasBg: true,
            isReverse: false,
        },
    ];

    const FAQData = [
        {
            title: 'What kind of external services can be integrated with SpaceONE Alert Manager?',
            content: 'Table + External Monitoring Solutions: Grafana, Zabbix, Prometheus, Amazon SNS\n'
                + 'Notification Channels: Slack, Telegram, Jira, SMS, Voice Call, Email',
        },
        {
            title: 'How do I integrate external monitoring solutions with SpaceONE?',
            content: 'You can integrate an external monitoring solution in 2 steps. First, create a webhook URL of the external solution in SpaceONE. Next, assign the webhook URL as an alarm message destination in the external solution. Please check the link for a detailed integration guide.\n'
                + '\n'
                + 'Even though the external monitoring solutions you use are not supported by SpaceONE, you can integrate the solution yourself. You can build your own custom plugin based on standard API webhooks, to integrate with Alert Manager.',
        },
        {
            title: 'What is an escalation policy?',
            content: 'Escalation policy is a level-based alert delivery policy sending notifications in predefined orders. You can assign users and notification channels for each level in an alert delivery process. \n'
                + '\n'
                + 'For example, in level 1, SpaceONE sends alerts to level-1-assigned users via a predefined channel such as Slack. If the level-1-assigned users do not respond to the alert for a certain amount of time(30 min), the level-2-assigned users get the alert based on the escalation policy defining the object to be notified and the channel to use for notifications such as SMS. If alerts are not checked again in level 2, the level-3-assigned users will get notifications in the order defined by the policy.',
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
            <FAQSection title="Want to learn more about Alert Manager?" FAQData={FAQData} />
            <ProductsHelp />
            <ReadySection title="Ready for Alert Manager to Manage Incidents Automatically?" />
        </>
    );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common'])),
    },
});

export default AlertManager;
