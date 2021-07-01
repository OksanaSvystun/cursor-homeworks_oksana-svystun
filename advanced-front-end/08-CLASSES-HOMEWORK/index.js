class Student {
  constructor(university, course, fullName) {
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this.marks = [];
    this.status = 'студент';
  }

  getInfo() {
    console.log(`\nCтудент ${this.course}го курсу, ${this.university}, ${this.fullName}`);
  }

  get getMarks() {
    if (this.status === "виключено") {
      console.log(`Студента ${this.fullName} виключено`);
    } else {
      console.log(`Усі оцінки студента ${this.fullName}: ${this.marks}`);
    }
  }

  set setMarks(mark) {
    if (this.status == "виключено") {
      console.log(`Студента ${this.fullName} виключено`);
    } else {
      console.log('Додано оцінку', mark);
      return this.marks.push(mark);
    }
  }

  getAverageMark() {
    if (this.status === "студент") {
      let sum = 0;
      for (let i in this.marks) {
        sum += this.marks[i];
      }
      const result = +(sum / this.marks.length).toFixed(1)
      console.log(`Середній бал студента ${this.fullName} - ${result}`);
      return result;
    }
    else {
      console.log(`Студента ${this.fullName} виключено`);
      } 
    }

  dismiss() {
    this.status = "виключено";
    console.log(`Статус студента ${this.fullName} - ${this.status}`);;
  }

  recover() {
    this.status = "студент"
    console.log(`Статус студента ${this.fullName} - ${this.status}`);
  }
}

let ostap = new Student(
  "Вищої Школи Психотерапії м.Одеса",
  "1",
  "Остап Родоманський Бендер"
);

ostap.getInfo();
ostap.marks = [5, 4, 4, 5]
ostap.getMarks;
ostap.setMarks = 5;
ostap.getMarks;
ostap.getAverageMark();
ostap.dismiss();
ostap.recover();

console.log("________Advanced________");

class BudgetStudent extends Student {
  constructor(university, course, fullName, superStatus) {
    super(university, course, fullName);
    this.superStatus = superStatus;
    this.scholarship = 1400;
    this.marks = [];
    this.status = "студент";
    setInterval(() => this.getScholarship(), 5000);
  }
  getScholarship() {
    if (super.getAverageMark() >= 4 && this.superStatus === 'бютжет') {
      console.log(`Ви, ${this.fullName}, отримали ${(this.scholarship)} грн. стипендії`);
    }
    else if (this.status != "студент") {
      console.log(`Студента ${this.fullName} не існує`);
    }
    else {
      console.log(`Середній бал студента ${this.fullName} занизький для отримання стипендії`);
    }
  }
}
let op = new BudgetStudent("НУЛП", "5", "Оксана Свистун", "бютжет");
op.getInfo();
op.marks = [2, 3, 4, 2];
op.getScholarship();
console.log("___");
op.dismiss();
op.getScholarship();
console.log("___");
op.recover();
op.marks = [5, 5, 4, 5];
op.getScholarship();