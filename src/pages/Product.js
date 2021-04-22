import { useSelector } from 'react-redux';
import Details from '../components/Details';
import User from '../components/User';

function Product() {
  const product = useSelector(s => s.product);
  const fetching = useSelector(s => s.fetching);
  const errors = useSelector(s => s.errors);

  let toRender;

  if (fetching) {
    toRender = <div>Loading</div>;
  } else if (!fetching && errors !== null) {
    toRender = <div>Errors found!</div>;
  } else if (!fetching && errors === null) {
    toRender = (
      <>
        <Details />
        <User user={product?.user} company={product?.company} />
      </>
    );
  }

  return toRender;
}

export default Product;
