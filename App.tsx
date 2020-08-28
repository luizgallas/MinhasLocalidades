import React from 'react';
import BottomTabs from './src/routes';
import { Provider } from 'react-redux';
import { store } from './src/store';
import Loader from './src/components/Loader';

export default function App() {

    return (
    <Provider store={store}>
        <BottomTabs />
        <Loader />
    </Provider>
    );
  }