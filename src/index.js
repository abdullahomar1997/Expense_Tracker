import React from "react";
import ReactDOM from "react-dom";
import { SpeechProvider } from '@speechly/react-client'

import App from './App';
import './index.css';
import { Provider } from './context/context'

ReactDOM.render(
    <SpeechProvider appId="697cff5f-b020-4c6a-a991-b5a2c3adbb21" language="en-US">
        <Provider>
            <App />
        </Provider>
    </SpeechProvider>,
    document.getElementById('root'))