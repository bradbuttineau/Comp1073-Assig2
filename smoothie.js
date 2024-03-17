const output = document.querySelector('#app');

class Smoothie {
    constructor(size, smoType, smoTop, smoExtra, smoDairy) {
        this.size = size;
        this.smoType = smoType;
        this.smoTop = smoTop;
        this.smoExtra = smoExtra;
        this.smoDairy= smoDairy;
    };
    //show smoothie img
    serveIt() {
        const cup = document.createElement("img");
        let smoothieImg = "images/smoothie.svg";
        if(this.smoDairy === true){
            dairy= "yes"
        }else{
            dairy="no"
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
        output.appendChild(cup);
    }
}
/* smoothie choices*/
let bradsSmoothie = new Smoothie("small", "orange", "chocolate", "none");