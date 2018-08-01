
import React from 'react'
import {
  Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import { render } from 'react-dom'
import ReactDOM from 'react-dom'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import axios from 'axios'

// import App from './components/App'

import Layout from './components/ClientDemo/Layout'
import Headers from './components/ClientDemo/Headers'
import Footers from './components/ClientDemo/Footers'



const Root = () => (
    
    <HashRouter>
            <div>
                <Switch>
                    <Layout>
                        <Route exact path="/" component={Headers}/>
                        <Route exact path="/footers" component={Footers}/>
                    </Layout>
                </Switch>
            </div>
        </HashRouter>
    
 )
  
 render(<Root/>, document.getElementById('app'))