const { Pool, types, Client  } =require('pg');
const DBConfig =require('./config');
const util = require('util');



types.setTypeParser(1700, val => parseFloat(val));

module.exports = {
 async query(text, params) {
    try{
      const client = new Client(DBConfig.connectionString);
      client.connect()
      try {
        const res = await client.query(
          text, params
        );

        client.end();
        return res
      } catch (error) {
        console.log(error)
      }
  } catch(err) {
    console.log('err= ', err)}
  },
};
