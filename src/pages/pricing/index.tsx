import TopicSection from 'components/TopicSection';
import tw from 'twin.macro';
import FAQSection from 'components/FAQ';
import { useState } from 'react';
import styled from 'styled-components';
import LinkButton from 'components/LinkButton';
import { IcCheckLg, IcCloseGray } from 'assets/icons';
import ProductDetail from 'components/ProductDetail';
import ROUTE from 'constants/route';

interface PricePlan {
    title: string;
    price: string;
    period?: string;
    account?: string;
    benefitList: Array<{benefit: string}>;
    recommend?: boolean;
    linkText?: string;
    href?: string;
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
      ${tw`text-gray-500`};
      margin-top: 16px;
      padding-left: 32px;
      background: url("/assets/icons/ic_check.svg") no-repeat 0 6px;
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
        ${tw`bg-white text-lg font-normal text-gray-500`};
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

const Pricing = () => {
    const TopicData = {
        title: 'Pricing',
        description: 'We offer a wide range of products starting from a simple demo account to a full-support enterprise account. Talk to sales and learn more about SpaceONE.',
    };

    const PricePlanData: PricePlan[] = [
        {
            title: 'Free Trial',
            price: '$0',
            benefitList: [
                { benefit: '1 Cloud Account' },
                { benefit: 'Full Features Provided' },
            ],
            linkText: 'Reqeust Demo',
            href: ROUTE.DEMO,
        },
        {
            title: 'Business',
            price: '$140',
            period: ' /month',
            account: 'per cloud account',
            benefitList: [
                { benefit: 'Unlimited Cloud Accounts' },
                { benefit: 'Full Features Provided' },
                { benefit: 'Support Center' },
            ],
            recommend: true,
            linkText: 'Talk to Sales',
            href: ROUTE.TALKTOSALES,
        },
        {
            title: 'Enterprise',
            price: 'Contact Sales',
            benefitList: [
                { benefit: 'Unlimited Cloud Accounts' },
                { benefit: 'Full Features Provided' },
                { benefit: 'Support Center' },
                { benefit: 'Custom Onboarding Program including hands-on training' },
                { benefit: 'Implementation Consultancy Service by cloud industry professionals' },
                { benefit: 'Direct Support Slack Channel with designated customer success team' },
            ],
            linkText: 'Talk to Sales',
            href: ROUTE.TALKTOSALES,
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
                    <LinkButton href={item.href} color="violet-400" size="large">{item.linkText}</LinkButton>
                    {item.recommend && <em className="plan__recommend">Our Recommends</em>}
                </div>
            ))}
            <p className="note">*SpaceONE pricing is based on the number of cloud service accounts integrated with SpaceONE.</p>
        </StyledPlan>
    );

    const ComparedPricePlanList = (
        <StyledComparePlan>
            {/* missing design <p> Compare our various price tiers and choose what you want</p> */}
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
                            <th className="plan__title">Free Trial</th>
                            <th className="plan__title">
                                Business
                                <em className="plan__recommends">Our Recommends</em>
                            </th>
                            <th className="plan__title">Our Recommends</th>
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
                            <th className="plan__feature" scope="row">Integrated Cloud Service Accounts</th>
                            <td className="plan__value">1 cloud account</td>
                            <td className="plan__value">Unlimited cloud accounts</td>
                            <td className="plan__value">Unlimited cloud accounts</td>
                        </tr>
                        <tr>
                            <th className="plan__feature-group" scope="col"><span>Support</span></th>
                            <td className="plan__feature-group" />
                            <td className="plan__feature-group" />
                            <td className="plan__feature-group" />
                        </tr>
                        <tr>
                            <th className="plan__feature" scope="row">Support Pack</th>
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
                            <th className="plan__feature-sub" scope="row">Direct Communication Channel (Slack)</th>
                            <td className="plan__value"><IcCloseGray /></td>
                            <td className="plan__value"><IcCloseGray /></td>
                            <td className="plan__value"><IcCheckLg /></td>
                        </tr>
                        <tr>
                            <th className="plan__feature-sub" scope="row">Onboarding & Training Program</th>
                            <td className="plan__value"><IcCloseGray /></td>
                            <td className="plan__value"><IcCloseGray /></td>
                            <td className="plan__value"><IcCheckLg /></td>
                        </tr>
                        <tr>
                            <th className="plan__feature-sub" scope="row">Implementation Consultancy Program</th>
                            <td className="plan__value"><IcCloseGray /></td>
                            <td className="plan__value"><IcCloseGray /></td>
                            <td className="plan__value"><IcCheckLg /></td>
                        </tr>
                        <tr>
                            <th className="plan__feature-sub"> </th>
                            <td className="plan__value"><LinkButton color="violet-400" size="large" href={ROUTE.DEMO}>Request Demo</LinkButton></td>
                            <td className="plan__value"><LinkButton color="violet-400" size="large" href={ROUTE.TALKTOSALES}>Talk to Sales</LinkButton></td>
                            <td className="plan__value"><LinkButton color="violet-400" size="large" href={ROUTE.TALKTOSALES}>Talk to Sales</LinkButton></td>
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
            title: 'Compare Plans',
            content: ComparedPricePlanList,
        },
    ];
    const [currentTab, setCurrentTab] = useState(0);

    const FAQData = [
        {
            title: 'What is a cloud account?',
            content: 'A cloud account is an account of cloud service providers such as AWS, Azure, and Google Cloud. Our pricing plans are based on the number of cloud accounts you have integrated with SpaceONE.',
        },
        {
            title: 'How does SpaceONE charge the bill?',
            content: 'You can pay your bill through transfer. SpaceONE billing information will be integrated into the invoice of Megazone Cloud. If you have any questions about billing and payment, contact us through our support portal. ',
        },
        {
            title: 'How long does it take to talk with SpaceONE sales?',
            content: 'If you submit a request through our contact page, our sales team will contact you via email within 2 business days. If your inquiry is delayed, please contact us through a contact channel such as support@spaceone.com.',
        },
        {
            title: 'Can I change my plan later on?',
            content: 'Yes, you can change your plan by contacting our sales team. You can submit requests through the contact page of this website or via our support portal.',
        },
    ];

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
            <ProductDetail />
            <FAQSection title="Frequently Asked Questions" FAQData={FAQData} />
        </>
    );
};

export default Pricing;
