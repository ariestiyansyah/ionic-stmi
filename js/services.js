angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [
    { id: 0, name: '09:00 - 10:00', data: 'onto' },
    { id: 1, name: '10:00 - 10:05', data: 'rizky'},
    { id: 2, name: '10:05 - 10:10' },
    { id: 3, name: '10:10 - 11:25' },
    { id: 4, name: '11:25 - 12:40' },
    { id: 5, name: '12:40 - 13:25' },
    { id: 6, name: '13:25 - 13:30' },
    { id: 7, name: '13:30 - 14:15' },
    { id: 8, name: '14:15 - 14:45' },
    { id: 9, name: '14:45 - 16:00' }
  ];

  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
});
