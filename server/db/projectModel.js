const { Pool } = require('pg');

const pool = new Pool ({connectionString: process.env.DB });

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