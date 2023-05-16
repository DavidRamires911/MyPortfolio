import { Suspense } from "react";
import React {Suspense} from "react";
import { ReactDOM } from "react";
import App from "./App";
import "./i18next"
import * as serviceWorker from "./serviceWorker"

ReactDOM.render(

<Suspense fallback={(<div>Loading~~</div>)}>
     
     <App/>

</Suspense>, document.getElementById("root")

)
serviceWorker.unregister()