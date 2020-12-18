let menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: [],
    },
    get appetizers() {
        return this._courses.appetizers;
    },
    set appetizers(appetizersIn) {
        this._courses.appetizers = appetizersIn;
    },
    get mains() {
        return this._courses.appetizers;
    },
    set mains(mainsIn) {
        this._courses.mains = mainsIn;
    },
    get desserts() {
        return this._courses.desserts;
    },
    set desserts(dessertsIn) {
        this._courses.desserts = dessertsIn;
    },
    get course() {
        return {
            appetizers: this._courses.appetizers,
            mains: this._courses.mains,
            desserts: this._courses.desserts
        };
    },
    set course(courseIn) {
        this._courses = courseIn;
    },
    addDishToCourse(courseName, dishName, dishPrice) {
        let dish = {
            name: dishName,
            price: dishPrice
        }
        this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
        const dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];
    },
    generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        const totalPrice = appetizer.price + main.price + dessert.price;
        return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name} ... The price is $${totalPrice}.`
    }
}
menu.addDishToCourse('appetizers', 'Salad', 6);
menu.addDishToCourse('appetizers', 'Pickle', 10);
menu.addDishToCourse('appetizers', 'Tomato', 20);

menu.addDishToCourse('mains', 'Beef Main Dishes', 48);
menu.addDishToCourse('mains', 'Chicken', 59);
menu.addDishToCourse('mains', 'pickled cucumber', 18);

menu.addDishToCourse('desserts', 'ice-cream',20);
menu.addDishToCourse('desserts', 'apple pie',20);
menu.addDishToCourse('desserts', 'date cake',20);

const meal = menu.generateRandomMeal();
console.log(meal);