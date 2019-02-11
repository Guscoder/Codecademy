const menu = {
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
    return this._courses.mains;

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
  get _courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    };
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    return this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal: function(){
          const appetizer = 	this.getRandomDishFromCourse('appetizers');
          const main = 	this.getRandomDishFromCourse('mains');
          const dessert = 	this.getRandomDishFromCourse('desserts');
        const totalPrice = appetizer.price + main.price + dessert.price;
        return `You meal includes ${appetizer.name}, ${main.name} and ${dessert.name} for a total bill of ${totalPrice}.`;
  }
}

menu.addDishToCourse('mains', 'Burger', 10.00);

menu.addDishToCourse('appetizers', 'Tofu', 5.00);

menu.addDishToCourse('desserts', 'cookie', 4.00);

const meal = menu.generateRandomMeal();
console.log(meal);