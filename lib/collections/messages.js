Messages = new Mongo.Collection("messages");

Messages.attachSchema(new SimpleSchema({
    charName: {
        type: String
    },
    charId: {
        type: String
    },
    charAvatar: {
        type: String
    },
    userId: {
        type: String
    },
    channel: {
        type: String
    },
    text: {
        type: String
    },

    createdAt: {
        type: Date,
        autoValue: function() {
            if (this.isInsert) {
                return new Date();
            } else if (this.isUpsert) {
                return {$setOnInsert: new Date()};
            } else {
                this.unset();
            }
        }
    },

    updatedAt: {
        type: Date,
        autoValue: function() {
            if (this.isUpdate) {
                return new Date();
            }
        },
        denyInsert: true,
        optional: true
    }
}));