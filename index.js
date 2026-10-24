const CHANGE_HUE_ARRAY = ['blue+', 'red-', 'green+', 'blue-', 'red+', 'green-'];
let arrayIndex = 0; // start the array at 0
let currentOperation;
let currentColour;
let currentColourValue;

class Circle {
    constructor(element) {
        this.element = element
        this.width = element.style.width;
        this.height = element.style.height;
        this.rgb = this.getColour(); // TODO change rgb variables to dictionary
        this.red = this.rgb[0];
        this.green = this.rgb[1];
        this.blue = this.rgb[2];
        this.checkOperation();
        this.checkColour();
        this.setCurrentColourValue();
    }

    getColour() {
        /**
         * This function gets the current colour of the circle, and seperates the red, green and blue values
         */
        let currentColour = getComputedStyle(this.element).backgroundColor;
        let rgb_array = currentColour.match(/\d+/g);
        return rgb_array;
    }

    // Click function
    clickFunction() {
        // declare the current operation to preform and what colour needs to change
        let chaItem = CHANGE_HUE_ARRAY[arrayIndex]; //chaItem => Change Hue Array Item
        console.log(chaItem);
        this.changeRed();
    }

    checkOperation() {
        // check whether to increase or decrease
        if (/\+/.test(CHANGE_HUE_ARRAY[arrayIndex])) {
            currentOperation = '+';
        } else {
            currentOperation = '-';
        }
        console.log(currentOperation);
    }

    checkColour() {
        // check which colour to change
        if (/red/.test(CHANGE_HUE_ARRAY[arrayIndex])) {
            currentColour = 'red';
        } else if (/green/.test(CHANGE_HUE_ARRAY[arrayIndex])) {
            currentColour = 'green';
        } else {
            currentColour = 'blue';
        }
        console.log(currentColour);
    }

    setCurrentColourValue() {
        if (currentColour == 'red') {
            currentColourValue = Number(this.red);
        } else if (currentColour == 'green') {
            currentColourValue = Number(this.green);
        } else {
            currentColourValue = Number(this.blue);
        }
        console.log(currentColourValue);
    }

    increaseColourValue() {

    }


    changeRed() {
        let circle_red = Number(this.red) + 10;
        if (circle_red > 255) {
            circle_red = circle_red - 255;
        }
        this.red = circle_red;
        this.element.style.backgroundColor = `rgb(${this.red}, ${this.green}, ${this.blue})`;
    }

    // TODO create an array of how the colour changing process should go, and change the "change red" to function for the colour input
}

const circleElement = document.querySelector(".circle");
const circle = new Circle(circleElement);
circle.element.addEventListener('click', () => { circle.clickFunction() });