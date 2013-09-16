var jj = [];
for(var i=0;i<1000000;i++){
    jj.push(i);
}
var time = new Date();
while(jj.length>0){
    jj.shift();
}
console.log(time.getTime() - (new Date()).getTime());

for(var i=0;i<1000000;i++){
    jj.push(i);
}
time = new Date();
jj.reverse();
while(jj.length>0){
    jj.pop();
}
console.log(time.getTime() - (new Date()).getTime());
