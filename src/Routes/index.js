import { Suspense, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { useThemeContext } from '../Theme';
import AccountActions from '../Redux/Actions/Account';
import { RoutesList } from './RoutesList';
import Loading from '../Components/UI/Loading';
import Layout from '../Components/Layout';


export default function Routes() {

    const dispatch = useDispatch();
    const { setTheme } = useThemeContext();
    const account = useSelector(state => state.account)

    useEffect(() => {
        dispatch(AccountActions.checkConfiguration());
    }, [dispatch]);


    useEffect(() => {
        // apply new color 
        if (account?.configuration?.mainColor) {
            setTheme(oldObj => ({
                ...oldObj,
                colors: {
                    ...oldObj.colors,
                    primary: account.configuration.mainColor,
                },
            }))
        }
    }, [account.configuration, setTheme])

    if (account.loading) {
        return (
            <Loading />
        );
    }

    return (
        <Suspense fallback={<Loading />}>
            <Layout>
                <Switch>
                    {RoutesList.map((RouteObj, index) => {
                        return <Route key={index} {...RouteObj} />;
                    })}
                </Switch>
            </Layout>

        </Suspense>
    )
}
