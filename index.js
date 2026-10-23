class Circle {
    constructor(element) {
        this.element = element
        this.width = element.style.width;
        this.height = element.style.height;
        this.rgb = this.getColour();
        this.red = this.rgb[0];
        this.green = this.rgb[1];
        this.blue = this.rgb[2];
    }

    getColour() {
        let currentColour = getComputedStyle(this.element).backgroundColor;
        let rgb_array = currentColour.match(/\d+/g);
        return rgb_array;
    }

    changeRed() {
        let circle_red = Number(this.red) + 10;
        if (circle_red > 255) {
            circle_red = circle_red - 255;
        }
        this.red = circle_red;
        this.element.style.backgroundColor = `rgb(${this.red}, ${this.green}, ${this.blue})`;
        console
    }

    // TODO create an array of how the colour changing process should go, and change the "change red" to function for the colour input
}

const circleElement = document.querySelector(".circle");
const circle = new Circle(circleElement);
circle.element.addEventListener('click', ()=> {circle.changeRed()});