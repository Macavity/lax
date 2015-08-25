
Template.adminWorld.helpers({
    canCreateMaps: function(){
        return true;
    }
});

Template.adminWorld.events({
    'click .createMap': function(event){

        var target = $(event.currentTarget);
        event.stopPropagation();

        var newMap = {
            name: $("#newMapName").val()
        };

        Meteor.call('newMap', newMap, function(err, mapId){
            if(!!err){
                console.log("fehler");
                console.log(err);
                sAlert.error(err);
            }
        });
    },
    'change .mapUpload': function(event, template) {
        FS.Utility.eachFile(event, function(file) {

            console.log(file);

            Meteor.call('uploadTilemap', file, function(err, result){
                if(!!err){
                    console.log("Upload Error");
                    console.log(err);
                    sAlert.error(err);
                }
            });

        });
    }
});