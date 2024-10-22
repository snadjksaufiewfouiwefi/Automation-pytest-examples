class pubsub {

    constructor() {
        this.subscribers = {};//{'eventName' : [cb_subs1, cb_subs2,cb_subs3...]}
    }
    /**
     * @param event -> it is a string denoting unique fired
     * @param callback -> for a subscriber what method shoulb be executed when an event is fired
     * 
     */
    subscribe(event, callback) {
        if(!this.subscribers[event]) {
            //currently no subscriber callback was registered for the event
            this.subscribers[event] = [];
        }
        this.subscribers[event].push(callback);

        return () => this.unsubscribe(event, callback);
    }

    unsubscribe(event, callback) {
        if(!this.subscribers[event]) return;
        this.subscribers[event]= this.subscribers[event].filter(cb => cb != callback);
    }

    /**
     *  @param event -> it is a string denoting unique event fired
     * @param data -> for the given event what data should be passed along with publishing the event
     * 
     */
    publish(event, data){
    if(!this.subscribers[event]) return;
    this.subscribers[event].forEach(callback => callback(data));
    }
}

/*const pb = new pubsub();
const unsubAirforce1 = pb.subscribe('airforce', (data) => console.log("subscriber 1 of airforce", data));
const unsubAirforce2 = pb.subscribe('airforce', (data) => console.log("subscriber 2 of airforce", data));
const unsubNewBalance1 = pb.subscribe('enew balance', (data) => console.log("subscriber 1 of new balance", data));

pb.publish('airforce', {shoeName: 'jordan airforce'});
pb.publish('new balance', {shoeName: 'something'});

unsubAirforce2();
pb.publish('airforce', {shoeName: "jordan new shoes"});*/