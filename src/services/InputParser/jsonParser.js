import EventSetup from './eventSetup.js';

export default class JSONParser {

    constructor(eventsJson) {
        this.eventsJson = eventsJson;
        this.datasets = new Map();
    }

    processList() {

        let isStopped = false;
       
        //search start index 
        let indexStart = this.eventsJson.findIndex(event => event.type == 'start');
        this.aux = new EventSetup(this.eventsJson[indexStart], this.datasets);
        //this.eventsJson.splice(indexStart, 1);
        //delete
        
         ///*
        //search stop index
        let indexStop = this.eventsJson.findIndex(event => event.type === 'stop');
        let indexSpan = this.eventsJson.findIndex(event => event.type === 'span');
        //this.aux.processSpan(this.eventsJson[indexSpan]);
        //this.eventsJson.splice(indexSpan, 1);

        if (indexSpan < indexStop && indexSpan > indexStart) {
            //let spanLimits= [this.eventsJson[indexSpan].begin, this.eventsJson[indexSpan].end];
            this.aux.processSpan(this.eventsJson[indexSpan]);
        }
        else {
            //throw error span not set
            console.log("Span not set");
        }
        //*/

        /*
        //search span index
        let indexSpan = this.eventsJson.findIndex(event => event.type == 'span');
        this.aux.processSpan(this.eventsJson[indexSpan]);
        //this.eventsJson.splice(indexSpan, 1);
       */ 


        for (let event of this.eventsJson.splice(indexStart)) {

            const {type} = event;

            if(isStopped){
                if (type !== 'start'){
                    continue;
                }
                isStopped = false;
            }

            
            //FIX: error if not started

            switch (type) {

                case 'start': {
                    //this.aux = new EventSetup(event, this.datasets);
                    break;
                }

                case 'span': {
                    //this.aux.processSpan(this.begin, this.end);
                    break;
                }

                case 'data': {
                    this.aux.processData(event);
                    break;
                }

                case 'stop': {
                    //this.aux.processStop(event);
                    isStopped = true;
                    break;
                }

                default: {
                    console.log("Type not exists");
                }
            }
        }
    }
}