import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import App from "./App";
import { persistor, store } from "./store/store";
// import { DialogProvider } from "./contexts/dialogs.context"
import { ChatProvider } from "./contexts/chat.context";

import "./index.css";

const render = () => {
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
        <React.StrictMode>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <BrowserRouter>
                        <ChatProvider>
                            <App />
                        </ChatProvider>
                    </BrowserRouter>
                </PersistGate>
            </Provider>
        </React.StrictMode>,
    );
};
render();
