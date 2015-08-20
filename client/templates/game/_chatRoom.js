Template.chatRoom.helpers({
    messages: function(){
        return [
            {name: "Macavity", avatar: "/static/avatars/chara_2_head.png", text: "lorem ipsum"}
        ];
    }
});

Template.chatRoom.events({
    'keyup input .chat-input': function(event){
        if(event.keyCode == 13){
            event.stopPropagation();
            $('.chat-history').prepend('<div class="message"><a href="" class="message_profile-pic"></a><a href="" class="message_username">scotch</a><span class="message_timestamp">1:31 AM</span><span class="message_star"></span><span class="message_content">' + $('.input-box_text').val() + '</span></div>');
            $('.chat-input').val("");
        }
    }
});