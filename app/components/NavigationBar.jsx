import React from 'react';
import Logo from './govau_crest-white.svg'

class NavigationBar extends React.Component {

    render() {
        return (
            <header role="banner">
                <section className="govau--header pass">
                    <h1>GOV.AU <span className="niceUnderline">Pass</span>
                        <span className="badge--alpha idp" >prototype</span>
                    </h1>
                </section>
            </header>
        );
    }
}

export default NavigationBar;
