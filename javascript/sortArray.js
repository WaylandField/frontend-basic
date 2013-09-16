var compareBy = function(name){
    var comparor = function(a, b){
	if(a&&a[name]&&b&&b[name]){
	    if(a[name]===b[name]){
		return 0;
	    }
	    if(typeof a === typeof b){
		return a > b ? 1 : -1;
	    }
	    return typeof a > typeof b? 1 : -1;
	}else{
	    throw new Error("element don't have " +name+ " attribute");
	}
	
    }
    return comparor;
}

var jj = [
    {name: 'yichang'},
    {name: 'Aria'},
    {name: 'David'},
    {name: 'Miracle'},
    {name: 'Fred'},
    {name: 'Harvey'},
    {name: 'Tim'},
    {name: 'Simon'},
    {name: 'Lily'}
];
console.log(jj);
jj.sort(compareBy("name"));
console.log(jj);
