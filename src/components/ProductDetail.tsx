import tw from 'twin.macro';
import styled from 'styled-components';
import ROUTE from '@/constants/route';
import LinkButton from './LinkButton';

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
    href: string;
}

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
  ${tw`border border-gray-100`};
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

const ProductDetail = () => {
    const ProductData: Product[] = [
        {
            name: 'Asset Inventory',
            iconSrc: 'ic_home_asset_inventory',
            feature: [
                {
                    title: 'Resource Data Management',
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
                        'Change history management',
                        'Resource relation diagram visualization',
                    ],
                },
            ],
            href: ROUTE.PRODUCTS.ASSET_INVENTORY,
        },
        {
            name: 'Cost Explorer',
            iconSrc: 'ic_home_cost',
            feature: [
                {
                    title: 'Cost Analysis & Visualization',
                    description: 'Explore cost details with your customized tools thoroughly. Analyze cost data and visualize with custom dashboards.',
                    keywords: [
                        'Time granularity customization including daily level',
                        'Data filtering and grouping functionality',
                        'Visualization through custom dashboard',
                        'Cost data export in PDF, xlsx',
                    ],
                },
                {
                    title: 'Overspending & Anomaly Detection',
                    description: 'Detect overspending and anomalies automatically based on preset budgets and real usage data.',
                    keywords: [
                        'Budget and usage management',
                        'Cost anomaly detection',
                    ],
                },
            ],
            href: ROUTE.PRODUCTS.COST_EXPLORER,
        },
        {
            name: 'Alert Manager',
            iconSrc: 'ic_home_alert',
            feature: [
                {
                    title: ' ',
                    description: 'Integrate incident alerts and send real-time notifications with predefined policy. SpaceONE provides various channels to integrate with your alert manager.  ',
                    keywords: ['Alert management integrated with external monitoring systems'],
                    logoSrc: ['img_pricing_grafana', 'img_pricing_zabbix', 'img_pricing_google', 'img_pricing_oracle', 'img_pricing_alibaba'],
                },
                {
                    keywords: ['Notification delivery based on custom escalation policy through various channels'],
                    logoSrc: ['img_pricing_aws', 'img_pricing_azure', 'img_pricing_google', 'img_pricing_prometheus', 'img_pricing_amazonsns'],
                },
                {
                    keywords: ['Incident handling record management', 'Integrated health status dashboard'],
                },
            ],
            href: ROUTE.PRODUCTS.ALERT_MANAGER,
        },
    ];

    return (
        <StyledProductDetail>
            <h3 className="product-detail__title">Product Details</h3>
            {ProductData.map((item: Product) => (
                <StyledProduct key={item.name}>
                    <div className="product">
                        <h4 className="product__name">
                            <img className="product__icon" src={`/assets/images/${item.iconSrc}.svg`} alt={`${item.name} icon`} />
                            {item.name}
                        </h4>
                        {item.feature.map((feature) => (
                            <div className="feature" key={feature.keywords.toString()}>
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
                        <LinkButton color="violet-400" size="large" href={item.href}>Learn more</LinkButton>
                    </div>
                </StyledProduct>
            ))}
        </StyledProductDetail>
    );
};

export default ProductDetail;
