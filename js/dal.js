/**
 * Created by quennie on 2017-03-24.
 */
const DAL = {
  save: function(options, callback) {
    db.transaction(function(tx) {
      tx.executeSql('INSERT INTO iteminfo (' +
        'name, address, city, phone, email, make, model, year' +
        ') VALUES (?,?,?,?,?,?,?,?);', options, callback, errorHandler);
    },  errorHandler, successfulTransaction);
  },
  selectAll: function(callback) {
    db.transaction(function(tx) {
      console.info('getting data ...');
      tx.executeSql('SELECT * FROM iteminfo;', [], callback, errorHandler);
    }, errorHandler, successfulTransaction);
  }
};