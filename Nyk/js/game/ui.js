class UI extends GameObject {
    //time between noises 0.8 seconds
    constructor(x, y, gameObjects, runState, score, lives) {
        super(x, y);
        this.musicBeats = [
            new Audio("assets/music/Music_1.ogg"),
            new Audio("assets/music/Music_2.ogg"),
            new Audio("assets/music/Music_3.ogg"),
            new Audio("assets/music/Music_4.ogg")
        ];

        this.score = score;
        this.lives = lives;
        this.runState = runState;

        Engine.startCoRoutine(this.playMusic(gameObjects));

        this.setDrawObject({
            "life_1": {
                "drawPoints": [
                    new Vector(0, 0)
                ],
                "fillColour": "#ffffff",
                "strokeColour": "#ffffff",
            }
        })
    }

    draw() {
        this.drawByLine();

        this.setDrawModes("", "#ffffff");
        Engine.context.font = "28px Gill Sans MT";

        Engine.context.fillText(`Lives: ${this.lives}`, Engine.getWindowHeight() * 0.01, Engine.getWindowHeight() * 0.99);
        Engine.context.fillText(`Score: ${this.score}`, Engine.getWindowHeight() * 0.01, Engine.getWindowHeight() * 0.05);
    }

    *playMusic(gameObjects) {
        let songSpeed = 0.8; //The amount of time between each note of the music in the og game
        let fastestDiff = 0.09;
        let aliens = gameObjects.filter(gameObject => gameObject instanceof Alien);
        let songDifference = 0.8 / aliens.length;
        let timestamp = Date.now() / 1000;
        let musicCount = 0;

        while (this.runState) {
            let now = Date.now() / 1000;
            let timetaken = now - timestamp;

            aliens = gameObjects.filter(gameObject => gameObject instanceof Alien);

            let songGap = aliens.length * songDifference
            let soundDiff = songGap > fastestDiff ? songGap : fastestDiff;

            if (timetaken >= soundDiff) {
                this.musicBeats[musicCount].play();
                musicCount++;

                if (musicCount == 4)
                    musicCount = 0;
                timestamp = now;
            }
            yield null;
        }
    }
}