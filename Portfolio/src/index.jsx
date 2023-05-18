import { Suspense } from "react";

import { ReactDOM } from "react";
import App from "./App";

import * as serviceWorker from "./serviceWorker"
import { I18nextProvider } from 'react-i18next';
import i18n from './i18next'

ReactDOM.render(

<Suspense fallback={(<div>Loading~~</div>)}>
<I18nextProvider i18n={i18n}>
     <App/>
</I18nextProvider>
</Suspense>, document.getElementById("root")

)
serviceWorker.unregister()