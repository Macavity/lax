
Template.game.helpers({
    isDeveloper: function(){
        return false;
    }
});

Template.game.events({
    'keypress input': function(event) {
        if(event){
            var keyCode = event.keyCode;
            if(keyCode == 87){			// Hoch
                checkMoveBG(0,-1);
                return false;
            }
            else if(keyCode == 68){		// Rechts
                checkMoveBG(1,0);
                return false;
            }
            else if(keyCode == 83){		// Runter
                checkMoveBG(0,1);
                return false;
            }
            else if(keyCode == 65){		// Links
                checkMoveBG(-1,0);
                return false;
            }
            else if(keyCode == 70){     // Zum Kampf
                document.getElementById("btn_fight").click();
            }
        }
    },
    '#btnShowArea': function(){

    }
});

Template.statusBars.helpers({
    char: function(){


        var hpBar = getBar('HP', 500, 2000, "green","red","num");
        var spBar = getBar('SP', 200, 200, "blue","red","num");
        var plBar = getBar('PL', 25, 30, "orange","red","num2bar");

        return {
            hpBar: hpBar,
            spBar: spBar,
            plBar: plBar,
            classExpBar: "",
            jobExpBar: ""
        }
    }
});