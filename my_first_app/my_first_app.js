if (Meteor.isClient) {

    Template.currentTime.helpers({
        getCurrentTime: function () {
            return new Date()
        }
    });
}
if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
