export var options = {
    maintainAspectRatio: false,

    legend: {
        display: true,
        position: "right",
        reverse: false,
        align: 'start',
        /*
        legendCallback: (myChart) => {
            let html = "<ul><li> teste </li></ul>";
            return html;
        },
        */
        
        labels: {
            //fontColor: "rgb(255, 99, 132)",
            fontSize: 12,
            fontStyle: "bold",
            usePointStyle: true,
            padding: 18,
            fontFamily: "'Source Sans Pro', sans-serif",
        }
    },
    scales: {
        xAxes: [
            {
                type: 'time',
                time: {
                    unit: 'minute',
                    displayFormats: {
                        minute: 'HH:mm', //caps in hour - 24h format
                    },
                },
                gridLines: {
                    display: false,
                    drawBorder: false,
                },
            }
        ],
        yAxes: [
            {
                gridLines: {
                    drawBorder: false,
                },
                ticks: {
                    maxTicksLimit: 5,
                    stepSize: 0.1,
                    display: false,
                    beginAtZero: true,
                }
            }
        ]
    }
};