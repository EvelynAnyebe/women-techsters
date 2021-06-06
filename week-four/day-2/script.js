"use strict";

// const PI = 3.147;
// const sisBirthdate = new Date("12/13/2000");
// console.log(sisBirthdate.toUTCString());

// const currentDate = new Date();

// const year = currentDate.getFullYear();
// const date = currentDate.getDate();
// const month = currentDate.getMonth();
// const day = currentDate.getDay();

// // const isPast = ;

// console.log(day, year, month, date);

// console.log(Date.now());

/**
 * Log in a user into the meeting when they enter
 * - store their data in a grouped manner
 */

// a list to store my records
const meetingRecords = {};
const maxDuration = 240;
const meetingStartTime = new Date("Sun, 06 Jun 2021 12:00:00 GMT");

const emailInput = document.querySelector("#email");
const enterBtn = document.querySelector("#enter");
const leaveBtn = document.querySelector("#leave");
const reportBtn = document.querySelector("#report");
const tableBody = document.querySelector("#table-body");

// add event listeners to buttons
enterBtn.addEventListener("click", addUser);
leaveBtn.addEventListener("click", exitUser);
reportBtn.addEventListener("click",generateReport);

function addUser() {
  const email = emailInput.value;

  if (email == "") {
    return alert("Please type a users email address");
  }

  if (!meetingRecords[email]) {
    meetingRecords[email] = [];
  }

  // check if the user is already in the meeting
  let lastIndex = meetingRecords[email].length - 1;
  let previousEntry = meetingRecords[email][lastIndex];
  if (previousEntry && !previousEntry.left) {
    return alert("You already joined the meeting");
  }

  const entryTime = new Date().toUTCString();
  meetingRecords[email].push({
    joined: entryTime,
  });

  // update the dom
  updateDom();
}

function exitUser() {
  const email = emailInput.value;
  const leftTime = new Date().toUTCString();

  if (email == "") {
    return alert("Please type a users email address");
  }

  let lastIndex = meetingRecords[email].length - 1;
  let previousEntry = meetingRecords[email][lastIndex];

  // check if the user has already left the meeting
  if (previousEntry && previousEntry.left) {
    return alert("User already left");
  }

  meetingRecords[email][lastIndex].left = leftTime;

  // update the dom
  updateDom();
}

function updateDom() {
  const frag = new DocumentFragment();
  for (let email in meetingRecords) {
    for (let record of meetingRecords[email]) {
      const newRow = document.createElement("tr");
      newRow.innerHTML = `
          <td>${email}</td>
          <td>${record.joined}</td>
          <td>${record.left || "-"}</td>
      `;

      frag.append(newRow);
    }
  }

  tableBody.innerHTML = "";
  tableBody.append(frag);
}


function claculateDuration(enterTime, leaveTime){

  // If leaveTime is undefined, then set the duration in the meeting to the whole time.
  
  if(leaveTime === undefined){
     
    return maxDuration - ((new Date(enterTime).getTime()-meetingStartTime.getTime())/(1000 * 60));
  }
  const diff = new Date(leaveTime).getTime()-new Date(enterTime).getTime();
  
  return (diff/(1000 * 60));
}



// Write a generate report code to display everyone who attended the meeting and their total duration in the meeting.
function generateReport(){

  if(!Object.keys(meetingRecords).length){
    alert("No one has joined meeting");
    return false;
  }

  const frag = new DocumentFragment();
  // Get table element
  const reportTable = document.querySelector("#report-table");
  // Get tbody element
  const reportTableTbody = document.querySelector("#table-report-body");
  reportTableTbody.innerHTML="";

  // Display report table
  reportTable.style.display = "block";

  // Get loop through meeting records
  for( let email in meetingRecords){
    const lastIndex = meetingRecords[email].length - 1;

    // For every item in the attendance list calculate the duration
    let duration = 0;
    for(let timeRecord of meetingRecords[email]){
      duration +=claculateDuration(timeRecord.joined, timeRecord.left);
    }

    const newRow = document.createElement("tr");
    newRow.innerHTML=`<td>${email}</td>
    <td>${meetingRecords[email][0].joined}</td>
    <td>${meetingRecords[email][lastIndex].left || "-"}</td>
    <td>${duration.toFixed(1)} mins</td>`;

    frag.append(newRow);
  }

  reportTableTbody.appendChild(frag);

}