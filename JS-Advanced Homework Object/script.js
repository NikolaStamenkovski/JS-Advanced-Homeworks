function Academy(name, students, subjects, start, end, NumberOfClasses= 10, ) {
    this.name = name;
    this.students = students;
    this.subjects = subjects;
    this.start = start;
    this.end = end;
    this.NumberOfClasses = NumberOfClasses;
    this.printStudents = () => {
        this.students.forEach( list => {
            console.log(`The list of students is: ${students}`)
        });
    }
    this.printSubjects = () => {
        this.subjects.forEach(list => {
            console.log(`The list of Subjects is: ${subjects} `);
        })
    }
};

function Subject(title, NumberOfClases= 10 , isElective = true, academy = Academy, students, overrideClasses) {
    this.title = title,
    this.NumberOfClases = NumberOfClases, 
    this.isElective = isElective, 
    this.academy = academy,
    this.students = students,
    this.overrideClasses = overrideClasses,
    this.overrideClasses = (num) => {
        let overrideClasses = 0;
        if (num > 3 ) {
            this.NumberOfClases = overrideClasses;
            console.log(NumberOfClases);
        } 
    }

};
function Student(firstName, LastName, Age, complitedSubjects = [], academy = null, currentSubject = null, ) {
    this.firstName = firstName,
    this.LastName = LastName,
    this.Age = Age,
    this.complitedSubjects = complitedSubjects,
    this.academy = academy,
    this.currentSubject = currentSubject,
    this.startAcademy = this.startAcademy = (academy) =>{
        this.academy = academy;
        academy.students.push(this); 
      }  
    this.startSubject = (subject) => {
        this.currentSubject = subject;
        subject.students.push(this);
    if (!this.academy.subjects.includes(subject)) {
        console.error('Subject is not available in the academy');
        return;
    }
    if (this.currentSubject) {
        this.completedSubjects.push(this.currentSubject);
        this.currentSubject.students = this.currentSubject.students.filter(s => s !== this);
    } 
 }   
     
};
let AcademyInfo = new Academy('SEDC', ['Nikola Stamenkovski', 'Stojanche Stoilov', 'Kire Lazarov'], ['HTML', 'CSS', 'JS-BASIC', 'JS-ADVANCED'], '01.01.2023', '21.12.2023' );
console.log(AcademyInfo);

let subjectInfo = new Subject('C#', ['Filip Filipovksi', 'Naum Naumovski', 'Zafir Zafirovski', 7]);
console.log(subjectInfo);

let studentInfo = new Student('Goran', 'Pandev', 29, ['HTML', 'CSS', 'JS-BASIC'])
console.log(studentInfo);
