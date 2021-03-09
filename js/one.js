'use strict';
const studentsNew = localStorage.students ? JSON.parse(localStorage.students) : new Student ([]);
if(studentsNew.students) {
  updateTotal();
  renderTable();
}

const fromContainer = document.getElementById('form');
fromContainer.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const email = document.getElementById('name').value;
  const mobile = document.getElementById('mobile').value;
  const tuition = document.getElementById('tuition').value;
  console.log(email. mobile, tuition);
  studentsNew.addStudent(email, mobile, tuition);
  studentsNew.saveToLocal();
  renderTable();
  event.target.reset();
}

function renderTable() {
  const table = document.getElementById('tbody');
  for (let i = 0; i < studentsNew.students.length; i++) {
    const tableRow = document.createElement('tr');
    table.appendChild(tableRow);
    const tdEl1 = document.createElement('td');
    const tdEl2 = document.createElement('td');
    const tdEl3 = document.createElement('td');
    const tdEl4 = document.createElement('td');
    const tdEl5 = document.createElement('td');
    const tdEl6 = document.createElement('td');

    tdEl1.textContent = i;
    tdEl2.textContent=studentsNew.students[i].name;
    tdEl3.textContent=studentsNew.students[i].email;
    tdEl4.textContent=studentsNew.students[i].mobile;
    tdEl5.textContent=studentsNew.students[i].age;
    tdEl6.textContent=studentsNew.students[i].tuition;

    tableRow.appendChild(tdEl1);
    tableRow.appendChild(tdEl2);
    tableRow.appendChild(tdEl3);
    tableRow.appendChild(tdEl4);
    tableRow.appendChild(tdEl5);
    tableRow.appendChild(tdEl6);

  }

}

function updateTotal() {
  let total = 0;
  for (let i = 0; i < studentsNew.students.length; i++) {
    total += studentsNew.students[i].tuition;
  }
  const totalCont = document.getElementById('total');
  totalCont.textContent=total;

}
