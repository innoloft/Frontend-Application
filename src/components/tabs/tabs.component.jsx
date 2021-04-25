import React from 'react';
import { connect } from 'react-redux';

import Tab from './tab.component';

import './tabs.styles.scss';
import ProductCategories from '../product-categories/product-categories.component';
import BusinessModels from '../business-models/business-models.component';
import ProductTrl from '../product-trl/product-trl.component';
import { setActiveTab } from '../../redux/product/product.actions';

export const TABS = {
    DESCRIPTION: 'description',
    ATTRIBUTES: 'attributes'
}

const Tabs = ({ product, trl, activeTab, setActiveTab }) => {

    return (
        <div className='tabs card'>
            <div className='tab-nav'>
                <span
                    className={activeTab === TABS.DESCRIPTION ? 'active' : ''}
                    onClick={() => setActiveTab(TABS.DESCRIPTION)}>Description</span>
                <span
                    className={activeTab === TABS.ATTRIBUTES ? 'active' : ''}
                    onClick={() => setActiveTab(TABS.ATTRIBUTES)}>Attributes</span>
            </div>

            <Tab isTabSelected={activeTab === TABS.DESCRIPTION}>
                <p dangerouslySetInnerHTML={{ __html: product.description }}></p>
            </Tab>
            <Tab isTabSelected={activeTab === TABS.ATTRIBUTES}>
                <ProductCategories categories={ product.categories }/>
                <BusinessModels businessModels={ product.businessModels } />
                <ProductTrl trl={product.trl} trlList={trl} />
            </Tab>
        </div>
    )
};

const mapStateToProps = state => ({
    activeTab: state.product.activeTab
});

const mapDispatchToProps = dispatch => ({
    setActiveTab: activeTab => dispatch(setActiveTab(activeTab))
});

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);