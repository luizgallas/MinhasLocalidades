import React from 'react';
import BottomTabs from './src/routes/routes';
import { Provider } from 'react-redux';
import { store } from './src/store';
import Loader from './src/components/Loader';
import AppStack from './src/routes/appStack';

export default function App() {

    return (
    <Provider store={store}>
        <BottomTabs />
        <Loader />
    </Provider>
    );
  }