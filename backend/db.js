const pg = require('pg');
//pg.defaults.ssl = true;

var connection = "postgres://postgres:Vmk_1971@localhost:5432/postgres"; 
var db = new pg.Client(connection);
db.connect((err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('connected to postresql database.....')
    }
    
})

module.exports = db