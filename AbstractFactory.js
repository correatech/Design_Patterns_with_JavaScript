function Employee(name){

    this.name = name;

    this.say = function(){
        log.add(`I am employee ${this.name}`);
    }

}

function EmployeeFactory(){

    this.create = function(name){
        return new Employee(name);
    }

}

function Vendor(name){

    this.name = name;

    this.say = function(){
        log.add(`I am vendor ${this.name}`);
    }

}

function VendorFactory(){

    this.create = function(name){
        return new Vendor(name);
    }

}

var log = (function () {
    var log = "";
 
    return {
        add: function (msg) { log += msg + "\n"; },
        show: function () { console.log(log); log = ""; }
    }
})();

function run(){

    const persons = [];
    const employeeFactory = new EmployeeFactory();
    const vendorFactory = new VendorFactory();

    persons.push(employeeFactory.create("John DiSilva"));
    persons.push(employeeFactory.create("Tim O'Neil"));
    persons.push(vendorFactory.create("Gerald Watson"));
    persons.push(vendorFactory.create("Nicole McNight"));

    for(let i = 0, len = persons.length; i < len; i++){
        persons[i].say();
    }

    log.show();

}

run();