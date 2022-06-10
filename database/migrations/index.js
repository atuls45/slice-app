// const '@babel/polyfill';
const debug =require('debug');
const DB =require('../dbconnection');

const createQuery =require('./createTables');
const dropQuery =require('./dropTables');

const Debug = debug('DB_MIGRATE');

// eslint-disable-next-line consistent-return
const queryTable = async () => {
  try {
    const queries = `${dropQuery}${createQuery}`;
    const migrateTable = await DB.query(queries);
    Debug(migrateTable);
  } catch (err) {
    Debug(err.stack);
    return err.stack;
  }
};

queryTable();
