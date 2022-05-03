import TopicSection from 'components/TopicSection';
import tw from 'twin.macro';
import FAQSection from 'components/FAQ';
import { useState } from 'react';
import styled from 'styled-components';
import LinkButton from 'components/LinkButton';
import { IcCheckLg, IcCloseGray } from 'assets/icons';

interface PricePlan {
    title: string;
    price: string;
    period?: string;
    account?: string;
    benefitList: Array<{benefit: string}>;
    recommend?: boolean;
}

interface ProductFeature {
    title?: string;
    description?: string;
    keywords: Array<string>;
    logoSrc?: Array<string>;
}

interface Product {
    name: string;
    iconSrc: string;
    feature: ProductFeature[];
}

const StyledTab = styled.div`
  ${tw`bg-gray-100`};
  padding-bottom: 160px;
  .price-detail {
    width: 1120px;
    margin: 0 auto;
    text-align: center;
    //border: solid 1px red;
  }
  .tab {
      ${tw`border border-gray-300`};
      //overflow: hidden;
      display: inline-flex;
      margin: 0 auto;
      border-radius: 16px;
      &__item {
        ${tw`text-xl text-gray-300 font-medium`};
        padding: 10px 24px;
        position: relative;
        ::after {
          ${tw`bg-white`}
          display: inline-block;
          position: absolute;
          top: -1px;
          right: -1px;
          bottom: -1px;
          left: -1px;
          border-radius: 16px;
          content:'';
          opacity: 0;
        }
        &--active {
          ${tw`text-violet-400`}
          position: relative;
          ::after {
            opacity: 1;
          }
        }
      }
    &__title {
      position: relative;
      z-index: 1;
    }
  }
  .content {
    margin-top: 64px;
  }
`;

const StyledPlan = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 40px;
  .plan {
    ${tw`bg-white`};
    position: relative;
    display: flex;
    flex-direction: column;
    grid-column: span 4;
    padding: 48px 24px 32px;
    border-radius: 16px;
    text-align: left;
    &__title {
     ${tw`font-serif font-medium text-6xl`};
      margin-bottom: 16px;
    }
    &__price-info {
      height: 58px;
    }
    &__price {
      ${tw`font-semibold text-3xl`};
    }
    &__period {
      ${tw`text-3xl text-gray-500`};
    }
    &__account {
      ${tw`text-lg text-gray-500`};
    }
    &__benefit-list {
      ${tw`border-gray-200`};
      margin-top: 24px;
      margin-bottom: 24px;
      border-top-width: 1px;
    }
    &__benefit-item {
      margin-top: 16px;
      padding-left: 32px;
      background: url("/assets/icons/ic_check.svg") no-repeat 0 50%;

    }
    > a {
      display: block;
      text-align: center;
      margin-top: auto;
    }
    &__recommend {
      ${tw`bg-violet-300 text-lg text-white`};
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      padding: 4px 0;
      text-align: center;
      font-style: normal;
    }
  }
  .note {
    ${tw`text-gray-400 font-normal`};
    grid-column: span 12;
    padding-top: 16px;
    text-align: left;
  }
`;

const StyledComparePlan = styled.section`
  .compare-plan {
    .plan {
      width: 100%;
      background-color: transparent;
      caption {
        display: none;
      }
      th, td {
        ${tw`border-gray-200`};
        border-right-width: 1px;
      }
      &__title {
        ${tw`font-serif text-4xl font-normal bg-white`};
        padding: 48px 0 16px;
        border-bottom-width: 1px;
        position: relative;
        &:first-child {
          background-color: transparent;
          border-right-width: 0;
        }
        &:nth-child(2) {
          border-top-left-radius: 16px;
        }
        &:last-child {
          border-top-right-radius: 16px;
          border-right-width: 0;
        }
      }
      &__recommends {
        ${tw`bg-violet-300 text-lg text-white`};
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        padding-top: 4px;
        padding-bottom: 4px;
        font-style: normal;
      }
      &__feature-group {
        ${tw`bg-gray-100 font-medium text-xl`};
        padding: 9px 24px;
        text-align: left;
        border-left-width: 1px;
      }
      &__feature {
        ${tw`bg-white`};
        padding-left: 24px;
        padding-top: 16px;
        padding-bottom: 16px;
        border-left-width: 1px;
        text-align: left;
      }
      &__feature-sub {
        ${tw`bg-white text-lg font-medium`};
        padding-left: 32px;
        padding-top: 16px;
        padding-bottom: 16px;
        text-align: left;
        border-left-width: 1px;
      }
      &__value {
        ${tw`bg-white`};
        padding-top: 16px;
        padding-bottom: 16px;
      }
      tbody {
          tr:last-child {
            th, td {
              padding-top: 24px;
              padding-bottom: 32px;
              border-bottom-width: 1px;
            }
          }
      }
    }
  }
