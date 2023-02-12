function Academy(name, students, subjects, start, end) {
    this.name = name;
    this.students = students || [];
    this.subjects = subjects || [];
    this.start = start;
    this.end = end;
    this.numberOfClasses = this.subjects.length * 10;

    this.printStudents = function () {
        console.log("The list of students: ");
        for (const student of this.students) {
            console.log(student.firstName + " " + student.lastName);
        }
    };

    this.printSubjects = function () {
        console.log("The list of subjects: ");
        for (const subject of this.subjects) {
            console.log(subject.title);
        }
    };

};

function Subject(title, isElective) {
    this.title = title;
    this.numberOfClasses = 10;
    this.isElective = isElective;
    this.academy = null;
    this.students = [];

    this.overrideClasses = function (num) {
        if (num >= 3) {
            this.numberOfClasses = num;
        } else {
            console.error("The number of classes cannot be less than 3");
        }
    };
};

function Student(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.completedSubjects = [];
    this.academy = null;
    this.currentSubject = null;

    this.startAcademy = function (academy) {
        this.academy = academy;
        academy.students.push(this);
    };

    this.startSubject = function (subject) {
        if (this.academy !== null && this.academy.subjects.includes(subject)) {
            if (this.currentSubject !== null) {
                this.completedSubjects.push(this.currentSubject);
            }
            this.currentSubject = subject;
            subject.students.push(this);
        } else {
            console.log("The student does not have an academy or the subject does not exist in the academy");
        }
    };
};

let studentOne = new Student("Nikola", "Stamenkovski", 29);
let studentTwo = new Student("Stojanche", "Stoilov", 33);
let studentThree = new Student("Kire", "Lazarov", 40);

let subjectOne = new Subject("HTML", false);
let subjectTwo = new Subject("CSS", false);
let subjectThree = new Subject("JS-BASIC", false);
let subjectFour = new Subject("JS-ADVANCED", false);

let AcademyInfo = new Academy('SEDC', [studentOne, studentTwo, studentThree], [subjectOne, subjectTwo, subjectThree, subjectFour], '01.01.2023', '21.12.2023');
console.log(AcademyInfo);
AcademyInfo.printStudents();
AcademyInfo.printSubjects();

let studentInfo = new Student('Goran', 'Pandev', 36);
console.log(studentInfo);
studentInfo.startAcademy(AcademyInfo);
studentInfo.startSubject(subjectOne);
studentInfo.startSubject(subjectTwo);