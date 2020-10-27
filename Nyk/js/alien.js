class Alien extends GameObject {
    bullets = [];
    constructor(x, y, alienIndex) {
        super(x, y)
        this.setAlienShape(alienIndex);
    }

    setAlienShape(alienIndex) {
        switch (alienIndex) {
            case 1:
                this.setDrawObject(this.alienStructureOne)
                delete this.alienStructureTwo;
                break;
            case 2:
                this.setDrawObject(this.alienStructureTwo)
                delete this.alienStructureOne;
                break;
            default:
                this.setDrawObject(this.alienStructureOne)
                delete this.alienStructureTwo;
                break;
        }
    }

    alienStructureOne = {
        "main": {
            "drawPoints": [
                new Vector(-10, 25),
                new Vector(-10, 30),
                new Vector(-20, 30),
                new Vector(-20, 25),
                new Vector(-25, 25),
                new Vector(-25, 20),
                new Vector(-20, 20),
                new Vector(-20, 15),
                new Vector(-30, 15),
                new Vector(-30, 0),
                new Vector(-25, 0),
                new Vector(-25, -5),
                new Vector(-10, -5),
                new Vector(-10, -10),
                new Vector(10, -10),
                new Vector(10, -5),
                new Vector(25, -5),
                new Vector(25, 0),
                new Vector(30, 0),
                new Vector(30, 15),
                new Vector(20, 15),
                new Vector(20, 20),
                new Vector(25, 20),
                new Vector(25, 25),
                new Vector(20, 25),
                new Vector(20, 30),
                new Vector(10, 30),
                new Vector(10, 25),
                new Vector(15, 25),
                new Vector(15, 20),
                new Vector(5, 20),
                new Vector(5, 25),
                new Vector(-5, 25),
                new Vector(-5, 20),
                new Vector(-15, 20),
                new Vector(-15, 25),
                new Vector(-10, 25),
            ],
            "fillColour": "#ffffff",
            "strokeColour": ""
        },
        "left_eye": {
            "drawPoints": [
                new Vector(-15, 5),
                new Vector(-5, 5),
                new Vector(-5, 10),
                new Vector(-15, 10),
                new Vector(-15, 5),
            ],
            "fillColour": "#000000",
            "strokeColour": "",
        },
        "right_eye": {
            "drawPoints": [
                new Vector(15, 5),
                new Vector(5, 5),
                new Vector(5, 10),
                new Vector(15, 10),
                new Vector(15, 5),
            ],
            "fillColour": "#000000",
            "strokeColour": "",
        },
        "mouth": {
            "drawPoints": [
                new Vector(-5, 15),
                new Vector(5, 15),
                new Vector(5, 20),
                new Vector(-5, 20),
                new Vector(-5, 15),
            ],
            "fillColour": "#000000",
            "strokeColour": "",
        }
    }

    alienStructureTwo = {
        "main": {
            "drawPoints": [
                new Vector(-10, 15),
                new Vector(-15, 15),
                new Vector(-15, 5),
                new Vector(-20, 5),
                new Vector(-20, 15),
                new Vector(-25, 15),
                new Vector(-25, 0),
                new Vector(-20, 0),
                new Vector(-20, -5),
                new Vector(-15, -5),
                new Vector(-15, -10),
                new Vector(-10, -10),
                new Vector(-10, -15),
                new Vector(-5, -15),
                new Vector(-5, -10),
                new Vector(10, -10),
                new Vector(10, -15),
                new Vector(15, -15),
                new Vector(15, -10),
                new Vector(20, -10),
                new Vector(20, -5),
                new Vector(25, -5),
                new Vector(25, 0),
                new Vector(30, 0),
                new Vector(30, 15),
                new Vector(25, 15),
                new Vector(25, 5),
                new Vector(20, 5),
                new Vector(20, 15),
                new Vector(15, 15),
                new Vector(15, 10),
                new Vector(-10, 10),
                new Vector(-10, 15),
            ],
            "fillColour": "#ffffff",
            "strokeColour": ""
        },
        "left_eye": {
            "drawPoints": [
                new Vector(-10, -5),
                new Vector(-5, -5),
                new Vector(-5, 0),
                new Vector(-10, 0),
                new Vector(-10, -5),
            ],
            "fillColour": "#000000",
            "strokeColour": "",
        },
        "right_eye": {
            "drawPoints": [
                new Vector(10, -5),
                new Vector(15, - 5),
                new Vector(15, 0),
                new Vector(10, 0),
                new Vector(10, -5),
            ],
            "fillColour": "#000000",
            "strokeColour": "",
        },
        "left_mouth": {
            "drawPoints": [
                new Vector(-10, 15),
                new Vector(0, 15),
                new Vector(0, 20),
                new Vector(-10, 20),
                new Vector(-10, 15),
            ],
            "fillColour": "#ffffff",
            "strokeColour": "",
        },
        "right_mouth": {
            "drawPoints": [
                new Vector(15, 15),
                new Vector(5, 15),
                new Vector(5, 20),
                new Vector(15, 20),
                new Vector(15, 15),
            ],
            "fillColour": "#ffffff",
            "strokeColour": "",
        },
        "left_ear": {
            "drawPoints": [
                new Vector(-10, -15),
                new Vector(-10, -20),
                new Vector(-15, -20),
                new Vector(-15, -15),
                new Vector(-10, -15),
            ],
            "fillColour": "#ffffff",
            "strokeColour": "",
        },
        "right_ear": {
            "drawPoints": [
                new Vector(15, -15),
                new Vector(15, -20),
                new Vector(20, -20),
                new Vector(20, -15),
                new Vector(15, -15),
            ],
            "fillColour": "#ffffff",
            "strokeColour": "",
        },
    }
}