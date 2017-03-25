/**
 * Created by quennie on 2017-03-24.
 */

var db;

const successfulTransaction = function() {
  console.info('Transaction is successful');
};

const errorHandler = function(tx, error) {
  console.error('SQL ERROR', tx, '(', error.code, ') -- ', error.message);
};

var successExecuteSql = function(message) {
  console.info(message);
};

const DB = {
  createDatabase: function() {
    db = openDatabase('prog2070','1.0','sample db', (2 * 1024 * 1024),
      function() {
        console.info('Successful creating the database');
    });
  },
  createTables: function() {
    db.transaction(function(tx) {
      tx.executeSql('DROP TABLE IF EXISTS iteminfo;',
        [],
        successExecuteSql('Table iteminfo dropped successfully'),
        errorHandler);

      tx.executeSql('CREATE TABLE IF NOT EXISTS iteminfo (' +
        'id INTEGER PRIMARY KEY AUTOINCREMENT, ' +
        'name VARCHAR(50) NOT NULL, ' +
        'address VARCHAR(30) NOT NULL, ' +
        'city VARCHAR(15) NOT NULL, ' +
        'phone VARCHAR(15) NOT NULL, ' +
        'email VARCHAR(30) NOT NULL, ' +
        'make VARCHAR(15) NOT NULL, ' +
        'model VARCHAR(15) NOT NULL, ' +
        'year INTEGER NOT NULL);',
        [],
        successExecuteSql('Table iteminfo created successfully'),
        errorHandler);
    }, errorHandler, successfulTransaction);
  }
};