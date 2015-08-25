Characters = new Mongo.Collection('characters');

Characters.attachSchema(new SimpleSchema({
    name: {
        type: String,
        index: true,
        unique: true
    },
    avatar: {
        type: String
    },
    userId: {
        type: String
    },
    active: {
        type: Boolean
    }
}));