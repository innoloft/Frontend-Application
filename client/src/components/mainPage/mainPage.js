import React from 'react';
import { BaseTemplate } from '../baseTemplate';
import Main from './main';

const MainPage = () => {
   return <BaseTemplate heading={'Trades'} content={Main} />;
};

export default MainPage;
