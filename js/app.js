'use strict';

const Student = function (students){
  this.students= students;
};

Student.prototype.addStudent = function (email, mobile, tuition) {
  const newStudent = new StudentList(email, mobile, tuition);
  this.students.push(newStudent);
};

Student.prototype.saveToLocal = function (){
  localStorage.setItem('students', JSON.stringify(this.students));
};




const StudentList = function (email, mobile, tuition) {
  this.email = email;
  this.mobile = mobile;
  this.tuition = tuition;
  this.name = email.split('@')[0];
  this.age = randomNumber(18, 24);
};

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}



