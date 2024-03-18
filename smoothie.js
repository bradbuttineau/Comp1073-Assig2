
let submit= document.getElementById('form1')
const output = document.getElementById('output')
 let choice1=[ "small", "medium", "large"];
 let choice2=["banana", "orange", "pear", "dragon-fruit", "lemon", "grape" ];
 let choice3=["strawberry", "orange-slices", "apple-slices", "chocolate-chunks", "lemon-slices","whip-cream"];
 let choice4=["yes", "no"];
class Smoothie {
    constructor(size, smoType, smoTop, smoDairy) {
        this.size = size;
        this.smoType = smoType;
        this.smoTop = smoTop;
        this.smoDairy = smoDairy;
    };
    serveIt() {
        //generate smoothie img
        const drink = document.createElement("img");
        let smoothieImg = "images/smoothie.svg";
        let dairy;
        //dairy in smoothie option
        if (this.smoDairy === true) {
            dairy = "yes";
        } else {
            dairy = "no";
        }

        //smoothie sizes
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
        drink.setAttribute("height", smoothieSize);
        output.appendChild(drink);

        // img shown by type
        drink.setAttribute("scr", smoothieImg);
        smoothieImg= this.smoType;
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
                smoothieImg = "images/grapefruits.svg";
                break;
            case "banana":
                smoothieImg = "images/banana-smoothie.svg";
                break;
            default:
                smoothieImg = "images/smoothies.svg";

        }
        document.getElementById(form1).addEventListener("checked", function(){
            output.textContent = `Your order is complete. You ordered: ${this.size}, ${this.smoType}, ${this.smoTop} with ${dairy}`;


        });


    }
}