`;

const StyledProductDetail = styled.section`
    ${tw`text-6xl`};
    padding: 112px 0 160px;
    margin: 0 auto;
    max-width: 1120px;
  .product-detail__title {
    ${tw`font-serif font-medium`};
    margin-bottom: 48px;
    text-align: center;
  }
`;

const StyledProduct = styled.div`
  box-shadow: 12px 8px 14px 4px rgba(213, 213, 213, 0.35);
  border-radius: 16px;
  margin-top: 16px;
  .product {
    padding: 24px 32px;
    &__name {
      ${tw`text-3xl border-gray-200`};
      display: flex;
      padding-bottom: 20px;
      margin-bottom: 24px;
      border-bottom-width: 1px;
    }
    &__icon{
      min-width: 32px;
      min-height: 32px;
      margin-right: 16px;
    }
  }
  .feature {
    //padding-top: 24px;
    
    + .feature {
      //padding-top: 0;
    }
    &__title {
      ${tw`text-violet-500 text-3xl font-normal`};
      margin-top: 24px;
    }
    &__description {
      ${tw`font-medium text-lg`};
      margin-top: 8px;
    }
    &__keyword-group {
      margin-top: 12px;
      padding-left: 24px;
    }
    &__keyword-item  {
      ${tw`text-gray-500 text-lg`};
      margin-top: 12px;
      padding-left: 32px;
      background: url("/assets/icons/ic_check.svg") no-repeat 0 50%;
    }
    &__logo-group {
      display: flex;
      column-gap: 24px;
      padding-left: 24px;
      margin-top: 12px;
    }
  }
