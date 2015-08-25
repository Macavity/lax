Meteor.methods({
    newMessage: function(message){
        var userId = Meteor.userId();
        var char = Characters.findOne({userId: userId});
        message.charName = char.name;
        message.charId = char._id;
        message.charAvatar = char.avatar;
        message.userId = userId;
        //message.channel = Session.get('channel');

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

        Characters.insert(data, function(error, result){
            if(!!error){
                console.log("Server exception");
                console.log(error);
                if(error.sanitizedError.error == 400){
                    throw new Meteor.Error(400, "Character name not available.");
                }
                else {
                    throw new Meteor.Error(error.sanitizedError.error, error.sanitizedError.reason);
                }
            }
        });

    },
    switchCharacter: function(data){
        var userId = Meteor.userId();

        var newCharacterId = data.switchTo;

        //console.log("user:"+userId+":switchTo:"+newCharacterId);

        var char = Characters.findOne({userId: userId, _id: newCharacterId});

        if(!!char){
            // Deactivate all Chars of this user
            var currentlyActiveChar = Characters.findOne({userId: userId, active: true});
            if(!!currentlyActiveChar){
                Characters.update(currentlyActiveChar, {
                    $set: {
                        active: false
                    }
                }, function(error, result){
                    if(!!error){
                        console.log("Server exception");
                        console.log(error);
                        throw new Meteor.Error(error.sanitizedError.error, error.sanitizedError.reason);

                    }
                });
            }

            // and activate the chosen one
            Characters.update(newCharacterId, {
                $set: {
                    active: true
                }
            });
        }
        else {
            throw new Meteor.Error(404, "Character "+newCharacterId+" not found.");
        }
    },

    newMap: function(data){
        var userId = Meteor.userId();

        data.creatorId = userId;
        //data.creatorName = Characters.findOne({userId: userId, active: true}).name;

        data.width = 1;
        data.height = 1;

        Maps.insert(data, function(error, result){
            if(!!error){
                console.log("Server exception");
                console.log(error);
                throw new Meteor.Error(error.sanitizedError.error, error.sanitizedError.reason);
            }
        });

    },

    uploadTilemap: function(file){
        Uploads.insert(file, function (err, fileObj) {
            if (err){
                // handle error
            } else {
                // handle success depending what you need to do
                var userId = Meteor.userId();

                console.log(fileObj);

                var imagesURL = {
                    "profile.image": "/cfs/files/uploads/" + fileObj._id
                };
                Meteor.users.update(userId, {$set: imagesURL});
            }
        });
    }
});