export default class EventSetup {

    constructor(event, datasets) {
        this.group = event.group;
        this.select = event.select;
        this.datasets = datasets;
        this.spanLimits = [];
    }

    processSpan(event) {
        let {begin} = event;
        let {end} = event;

        let timestampDate = new Date(begin);
        this.timezoneDiff = timestampDate.getTimezoneOffset() * 60 * 1000;

        begin = begin + this.timezoneDiff;
        end = end + this.timezoneDiff;

        this.spanLimits = [begin, end];
    }


    processData(event) {
        if (!this.inSpanLimits(event)) {
            return;
        }

        const groupName = getGroupName(event, this.group, this.select);

        for (let currentSelect of this.select) {

            if (!event.hasOwnProperty(currentSelect)) {
                continue;
            }

            const lineName = (groupName + " " + currentSelect);

            const point = {
                x: event.timestamp + this.timezoneDiff,
                y: event[currentSelect],
            };

            insertDataset(this.datasets, lineName, point);
        }
    }

    processStop() {

    }


    inSpanLimits = (event) => {
        const timestamp = event.timestamp + this.timezoneDiff;

        if (timestamp < this.spanLimits[0] || timestamp > this.spanLimits[1]) {
            return false;
        }
        return true;
    }
}

function getGroupName(event, startGroup, startSelect) {
    const reducer = (partialName, currentGroupItem) => {
        if (event.hasOwnProperty(currentGroupItem)) {
            return partialName + " " + event[currentGroupItem];
        }
        return partialName;
    };

    return (startGroup.reduce(reducer, "")); //FIX a legenda entra com um espaco antes
}


function insertDataset(datasets, lineName, point) {
    if (datasets.has(lineName)) {
        datasets.get(lineName).data.push(point)
    }
    else {
        datasets.set(lineName, createDataset(point, lineName));
    }
}


function createDataset(firstPoint, lineName) {

    const label = lineName;
    const color = generateColorHSL();

    return {
        label,

        data: [firstPoint],
        backgroundColor: color,
        borderColor: color,
        pointBorderColor: color,
        pointHoverBackgroundColor: color,

        fill: false,
        lineTension: 0.0,
        borderDashOffset: 0.0,
        pointBorderWidth: 6,
        pointHoverRadius: 6,
        pointHoverBorderWidth: 0.1,
        pointRadius: 3,
        pointHitRadius: 3,
        borderWidth: 2,
    }
}

function generateColorRGBA() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgba(${r}, ${g}, ${b}, 1)`;
}

function generateColorHSL() {
    const h = Math.floor(Math.random() * 361);
    const s = 100;
    const l = 50;

    return `hsl(${h},${s}%,${l}%)`;
}