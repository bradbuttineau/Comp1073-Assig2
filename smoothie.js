const output = document.querySelector('#app');

class Smoothie {
    constructor(size, smoType, smoTop, smoDairy) {
        this.size = size;
        this.smoType = smoType;
        this.smoTop = smoTop;
        this.smoDairy = smoDairy;
    };
    //show smoothie img
    serveIt() {
        const cup = document.createElement("img");
        let smoothieImg = "images/smoothie.svg";

        switch (this.smoType) {
            case "orange":
                smoothieImg = "images/orange.svg";

                break;
            case "lemon":
                smoothieImg = "images/lemon.svg";
                break;
            case "dragon-fruit":
                smoothieImg = "images/dragon-fruit.svg"
                break;
            case "grapefruits":
                smoothieImg= "images/grapefruits.svg";
                break;
            case "banana":
                smoothieImg= "images/banana-smoothie.svg";
                break;
            default:
                smoothieImg= "images/smoothies.svg";

        }








        let dairy;
        if (this.smoDairy === true) {
            dairy = "yes"
        } else {
            dairy = "no"
        }

        //smoothie sizes on screen
        let smoothieSize;
        switch (this.size) {
            case "small":
                smoothieSize = "100";


                break;
            case "medium":
                smoothieSize = "125";
                break;
            case "large":
                smoothieSize = "150";
                break;
            default:
                smoothieSize = "100";
        }
        cup.setAttribute("height", smoothieSize);
        this.description = function () {
            output.textContent = `Your order is complete you ordered: ${this.size}, ${this.smoType}, ${this.smoTop} with ${this.dairy}`
        }

    }
}
/* smoothie choices*/
let bradsSmoothie = new Smoothie("small", "orange", "chocolate", "none");