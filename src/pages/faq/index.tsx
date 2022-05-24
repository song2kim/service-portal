import TopicSection from 'components/TopicSection';
import FAQSection from 'components/FAQ';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Pricing = () => {
    const TopicData = {
        title: 'FAQ',
        description: 'Check frequently asked questions and \nGet your questions answered.',
    };

    const FAQData = [
        {
            title: 'What payment methods do you offer?',
            content: 'This is content',
        },
        {
            title: 'How do I switch to a different plan?',
            content: 'This is content',
        },
        {
            title: 'Can I buy credits instead?',
            content: 'This is content',
        },
        {
            title: 'Do you have pricing for high-volume email senders?',
            content: 'This is content',
        },
        {
            title: 'How can I buy SpaceONE apps for advanced features?',
            content: 'This is content',
        },
        {
            title: 'What payment methods do you offer?',
            content: 'This is content',
        },
    ];

    return (
        <>
            <TopicSection title={TopicData.title} description={TopicData.description} />
            <FAQSection FAQData={FAQData} />
        </>
    );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common'])),
    },
});

export default Pricing;
