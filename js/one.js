'use strict';
const studentsNew = localStorage.students ? new Student(JSON.parse(localStorage.students)) : new Student ([]);

if(studentsNew.students) {
  updateTotal();
  for (let i = 0; i < studentsNew.students.length; i++) {
    renderTable(i);

  }
}



function handleSubmit(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const mobile = document.getElementById('mobile').value;
  const tuition = document.getElementById('tuition').value;
  console.log(email. mobile, tuition);
  studentsNew.addStudent(email, mobile, tuition);
  studentsNew.saveToLocal();
  renderTable(studentsNew.students.length -1);
  updateTotal();
  event.target.reset();
}

function renderTable(index) {
  const table = document.getElementById('tbody');
  const tableRow = document.createElement('tr');
  table.appendChild(tableRow);
  const tdEl1 = document.createElement('td');
  const tdEl2 = document.createElement('td');
  const tdEl3 = document.createElement('td');
  const tdEl4 = document.createElement('td');
  const tdEl5 = document.createElement('td');
  const tdEl6 = document.createElement('td');

  tdEl1.textContent = index;
  tdEl2.textContent=studentsNew.students[index].name;
  tdEl3.textContent=studentsNew.students[index].email;
  tdEl4.textContent=studentsNew.students[index].mobile;
  tdEl5.textContent=studentsNew.students[index].age;
  tdEl6.textContent=studentsNew.students[index].tuition;

  tableRow.appendChild(tdEl1);
  tableRow.appendChild(tdEl2);
  tableRow.appendChild(tdEl3);
  tableRow.appendChild(tdEl4);
  tableRow.appendChild(tdEl5);
  tableRow.appendChild(tdEl6);


}

const fromContainer = document.getElementById('form');
fromContainer.addEventListener('submit', handleSubmit);

function updateTotal() {
  let total = 0;
  for (let i = 0; i < studentsNew.students.length; i++) {
    total += parseInt(studentsNew.students[i].tuition);
  }
  const totalCont = document.getElementById('total');
  totalCont.textContent=total;

}
