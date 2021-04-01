import Card from './Card';
import Image from './Image';
import Tabs from './Tabs';

const Product = ({ product, trl }) => {

   return (
      <div className="product ">
         <Card>
            <Image src={product?.picture} alt={null} />
         </Card>
         <Card>
            <h3 className="text-center"> <b>{product?.name}</b>  /  {product?.type.name}</h3>
         </Card>
         <Tabs product={product ? product : null} trl={trl} />
      </div >
   )
}

export default Product
