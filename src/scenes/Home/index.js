import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import CodeArea from './CodeArea'
import LineGraph from './Chart';

import { defaultInput } from '../../services/Utils/defaultInput.js'
import { parse } from 'dirty-json';

import JSONParser from '../../services/InputParser/jsonParser.js'

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            defaultInput: defaultInput,
            value: defaultInput,
            chartDatasets: [],
        };

        this.input = defaultInput;
    }

    componentDidMount() {
        this.generateChart();
    }

    generateChart = () => {
        //Encapsulate this block
        const dataStr = "[" + this.input.replace(/\n/g, ",") + "]";
        const jsonObj = parse(dataStr);
        this.parser = new JSONParser(jsonObj);
        this.parser.processList(jsonObj);
        let array = Array.from(this.parser.datasets.values());
        //

        this.setState({
            value: this.input,
            chartDatasets: array
        }, () => {
            console.log(this.state.value);
            console.log(this.state.chartDatasets);
        });
    }

    //Lifting state up
    getInput = (input) => {
        this.input = input;
    }

    render() {
        return (
            <div>
                <Header />
                <CodeArea getInput={this.getInput} value={this.state.value} defaultValue={this.state.defaultInput} />
                <LineGraph datasets={this.state.chartDatasets} />
                <Footer onClick={this.generateChart} />
            </div >
        );
    }
}

export default Home;