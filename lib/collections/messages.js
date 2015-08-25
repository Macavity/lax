Messages = new Mongo.Collection("messages");

Messages.attachSchema(new SimpleSchema({

    channel: {
        type: String
    },
    text: {
        type: String
    },

    charName: {
        type: String,
        label: "Char Name"
    },
    charId: {
        type: String,
        label: "Char ID"
    },
    charAvatar: {
        type: String,
        label: "Char Avatar"
    },
    userId: {
        type: String,
        label: "User ID"
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