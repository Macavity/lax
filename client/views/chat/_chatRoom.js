

Template.chatRoom.helpers({
    channels: function(){
        return Channels.find();
    },
    activeCharName: function(){
        var activeChar = Characters.findOne({userId: Meteor.userId(), active: true});
        if(activeChar == null){
            activeChar = Characters.findOne({userId: Meteor.userId()});
            if(!!activeChar){
                Meteor.call('switchCharacter', { switchTo: activeChar._id });
            }
        }
        return activeChar.name;
    },
    myCharacters: function(){
        return Characters.find({userId: Meteor.userId()});
    },
    isActive: function () {
        if (Session.get('channel') === this.name) {
            return true;
        } else {
            return false;
        }
    }
});

Template.chatRoom.events({
    'keyup #chat-input, input #chat-input': function(event){
        var input = $("#chat-input");
        var inputVal = input.val();
        if(!!inputVal){
            var charCode = (typeof event.which == "number") ? event.which : event.keyCode;
        }
        if(charCode == 13){
            event.stopPropagation();

            Meteor.call('newMessage', {text: inputVal, channel: Session.get('channel')});
            input.val("");
        }
    },
    'click .channel': function (e) {
        Session.set('channel', this.name);
    },
    'click .switchChar': function(event){
        var target = $(event.currentTarget).closest(".switchChar");
        Meteor.call('switchCharacter', {switchTo:target.data("id")});
    }
});

Template.chatMessages.helpers({
    messages: function(){
        return Messages.find({}, {sort:{createdAt: -1}});
    }
});

Template.chatMessages.onCreated(function() {
    var self = this;
    self.autorun(function() {
        self.subscribe('messages', Session.get('channel'));
    });
});