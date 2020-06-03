function CustomerPrototype(proto){

    this.proto = proto;

    this.clone = function(){
        const customer = new Customer();

        customer.first = this.proto.first;
        customer.last = this.proto.last;
        customer.status = this.proto.status;

        return customer;

    }

}

function Customer(first,last,status){

    this.first = first;
    this.last = last;
    this.status = status;

    this.say = function () {
        console.log("name: " + this.first + " " + this.last +
              ", status: " + this.status);
    };

}


var log = (function () {
    var log = "";
 
    return {
        add: function (msg) { log += msg + "\n"; },
        show: function () { console.log(log); log = ""; }
    }
})();

function run(){

    var proto = new Customer("n/a", "n/a", "pending");
    var prototype = new CustomerPrototype(proto);
 
    var customer = prototype.clone();
    customer.say();

}

run();