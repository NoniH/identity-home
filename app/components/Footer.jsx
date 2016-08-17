import React from 'react'

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer role="contentinfo">
                    <section>
                        <div className="footer-links">
                            <ul>
                                <li><a href="#/notImplemented">About</a></li>
                                <li><a href="#/notImplemented">Copyright</a></li>
                                <li><a href="#/notImplemented">Help</a></li>
                                <li className="larger"><a href="#/privacy-policy">Privacy</a></li>
                                <li><a href="#/notImplemented">Terms of use</a></li>
                            </ul>
                        </div>
                    </section>
            </footer>
        );
    }
}

export default Footer
