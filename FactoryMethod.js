function Factory(){
    this.createEmployee = function(type){
        let employee;

        if(type==="fulltime"){
            employee = new FullTime();
        }else if(type==="parttime"){
            employee = new PartTime();
        }

        employee.type = type;
        employee.say = function(){
            log.add(`${this.type}: rate ${this.hourly} hour`)
        }
        return employee;

    }
}

function FullTime(){
    this.hourly = "$12";
}

function PartTime(){
    this.hourly = "$11";
}




var log = (function () {
    var log = "";
 
    return {
        add: function (msg) { log += msg + "\n"; },
        show: function () { console.log(log); log = ""; }
    }
})();

function run(){

    var employees = [];
    var factory = new Factory();
 
    employees.push(factory.createEmployee("fulltime"));
    employees.push(factory.createEmployee("parttime"));
    
    for (var i = 0, len = employees.length; i < len; i++) {
        employees[i].say();
    }
 
    log.show();

}

run();