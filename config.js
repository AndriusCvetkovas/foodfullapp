const approot = require('app-root-path');
const types = require(approot+"/includes/appname/types");
const config = {
  /*production
  db:{
    user: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    host: process.env.RDS_HOSTNAME,
    port: process.env.RDS_PORT,
    database: process.env.RDS_DB,
    type:"prod"
  }
  */
  db:{
    user:"postgres",
    password:"",
    host:"localhost",
    port:"5432",
    database:"foodfull"
  },
  types:types
}


module.exports = config;