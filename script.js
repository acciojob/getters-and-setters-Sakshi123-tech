// 1. Person Class
class Person {
  private _name: string;
  private _age: number;

  // Constructor to initialize the person with name and age
  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }

  // Getter for the name
  get name(): string {
    return this._name;
  }

  // Setter for the age
  set age(age: number) {
    this._age = age;
  }

  // Getter for age (if you need it)
  get age(): number {
    return this._age;
  }
}

// 2. Student Class that inherits from Person
class Student extends Person {
  // Method that logs a message indicating the student is studying
  study(): void {
    console.log(`${this.name} is studying`);
  }
}

// 3. Teacher Class that inherits from Person
class Teacher extends Person {
  // Method that logs a message indicating the teacher is teaching
  teach(): void {
    console.log(`${this.name} is teaching`);
  }
}
