import TopicSection from 'components/TopicSection';

const Pricing = () => {
    const TopicData = {
        title: 'FAQ',
        description: 'Check frequently asked questions and \nGet your questions answered.',
    };

    return (
        <TopicSection title={TopicData.title} description={TopicData.description} />
    );
};

export default Pricing;
