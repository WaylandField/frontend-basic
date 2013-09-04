var extend = function(child, superClass, methodMap){
    child.prototype = new superClass();
    for(var m in methodMap){
        child.prototype[m] = methodMap[m];
    }
};

var Cat = function(name){
    this.name = name;
}

var Animal = function(){
};

Animal.prototype.breath = function(){
    console.log("I'm breathing");
};

Animal.prototype.live = function(){
    console.log(this.name + " is alive");
};

extend(Cat, Animal, {
    dance: function(){
        console.log(this.name + ' can dance');
    },
    getName: function(){
        console.log("My name is "+this.name);
    }
});

var tomcat = new Cat('tomcat');
tomcat.dance();
tomcat.getName();
tomcat.live();