const { Pool } = require('pg');

const PG_URI = 'postgres://zvtisarc:KEw1fVg5mh0tzCAFzlOtTugNT5as090_@fanny.db.elephantsql.com/zvtisarc';

const pool = new Pool ({connectionString: PG_URI });

module.exports = {
  query: async (text, params, callback) => {
    try{  
      const result = await pool.query(text, params, callback);
      console.log('query executed', text, 'result:', result)
      return result;
    }
    catch(e){
      console.log('error', e, 'from projectModel.js' )
    }
  }
};