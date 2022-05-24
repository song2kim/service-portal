import ProductTopic from 'components/ProductsTopic';
import ProductSection from 'components/ProductsSection';
import ProductsHelp from 'components/ProductsHelp';
import FAQSection from 'components/FAQ';
import ROUTE from 'constants/route';
import ReadySection from 'components/ReadySection';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const IAM = () => {
    const TopicData = {
        title: 'Manage users, roles, permissions to each project easily',
        subtitle: 'Add team members to join SpaceONE and manage your infrastructure. Assign roles to SpaceONE users in your domain. ',
        iconSrc: 'ic_home_IMA',
        href: ROUTE.TALKTOSALES,
    };

    const ProductData = [
        {
            coreValue: 'External Authentications',
            title: 'Authenticate users by identity service',
            description: 'Choose various authentication options. SpaceONE supports from local ID / password to external identity services including Google oAuth2, Active Directory, Keycloak.',
            imgSrc: 'img_products_cost_analysis',
            hasBg: true,
            isReverse: false,
        },
        {
            coreValue: 'RBAC',
            title: 'Control access permissions by roles and policies',
            description: 'Apply access policies to manage user roles. Fine-tune access permissions with SpaceONE RBAC(Role-Based Access Control) system.',
            imgSrc: 'img_products_cost_analysis',
            hasBg: false,
            isReverse: true,
        },
    ];

    const FAQData = [
        {
            title: 'What kind of authentication options does SpaceONE provide?',
            content: 'SpaceONE supports Google oAuth2, Active Directory, Keycloak and local ID / password authentication.\n'
                + '\n'
                + 'You can integrate other external identity services by developing your own custom plugins.',
        },
        {
            title: 'What kind of roles can an admin account assign to users?',
            content: 'SpaceONE\'s managed RBAC policy provides 4 kinds of roles to assign. \n'
                + '\n'
                + '(Table)\n'
                + 'PORTAL-T-03\n'
                + 'Domain Admin: Administrator permission controlling full system\n'
                + 'Domain Viewer: Viewer permission viewing all resource data\n'
                + 'Project Admin: Administrator permission managing members and resources, limited in the certain project assigned\n'
                + 'Project Viewer: Viewer permission viewing resource data, limited in the certain project assigned',
        },
        {
            title: 'Can I customize user access policies?',
            content: 'You can create or change custom policies by yourself in addition to the managed policies provided by default. Detailed permissions can be set for specific features such as viewer/admin permission in per-page level, API access permission, and scope of per-project level.',
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
            <ReadySection title="Ready for IAM to Manage Users and Roles?" />
        </>
    );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common'])),
    },
});

export default IAM;
