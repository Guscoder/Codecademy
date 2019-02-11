class School {
    constuctor(name, level, numberOfStudents){
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
    }
    get name(){
      return this._name;
    }
      get level(){
      return this._level;
    }
      get numberOfStudents(){
      return this._numberOfStudents;
    }
    set numberOfStudents(newNum){
      typeof this.newNum === 'Number' ?this._numberOfStudents = newNum : console.log('Invalid input: numberOfStudents must be set to a Number.');
    }
    quickFacts(){
      console.log(`${this.name} educates ${this.numberOfStudents} at the ${this.level} school level.`);
    }
    static pickSubstituteTeacher(substituteTeachers){
      let arrLength = substituteTeachers.length;
      let randomIndex = Math.floor(Math.random() * arrLength);
      console.log(substituteTeachers[randomIndex]);
    }
  }
  
  class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy){
      super(name, 'primary', numberOfStudents);
      this._pickupPolicy = pickupPolicy;
    }
    get pickupPolicy(){
      return this._pickupPolicy;
    }
  }
  
  class MiddleSchool extends School {
    constructor(name, numberOfStudents) {
      super(name, 'middle', numberOfStudents);
    }
  }
  
  class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams){
      super(name, 'high', numberOfStudents);
      this._sportsTeams = sportsTeams;
    }
    get sportsTeams(){
      console.log(this._sportsTeams);
    }
  }
  
  const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
  
  lorraineHansbury.quickFacts();
  
  School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
  
  const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
  
  alSmith.sportsTeams;
  