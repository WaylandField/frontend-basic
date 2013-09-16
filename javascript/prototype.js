var BaseClass = function(){
};

BaseClass.prototype.toString = function(){
    return this.name;
};

BaseClass.prototype.compare = function(obj){
    return obj===this;
};

var object1 = new BaseClass();
var object2 = new BaseClass();

console.log(object1.prototype === object2.prototype);
console.log(object1.compare(object2));

var extend = function(newClass, superClass, options){
    newClass.prototype = new superClass();
    for(var k in options){
	newClass.prototype[k] = options[k];
    }
};

var NameClass = function(){
    this.name = "asdfasdf";
};

extend(NameClass, BaseClass, {
    getAge: function(){
	return 10;
    }
});

var user = new NameClass();
console.log(user.toString());
console.log(user.getAge());