`;

const Pricing = () => {
    const TopicData = {
        title: 'Pricing',
        description: 'We offer a wide range of products starting from a simple demo account to a full-support enterprise account.',
    };

    const PricePlanData: PricePlan[] = [
        {
            title: 'Free Trial',
            price: '$140',
            benefitList: [
                { benefit: '1 service account' },
                { benefit: 'Full features provided' },
            ],
        },
        {
            title: 'Business',
            price: '$140',
            period: '/month',
            account: 'Per service account',
            benefitList: [
                { benefit: 'Unlimited service accounts' },
                { benefit: 'Full features provided' },
                { benefit: 'Various app extensions' },
            ],
            recommend: true,
        },
        {
            title: 'Enterprise',
            price: 'Contact Sales',
            benefitList: [
                { benefit: 'Unlimited service accounts' },
                { benefit: 'Full features provided' },
                { benefit: 'Various app extensions' },
                { benefit: 'Custom onboarding program including hands-on training' },
                { benefit: 'Implementation consultancy service by cloud industry professionals\n' },
                { benefit: 'Direct support Slack channel with designated customer success team' },
            ],
        },
    ];

    const PricePlanList = (
        <StyledPlan>
            {PricePlanData.map((item) => (
                <div className="plan" key={item.title}>
                    <div className="plan__title">{item.title}</div>
                    <div className="plan__price-info">
                        <span className="plan__price">{item.price}</span>
                        {item.period && <span className="plan__period">{item.period}</span>}
                        {item.account && <p className="plan__account">{item.account}</p>}
                    </div>
                    <ul className="plan__benefit-list">
                        {item.benefitList.map((benefit) => (
                            <li className="plan__benefit-item" key={benefit.benefit}>{benefit.benefit}</li>
                        ))}
                    </ul>
                    <LinkButton href="/" color="violet-400" size="large">Talk to Sales</LinkButton>
                    {item.recommend && <em className="plan__recommend">Our Recommends</em>}
                </div>
            ))}
            <p className="note">*SpaceONE pricing is based on the number of cloud service accounts integrated with SpaceONE.</p>
        </StyledPlan>
    );

    const ComparedPricePlanList = (
        <StyledComparePlan>
            <div className="compare-plan">
                <table className="plan">
                    <caption>Pricing and feature information for all plans</caption>
                    <colgroup>
                        <col width="*" />
                        <col width="250px" />
                        <col width="250px" />
                        <col width="250px" />
                    </colgroup>
                    <thead>
                        <tr>
                            <th className="plan__title"> </th>
                            <th className="plan__title">plan1</th>
                            <th className="plan__title">
                                plan2
                                <em className="plan__recommends">Our Recommends</em>
                            </th>
                            <th className="plan__title">plan3</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className="plan__feature-group" scope="col"><span>Integration</span></th>
                            <td className="plan__feature-group" />
                            <td className="plan__feature-group" />
                            <td className="plan__feature-group" />
                        </tr>
                        <tr>
                            <th className="plan__feature" scope="row">Integrated cloud service accounts</th>
                            <td className="plan__value">1 service account</td>
                            <td className="plan__value">Unlimited</td>
                            <td className="plan__value">Unlimited</td>
                        </tr>
                        <tr>
                            <th className="plan__feature-group" scope="col"><span>Support</span></th>
                            <td className="plan__feature-group" />
                            <td className="plan__feature-group" />
                            <td className="plan__feature-group" />
                        </tr>
                        <tr>
                            <th className="plan__feature" scope="row">Support pack</th>
                            <td className="plan__value">No support for trial</td>
                            <td className="plan__value">Basic support pack</td>
                            <td className="plan__value">Custom full support</td>
                        </tr>
                        <tr>
                            <th className="plan__feature-sub" scope="row">MZC support center</th>
                            <td className="plan__value"><IcCloseGray /></td>
                            <td className="plan__value">Response in 48 hours</td>
                            <td className="plan__value">Response in 12 hours</td>
                        </tr>
                        <tr>
                            <th className="plan__feature-sub" scope="row">Direct communication channel (24/7)</th>
                            <td className="plan__value"><IcCloseGray /></td>
                            <td className="plan__value"><IcCloseGray /></td>
                            <td className="plan__value"><IcCheckLg /></td>
                        </tr>
                        <tr>
                            <th className="plan__feature-sub" scope="row">Onboarding & training program</th>
                            <td className="plan__value"><IcCloseGray /></td>
                            <td className="plan__value"><IcCloseGray /></td>
                            <td className="plan__value"><IcCheckLg /></td>
                        </tr>
                        <tr>
                            <th className="plan__feature-sub" scope="row">Implementation consultancy program</th>
                            <td className="plan__value"><IcCloseGray /></td>
                            <td className="plan__value"><IcCloseGray /></td>
                            <td className="plan__value"><IcCheckLg /></td>
                        </tr>
                        <tr>
                            <th className="plan__feature-sub"> </th>
                            <td className="plan__value"><LinkButton color="violet-400" size="large" href="/">Talk to Sales</LinkButton></td>
                            <td className="plan__value"><LinkButton color="violet-400" size="large" href="/">Talk to Sales</LinkButton></td>
                            <td className="plan__value"><LinkButton color="violet-400" size="large" href="/">Talk to Sales</LinkButton></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </StyledComparePlan>
    );

    const TabData = [
        {
            title: 'Plans & Pricing',
            content: PricePlanList,
        },
        {
            title: 'Compare plans',
            content: ComparedPricePlanList,
        },
    ];

    const ProductData = [
        {
            name: 'Asset management',
            iconSrc: 'ic_home_asset_inventory',
            feature: [
                {
                    title: 'Resource data management',
                    description: 'Discover all the cloud service resources through automated collection process. SpaceONE supports integration from public clouds to on-premises and kubernetes.',
                    keywords: [
                        'Cloud asset data collection',
                        'Dataset export in xlsx or external storage',
                        'Query based resource search and classification',
                    ],
                    logoSrc: ['img_pricing_aws', 'img_pricing_azure', 'img_pricing_google', 'img_pricing_oracle', 'img_pricing_alibaba'],
                },
                {
                    title: 'Operation & Analytics',
                    description: 'Upgrade your cloud operation efficiency through analyzing asset data. Get insights through data processing based on raw resource data from cloud providers.',
                    keywords: [
                        'Change history management ',
                        'Resource relation diagram visualization',
                    ],
                },
            ],
        },
        {
            name: 'Alert Manager',
            iconSrc: 'ic_home_alert',
            feature: [
                {
                    title: ' ',
                    description: 'Integrate incident alerts and send real-time notifications with predefined policy. SpaceONE provides various channels to integrate with your alert manager. ',
                    keywords: ['Alert management integrated with external monitoring systems'],
                    logoSrc: ['img_pricing_grafana', 'img_pricing_zabbix', 'img_pricing_google', 'img_pricing_oracle', 'img_pricing_alibaba'],
                },
                {
                    keywords: ['Alert management integrated with external monitoring systems'],
                    logoSrc: ['img_pricing_aws', 'img_pricing_azure', 'img_pricing_google', 'img_pricing_prometheus', 'img_pricing_amazonsns'],
                },
                {
                    keywords: ['Incident handling record management', 'Integrated health status dashboard'],
                },
            ],
        },
        {
            name: 'Cost Explorer',
            iconSrc: 'ic_home_cost',
            feature: [
                {
                    title: 'Cost analysis & Visualization',
                    description: 'Explore cost details with your customized tools thoroughly. Analyze cost data and visualize with custom dashboards.',
                    keywords: [
                        'Time granularity customization including daily level',
                        'Data filtering and grouping functionality',
                        'Visualization through custom dashboard',
                        'Cost data export in PDF, xlsx',
                    ],
                },
                {
                    title: 'Overspending & Anomaly detection',
                    description: 'Detect overspending and anomalies automatically based on preset budgets and real usage data. ',
                    keywords: [
                        'Budget and usage management',
                        'Cost anomaly detection',
                    ],
                },
            ],
        },
    ];

    const FAQData = [
        {
            title: 'What is a service account?',
            content: 'This is content',
        },
        {
            title: 'How can I buy SpaceONE apps for advanced features?',
            content: 'This is content',
        },
        {
            title: 'How long does it take to talk with SpaceONE sales?',
            content: 'This is content',
        },
    ];

    const [currentTab, setCurrentTab] = useState(1);

    return (
        <>
            <TopicSection title={TopicData.title} description={TopicData.description} tw="bg-gray-100" />
            <StyledTab>
                <div className="price-detail">
                    <div className="tab">
                        {TabData.map((item, index) => (
                            <button
                                type="button"
                                key={item.title}
                                onClick={() => setCurrentTab(index)}
                                className={`tab__item ${currentTab === index ? 'tab__item--active' : ''}`}
                            >
                                <span className="tab__title">{item.title}</span>
                            </button>
                        ))}
                    </div>
                    <div className="content">
                        {TabData[currentTab].content}
                    </div>
                </div>
            </StyledTab>
            <StyledProductDetail>
                <h3 className="product-detail__title">Product details</h3>
                {ProductData.map((item: Product) => (
                    <StyledProduct>
                        <div className="product" key={item.name}>
                            <h4 className="product__name">
                                <img className="product__icon" src={`/assets/images/${item.iconSrc}.svg`} alt="" />
                                {item.name}
                            </h4>
                            {item.feature.map((feature) => (
                                <div className="feature" key={feature.title}>
                                    {feature.title && <h5 className="feature__title">{feature.title}</h5>}
                                    {feature.description && <p className="feature__description">{feature.description}</p>}
                                    <ul className="feature__keyword-group">
                                        {feature.keywords.map((keyword) => (
                                            <li className="feature__keyword-item" key={keyword}>{keyword}</li>
                                        ))}
                                    </ul>
                                    <ul className="feature__logo-group">
                                        {feature.logoSrc?.map((logo) => (
                                            <img className="feature__logo-item" src={`/assets/images/${logo}.svg`} alt={logo} key={logo} />
                                        ))}
                                    </ul>
                                </div>
                            ))}
                            <LinkButton color="violet-400" size="large" href="/">Learn more</LinkButton>
                        </div>
                    </StyledProduct>
                ))}
            </StyledProductDetail>
            <FAQSection title="Frequently Asked Questions" FAQData={FAQData} />
        </>
    );
};

export default Pricing;
