/*jslint es6 */

class animal {
    constructor(name, height) {
        this.name = name;
        this.height = height;
    }
    hello () {
        console.log(`Hello i'm ${this.name} from the animal kingdom`);
    }
}
export default animal;