import { useState } from 'react';
import { useSelector } from 'react-redux';
import Attributes from '../Attributes';
import { ProductDetails, Image, PMI, Tab, TabContent } from './Details.styled';

function Details() {
  const [tab, setTab] = useState('desc');
  const product = useSelector(state => state.product);

  const handleTab = e => {
    setTab(e.target.value);
  }

  return (
    <ProductDetails>
      <Image>
        <img src={product.picture} alt="Product" />
      </Image>
      <PMI>
        <p>{product.name} | <span>{product.type && product.type.name}</span> </p>
      </PMI>
      <Tab>
        <button className={tab === 'desc' ? 'active' : ''} onClick={handleTab} value="desc" type="button">Description</button>
        <button className={tab === 'attr' ? 'active' : ''} onClick={handleTab} value="attr" type="button">Attributes</button>
      </Tab>
      <TabContent>
        {tab === 'desc' && <p>{product.description}</p>}
        {tab === 'attr' && <Attributes product={product} />}
      </TabContent>
    </ProductDetails>
  );
}

export default Details;
