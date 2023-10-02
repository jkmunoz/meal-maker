let menu = {
    courses: {
        appetizers: [], 
        mains: [],
        desserts: []
    },   
    addDishToCourse(courseName, dishName, dishPrice) { 
        let dish = {
        name: this.dishName,
        price: this.dishPrice
       }
       for (course in courseName)
       dish.push(course);
    }, 
    getRandomDishFromCourse(courseName) {
        let dishes = {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts
        }
        return dishes;
    }

};

console.log(menu.addDishToCourse(Dinner, spaghetti, 18))