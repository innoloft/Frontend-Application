import '../styles/globals.scss'
import React from "react";
import Layout from "../components/Layout";
import {Provider} from "react-redux";
import {store} from "../redux/store";

import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress
import Router from 'next/router';
//Binding events.
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());
NProgress.configure({showSpinner: true});

function MyApp({Component, pageProps}) {
    return (
        <Provider store={store}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>)
}

export default MyApp
