let menu = {
    courses: {
        appetizers: [], 
        mains: [],
        desserts: []
    },   

    // Add a dish to the array of the chosen course. 
    addDishToCourse(courseName, dishName, dishPrice) { 
        const dish = {
        name: dishName,
        price: dishPrice
       };
       this.courses[courseName].push(dish);
    }, 

    // Get a random dish from the course on the menu.
    getRandomDishFromCourse(courseName) {
        const dishes = this.courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];
    },

    // Pull a random meal from each course and add the total price of all. 
    generateRandomMeal() {
        let appetizer = this.getRandomDishFromCourse('appetizers');
        let main = this.getRandomDishFromCourse('mains');
        let dessert = this.getRandomDishFromCourse('desserts');

        let totalPrice = appetizer.price + main.price + dessert.price;

        return `Your chosen menu is ${appetizer.name}, ${main.name}, and ${dessert.name}. Your total is $${totalPrice}.`;
    }
};

// Appetizers
menu.addDishToCourse('appetizers', 'mozzarella sticks', 7);
menu.addDishToCourse('appetizers', 'fried calamari', 12);
menu.addDishToCourse('appetizers', 'bread sticks', 0);
// Mains
menu.addDishToCourse('mains', 'Gnocci', 17);
menu.addDishToCourse('mains', 'Pasta Primavera', 20);
menu.addDishToCourse('mains', 'Pesto Pasta', 15);
//Desserts
menu.addDishToCourse('desserts', 'Cheese cake', 12);
menu.addDishToCourse('desserts', 'Canole cream', 7);
menu.addDishToCourse('desserts', 'Italian cream cake', 9);

let meal = menu.generateRandomMeal();
console.log(meal);
