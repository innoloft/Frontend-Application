import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Tabs, TabList, TabPanel, Tab } from "react-tabs"
import { useSelector } from 'react-redux';

export default function ProductTabsComponent(props) {
  const State = useSelector(state => state.product);
  const { product, listOfTrl } = State;
  return (
    <BrowserRouter>
      <div>
        <div>
          <Tabs>
            <TabList>
              <Tab><Link to="/product">Description</Link></Tab>
              <Tab><Link to="/product/attributes">Attributes</Link></Tab>
            </TabList>

            <TabPanel>
              <Route path="/product" component={() => (
                <div className="article_section tab_content">
                  <p className="product_description" dangerouslySetInnerHTML={{__html: product.description}}>
                  </p>
                </div>
              )
              } />
            </TabPanel>
            <TabPanel>
              <Route path="/product/attributes" component={() => (
                <div className="article_section tab_content attributes">
                  <label>
                    <h4> Categories:</h4>
                    <select name="categories" id="categories">
                      {
                        product.categories.map(category => <option key={category.id} value={category.name}>{category.name}</option>)
                      }
                    </select>
                  </label>
                  <label>
                    <h4>Business Models: </h4>
                    <select name="businessModels" id="businessModels">
                      {
                        product.businessModels.map(businessModel => <option key={businessModel.id} value={businessModel.name}>{businessModel.name}</option>)
                      }
                    </select>
                  </label>
                  <label>
                    <h4>TRLs:</h4>
                    <select name="trls" id="trls">
                      {
                        listOfTrl.map(trl => <option key={trl.id} value={trl.name}>{trl.name}</option>)
                      }
                    </select>
                  </label>
                </div>
              )
              } />
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </BrowserRouter>
  )
}
