/**
 * dal.js
 * Assignment04
 * Created by quennie teves on 2017-03-24.
 */
const DAL = {
  save: function(item) {
    localStorage.setItem('itemId', item.id);
    localStorage.setItem(item.id, JSON.stringify(item));
  },
  selectAll: function(callback) {
    var data = [];
    for (i=0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      if (key && key.indexOf('itemId') < 0) {
        data.push(JSON.parse(localStorage.getItem(key)));
      }
    }
    callback( data );
  }
};