import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import "tw-elements";
import {QueryClient, QueryClientProvider} from "react-query";
import {Provider} from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import {store, persistor} from "./app/store";

const queryClient = new QueryClient()
const rootElement = document.getElementById("root");

render(
    <QueryClientProvider client={queryClient}>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    </QueryClientProvider>,
    rootElement
);
