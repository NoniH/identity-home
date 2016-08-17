import React from 'react'

import  NavigationBar from './components/NavigationBar.jsx'
import  Footer from './components/Footer.jsx'

export  default class App extends React.Component {
    render() {
        return (

            <div>
            
<script type="text/javascript" src="https://gov-au-ui-kit.apps.staging.digital.gov.au/latest/ui-kit.min.js"></script>
                <NavigationBar/>

                  <main>
                      {this.props.children}
                  </main>
                <Footer/>
            </div>
        )
    }
}
