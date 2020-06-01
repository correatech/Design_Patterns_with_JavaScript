function Shop(){

    this.construct = function(builder){
        builder.step1();
        builder.step2();
        return builder.get();
    }

}

function CarBuilder(){

    this.car = null;

    this.step1 = function(){
        this.car = new Car();
    }

    this.step2 = function(){
        this.car.addParts();
    }

    this.get = function(){
        return this.car;
    }

}

function Car(){
    this.doors = 0;
 
    this.addParts = function() {
        this.doors = 4;
    };
 
    this.say = function() {
        log.add("I am a " + this.doors + "-door car");
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

    const shop = new Shop();
    const carBuilder = new CarBuilder();
    const car = shop.construct(carBuilder);
 
    car.say();
 
    log.show();

}

run();