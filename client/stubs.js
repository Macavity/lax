Meteor.methods({
    newMessage: function(message){
        var userId = Meteor.userId();
        var char = Characters.findOne({userId: userId});
        message.charName = char.name;
        message.charId = char._id;
        message.charAvatar = char.avatar;
        message.userId = userId;

        Messages.insert(message);
    },
    newCharacter: function(data){
        var userId = Meteor.userId();
        var charCount = Characters.find({userId: userId}).count();

        if(charCount >= 6){
            throw new Meteor.Error("Character limit reached");
        }

        data.userId = userId;
        data.active = (charCount == 0);

        data.avatar = "/static/avatars/chara_"+data.avatar+"_head.png";

        Characters.insert(data);
    }
});