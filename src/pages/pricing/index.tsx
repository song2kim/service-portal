import TopicSection from 'components/TopicSection';

const Pricing = () => {
    const TopicData = {
        title: 'Pricing',
        description: 'We offer a wide range of products starting from a simple demo account to a full-support enterprise account.',
    };

    return (
        <TopicSection title={TopicData.title} description={TopicData.description} />
    );
};

export default Pricing;
