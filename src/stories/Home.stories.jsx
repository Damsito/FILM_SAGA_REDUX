import React from 'react';

import Home  from '../Home/Home';
import Header from "../Header/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Film from "../Film/Film";
import Favorites from "../Favorites";
import {QueryClient, QueryClientProvider} from "react-query";
import {Provider} from "react-redux";
import {persistor, store} from "../app/store";
import App from "../App";
import {PersistGate} from "redux-persist/integration/react";

export default {
    title: 'Example/Home',
    component: Home,
    parameters: {
        layout: 'fullscreen',
    },
};
const queryClient = new QueryClient()
const Template = () => <QueryClientProvider client={queryClient}>
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
                <Header />
                <main>
                    <Home />
                </main>
            </BrowserRouter>
        </PersistGate>
    </Provider>
</QueryClientProvider>

export const film = Template.bind({});

