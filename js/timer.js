var game = new Phaser.Game(400, 300, Phaser.AUTO, '', { preload: preload, create: create, update: update });

var me = this;

function preload() {

}

function createTimer() {

    me.timeLabel = me.game.add.text(me.game.world.centerX, 100, "00:00", { font: "100px Arial", fill: "black" });
    me.timeLabel.anchor.setTo(0.5, 0);
    me.timeLabel.align = 'center';

}

function updateTimer() {

    var currentTime = new Date();
    var timeDifference = me.startTime.getTime() - currentTime.getTime();

    //Time elapsed in seconds
    me.timeElapsed = Math.abs(timeDifference / 1000);

    //Time remaining in seconds
    var timeRemaining = me.totalTime - me.timeElapsed;

    //Convert seconds into minutes and seconds
    var minutes = Math.floor(timeRemaining / 60);
    var seconds = Math.floor(timeRemaining) - (60 * minutes);

    //Display minutes, add a 0 to the start if less than 10
    var result = (minutes < 10) ? "0" + minutes : minutes;

    //Display seconds, add a 0 to the start if less than 10
    result += (seconds < 10) ? ":0" + seconds : ":" + seconds;

    me.timeLabel.text = result;

}

function create() {

    game.stage.backgroundColor = "#fff";

    me.startTime = new Date();
    me.totalTime = 120;
    me.timeElapsed = 0;

    me.createTimer();

    me.gameTimer = game.time.events.loop(100, function(){
        me.updateTimer();
    });

}

function update() {

}