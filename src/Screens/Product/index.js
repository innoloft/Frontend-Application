import { useEffect, useState, useCallback, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ProductActions from '../../Redux/Actions/Product';
import Loading from '../../Components/UI/Loading';
import Map from '../../Components/UI/Map';
import List from '../../Components/UI/List';

import {
    Container,
    ProductContainer,
    ProductImage,
    MainInfo,
    Tab,
    TabContainer,
    TabItem,
    UserContainer,
    Avatar,
    MapContainer,
    AvatarContainer,
} from './styles';

export default function Product() {
    const product = useSelector(state => state.product)
    const account = useSelector(state => state.account)
    const dispatch = useDispatch();
    const [active, setActive] = useState(0);

    useEffect(() => {
        dispatch(ProductActions.getOne());
    }, [dispatch]);

    const handlePress = useCallback(
        (index) => {
            setActive(index);
            if (index === 1) {
                dispatch(ProductActions.getTrl());
            }
        },
        [setActive, dispatch],
    );

    if (product.loading) {
        return (
            <Loading />
        );
    }
    return (
        <Container>
            <ProductContainer >
                <ProductImage src={product.product?.picture} alt="product image" />
                <MainInfo >
                    <p>Product Name: {product.product?.name}</p>
                    <p>Product Type: {product.product?.type?.name}</p>
                </MainInfo>
                <Tab>
                    <TabItem color={"blue"} active={active === 0} onClick={() => handlePress(0)}>  <p>Description</p> </TabItem>
                    <TabItem color={"red"} active={active === 1} onClick={() => handlePress(1)}> <p>Attributes</p> </TabItem>
                </Tab>
                <TabContainer>
                    {active === 0 ? (
                        <div dangerouslySetInnerHTML={{ __html: product.product?.description }} />
                    ) : (
                            <Fragment>
                                <List title={'Categories'} arr={product.product?.categories} />
                                <List title={'Business Models'} arr={product.product?.businessModels} />
                                <List title={'TRL'} arr={product.trl} />
                            </Fragment>
                        )}
                </TabContainer>

            </ProductContainer>

            <UserContainer>
                {!!account?.configuration?.hasUserSection &&
                    <AvatarContainer>
                        <Avatar src={product.product?.user?.profilePicture} alt="product image" />
                        <p>{product.product?.user?.firstName} {product.product?.user?.lastName}</p>
                        <p>{product.product?.user?.position} @{product.product?.company?.name}</p>
                    </AvatarContainer>
                }
                <MapContainer>
                    <Map
                        latitude={product.product?.company?.address?.latitude}
                        longitude={product.product?.company?.address?.longitude}
                    />
                </MapContainer>

            </UserContainer>

        </Container>
    )
};

