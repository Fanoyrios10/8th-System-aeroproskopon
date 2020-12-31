"use strict";

const redTableC = [
  "Φιλότεχνου",
  "Φίλου της λογοτεχνίας",
  "Φίλου της Ποίησης",
  "Φίλου της Μουσικής",
  "Φίλου της Ραδιοφωνίας - Τηλεόρασης",
  "Φίλου του Θεάτρου",
  "Φίλου του Κινηματογράφου",
  "Ξένων Γλωσσών",
  "Παγκόσμιων γνώσεων",
  "Ιστορικού",
  "Γνωριμίας με την πατρίδα",
  "Αρχαιολόγου",
  "Σωστού Μαθητή",
  "Παρατηρητή",
  "Καλού συζητητή",
  "Μουσικού",
  "Συλλέκτη",
  "Αφηγητή",
  "Φίλου των παραμυθιών",
  "Φίλου των κόμικς",
  "Ηθοποιού",
  "Τραγουδιστή",
  "Φίλου της Λαϊκής Παράδοσης",
  "Φίλου Πνευματικών Παιγνιδιών",
  "Δημιουργικής Φαντασίας",
  "Συμμετοχής στο Πάσχα",
  "Συμμετοχής στα Χριστούγεννα",
  "Γνώστη Ηλεκτρονικών Υπολογιστών",
  "Φίλου των Ολυμπιακών Αγώνων",
  "Ειδική Ερασιτεχνική Ασχολία Πολιτιστικής Κληρονομιάς",
];

const brownTableC = [
  "Α' Βοηθειών",
  "Πρόληψης Ατυχημάτων",
  "Γραμματέα",
  "Δημοσιογράφου",
  "Φίλου προς όλους",
  "Σωστής Κοινωνικής Συμπεριφοράς",
  "Καλού Πολίτη",
  "Φίλου της Ειρήνης",
  "Γνωριμίας με την Πόλη - το χωριό",
  "Φίλου της γειτονιάς",
  "Φίλου της καθαρής πόλης",
  "Φίλου της κοινοτικής ανάπτυξης",
  "Ευρωπαίου Πολίτη",
  "Φίλου των Βαλκανίων",
  "Ξεναγού",
  "Φίλου της Οικογένειας",
  "Οικοκύρη",
  "Φίλου του σπιτιού",
  "Φιλοξενίας",
  "Βρεφοκομίας",
  "Μελετητή της θρησκείας",
  "Βοηθού της εκκλησίας",
  "Βιβλιοθηκάριου",
  "Πυροσβέστη",
  "Ψυχαγωγού",
  "Διοργανωτή γιορτών",
  "Ταξιδιώτη",
  "Φίλου της επικοινωνίας",
  "Οικονομικών συναλλαγών",
  "Ειδική Ερασιτεχνική Ασχολία Φίλου της Ζωής",
];

let chooseSomething = document.getElementById("choose_something_text");

for (let index = 0; index < redTableC.length; index++) {
  let x = index + 1;
  let trc = document.createElement("tr");
  let tdOne = document.createElement("td");
  tdOne.innerHTML = x;
  let tdTwo = document.createElement("td");
  tdTwo.innerHTML = redTableC[index];
  tdTwo.id = "red_table_index_" + 0 + x;
  tdTwo.style.cursor = "pointer";
  trc.appendChild(tdOne);
  trc.appendChild(tdTwo);
  document.getElementById("red_table_i").appendChild(trc);
  tdTwo.addEventListener("click", function () {
    let redIndexId = tdTwo.id;
    let redIndexIdFinalNumber = redIndexId.substr(redIndexId.length - 2);
    let redItemId = document.getElementById(
      `red_table_item_${redIndexIdFinalNumber}`
    );
    chooseSomething.style.display = "none";
    for (let i = 0; i < allTableItmes.length; i++) {
      let element = allTableItmes[i];
      element.style.display = "none";
    }
    redItemId.style.display = "block";
  });
}

for (let index = 0; index < brownTableC.length; index++) {
  let x = index + 1;
  let trc = document.createElement("tr");
  let tdOne = document.createElement("td");
  tdOne.innerHTML = x;
  let tdTwo = document.createElement("td");
  tdTwo.innerHTML = brownTableC[index];
  tdTwo.id = "brown_table_index_" + 0 + x;
  tdTwo.style.cursor = "pointer";
  trc.appendChild(tdOne);
  trc.appendChild(tdTwo);
  document.getElementById("brown_table_i").appendChild(trc);
  tdTwo.addEventListener("click", function () {
    let brownIndexId = tdTwo.id;
    let brownIndexIdFinalNumber = brownIndexId.substr(brownIndexId.length - 2);
    let brownItemId = document.getElementById(
      `brown_table_item_${brownIndexIdFinalNumber}`
    );
    chooseSomething.style.display = "none";
    for (let i = 0; i < allTableItmes.length; i++) {
      let element = allTableItmes[i];
      element.style.display = "none";
    }
    brownItemId.style.display = "block";
  });
}

// Get the modal
const modal = document.getElementById("myModal");
const leftText = document.getElementById("modal-left-text");
const rightText = document.getElementById("modal-right-text");
const allTables = document.getElementsByClassName("tables");
const allTableItmes = document.getElementsByClassName("table_items");
const red_table = document.getElementById("red_table");
const brown_table = document.getElementById("brown_table");

// Get the buttons that opens the modal
const btn_red = document.getElementById("red");
const btn_brown = document.getElementById("brown");
const btn_blue = document.getElementById("blue");
const btn_green = document.getElementById("green");
const btn_gray = document.getElementById("gray");

// // Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// // When the user clicks the button, open the modal
btn_red.onclick = function () {
  modal.style.display = "block";
  modal.style.animationName = "modalAnimation";
  modal.style.animationDuration = "2s";
  for (let i = 0; i < allTables.length; i++) {
    let element = allTables[i];
    element.style.display = "none";
  }
  for (let i = 0; i < allTableItmes.length; i++) {
    let element = allTableItmes[i];
    element.style.display = "none";
  }
  setTimeout(function () {
    red_table.style.display = "block";
  }, 200);
};

btn_brown.onclick = function () {
  modal.style.display = "block";
  modal.style.animationName = "modalAnimation";
  modal.style.animationDuration = "2s";
  for (let i = 0; i < allTables.length; i++) {
    let element = allTables[i];
    element.style.display = "none";
    console.log(element);
    console.log(element.style.display);
  }
  for (let i = 0; i < allTableItmes.length; i++) {
    let element = allTableItmes[i];
    element.style.display = "none";
    console.log(element);
    console.log(element.style.display);
  }
  setTimeout(function () {
    brown_table.style.display = "block";
  }, 200);
};

// // When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
  for (let i = 0; i < allTables.length; i++) {
    let element = allTables[i];
    element.style.display = "none";
  }
  for (let i = 0; i < allTableItmes.length; i++) {
    let element = allTableItmes[i];
    element.style.display = "none";
  }
  chooseSomething.style.display = "block";
};

// // When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    for (let i = 0; i < allTables.length; i++) {
      let element = allTables[i];
      element.style.display = "none";
    }
    for (let i = 0; i < allTableItmes.length; i++) {
      let element = allTableItmes[i];
      element.style.display = "none";
    }
    chooseSomething.style.display = "block";
  }
};
