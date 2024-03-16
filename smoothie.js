const output = document.querySelector('#app');

class Smoothie{
    constructor(size, smoMilk , smoType, smoTop, smoExtra){
        this.size=size;
        this.smoMilk=smoMilk;
        this.smoType=smoType;
        this.smoTop=smoTop;
        this.smoExtra= smoExtra;
    };
   //show smoothie img
    serveIt(){
    const cup = document.createElement("img");
    let smoothieImg = "images/smoothie.svg";

    }
    //smoothie sizes
    let smoothieSize;
    switch(this.size){
        case "small":
            smoothieSize= "100";
            break;
        case "medium":
            smoothieSize= "125";
            break;
        case "large":
            smoothieSize= "150";
            break;
        default:
            smoothieSize= "100";
    }
    cup.setAttribute("height", smoothieSize);
    let description= `A ${this.size}`

}