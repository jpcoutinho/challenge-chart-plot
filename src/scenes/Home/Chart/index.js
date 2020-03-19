import React from 'react'

import Chart from 'chart.js'
import './styles.css'

import { options } from '../../../services/Utils/chartOptions.js'


//https://www.chartjs.org/docs/latest/charts/line.html#line-styling
class LineGraph extends React.Component {

    constructor(props) {
        super(props);

        this.chartRef = React.createRef();
    }

    componentDidMount() {
        Chart.NewLegend = Chart.Legend.extend({
            afterFit: function () {
                this.width = this.width + 100;
            },
        });

        this.myChart = new Chart(this.chartRef.current, {
            type: "line",
            data: {
                datasets: this.props.datasets,
            },
            options: options,
        });
        this.myChart.generateLegend();
    }

    componentDidUpdate() {
        this.myChart.data.datasets = this.props.datasets;
        this.myChart.update();
    }

    render() {
        return (
            <div className="myChart">
                <canvas className="myChartCanvas"
                    ref={this.chartRef}
                />
            </div>
        );
    }
}



export default LineGraph;