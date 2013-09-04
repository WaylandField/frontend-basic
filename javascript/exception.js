var addUser = function(user){
    if(!user){
        throw {type:'error', msg:'user is null'};
    }
    console.log(user + ' added');
};
addUser('user1');
try{
    addUser(null);
}catch(e){
    console.log(e);
}
addUser('user2');
addUser(null);
addUser('user3');
