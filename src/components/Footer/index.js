import React from 'react';
import './styles.css';

class Footer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer className="footer">
                <div className="button_wrapper">
                    <button onClick={this.props.onClick}>
                        GENERATE CHART
                    </button>
                </div>
            </footer>
        );
    }
}

export default Footer;