import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import './styles.scss'
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {persistor, store} from "./store/store.ts";
import {PersistGate} from "redux-persist/integration/react";

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <App/>
            </PersistGate>
        </Provider>
    </BrowserRouter>,
)
