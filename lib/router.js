
Router.configure({
    layoutTemplate: "default",
    loadingTemplate: "loading",
    notFoundTemplate: "notFound",
    waitOn: function(){
        return Meteor.subscribe('posts');
    }
});

/**
 * News
 */
Router.route('/', {
    name: 'postsList'
});
Router.route('/posts/:_id', {
    name: 'postPage',
    data: function(){
        return Posts.findOne(this.params._id);
    }
});

/**
 * Map
 */
Router.route('/game', {
    name: 'game',
    data: function(){

        var char = {
            _id: 2,
            name: "Macavity",
            location: {
                map_id: "dalaran",
                x: 0,
                y: 0
            },
            head: '<img src="/static/images/avatars/chara_'+'1'+'_head.png">'
        };

        var map = {
            name: char.location.map_id
        };

        // Configuration
        var config_save_pos = true;
        var reset_tds = [];
        // - Config MOBs
        var m_id = [];
        var m_name = [];
        var m_chance = [];
        var m_aggro = [];

        /**
         * @TODO Monster on Map
         * @type {Array}
         */
        //{MONSTER_DATA}

        // - Config JPs
        var event_data = [];

        /**
         * @TODO Events on Map
         * @type {string}
         */
        //{EVENT_DATA}

        // --
        var map_id = 'dalaran';
        var httpObject = false;
        var reset_td = [];
        var nZaehler = 0;
        var sight = 5;
        var minTD = 1;
        var maxTD = (sight*2)+1;   // zb bei 5: 5 nach links, 5 nach rechts + 1 in der Mitte
        var minSight = (-1 * sight);
        var maxSight = (+1 * sight);
        var start_pos_x = char.location.x;
        var start_pos_y = char.location.y;
        var pos_x = 0;
        var pos_y = 0;
        var chara_id = char._id;
        var user_id = Meteor.userId();
        var chara_img_left = -50;
        var chara_img_top = 1;
        var cursor_image = 'crosshair';
        var move_count = 0;


        return {
            char : char,
            map: map,
            minimapSrc: function(){
                return "/static/maps/mini/"+map.name+"_small.png"
            }
        }
    }
});

var requireLogin = function() {
    if (! Meteor.user()) {
        if (Meteor.loggingIn()) {
            this.render(this.loadingTemplate);
        } else {
            this.render('accessDenied');
        }
    } else {
        this.next();
    }
}

// Show not found if there is not data found
Router.onBeforeAction('dataNotFound', {only: 'postPage'});

/**
 * Login required
 */
Router.onBeforeAction(requireLogin, {
    only: 'postSubmit'
});