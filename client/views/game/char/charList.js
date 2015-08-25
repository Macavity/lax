Template.charList.helpers({
    characters: function(){
        return Characters.find({userId: Meteor.userId()});
    },
    canCreateCharacters: function(){
        var count = Characters.find({userId: Meteor.userId()}).fetch().length;
        return (count < 6);
    }
});

Template.charList.events({
    'click .createChar': function(event){

        var target = $(event.currentTarget);
        event.stopPropagation();

        var newCharacter = {
            name: $("#newCharName").val(),
            avatar: $("#newCharAvatar").val()
        };

        try {

            Meteor.call('newCharacter', newCharacter, function(err, charId){
                if(!!err){
                    console.log("fehler");
                    console.log(err);
                    sAlert.error(err);
                }
                else{
                    console.log("kein fehler?");
                    console.log(err);
                }

            });
        }
        catch(e){
            console.log("Fehler: ");
            console.log(e);
        }
    },
    'click .switchChar': function(event){
        var target = $(event.currentTarget).closest(".switchChar");
        Meteor.call('switchCharacter', {switchTo:target.data("id")});
    }
});