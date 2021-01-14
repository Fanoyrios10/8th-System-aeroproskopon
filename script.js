"use strict";
let x = document.getElementById("visitorCounter");
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
  "Noικοκύρη",
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
  "Φίλου προς όλους",
];

const blueTableC = [
  "Θαλασσίων Σπορ",
  "Κολύμβησης",
  "Ιστιοπλοΐας",
  "Ιστιοπλόου (ΟΡΤΙΜΙSΤ)",
  "Κωπηλασία",
  "Θαλασσόλυκου",
  "Υγιεινής",
  "Υγείας του σώματος",
  "Φίλου της σωστής διατροφής",
  "Ποδηλασίας",
  "Αθλητή Στίβου",
  "Αθλοπαιδιών",
  "Αθλημάτων",
  "Φιλάθλου",
  "Προπονητή",
  "Γυμναστικής",
  "Γυμναστή",
  "Χορευτή",
  "Ελληνικών Χορών",
];

const grayTableC = [
  "Επισκευαστή",
  "Σκαπανικής",
  "Χειροτέχνη",
  "Ξυλουργού",
  "Υδραυλικού",
  "Ηλεκτρολόγου",
  "Ελαιοχρωματιστή",
  "Κεραμικής",
  "Γλυπτικής",
  "Ζωγραφικής",
  "Σκιτσογράφου",
  "Καραγκιοζοπαίχτη",
  "Κουκλοθέατρου",
  "Παιχνίδια",
  "Τυπογράφου",
  "Ζαχαροπλαστικής",
  "Μαγειρικής",
  "Υφαντικής",
  "Πλεκτικής",
  "Καλαθοπλεκτικής",
  "Κεντήματος",
  "Ραπτικής",
  "Διακοσμητή",
  "Φωτογράφου",
  "Αερομοντελιστή",
];

const greenTableC = [
  "Φίλου της θάλασσα",
  "Φίλου της Βάρκας",
  "Φίλου των ψαριών",
  "Ψαρά",
  "Γεωργού",
  "Κηπουρικής",
  "Φίλου των Λουλουδιών",
  "Βοτανολογίας",
  "Ζωοτεχνίας",
  "Φίλου των ζώων",
  "Φίλου των πουλιών",
  "Φίλου του ουρανού",
  "Φίλου του διαστήματος",
  "Μετεωρολογίας",
  "Ορυκτολογίας",
  "Φίλου του Βουνού",
  "Φίλου του Δάσους",
  "Ανίχνευσης",
  "Εκδρομέα",
  "Κατασκηνωτή",
  "Φυσιολάτρη",
  "Φίλου του Περιβάλλοντος",
  "Φίλου της Ανακύκλωσης",
  "Ειδική Ερασιτεχνική Ασχολία Προστασίας Περιβάλλοντος",
];
let chooseSomething = document.getElementById("choose_something_text");

// create red table and add event listener --> make the text appear

for (let index = 0; index < redTableC.length; index++) {
  let x = index + 1;
  let trc = document.createElement("tr");
  let tdOne = document.createElement("td");
  tdOne.innerHTML = x;
  let tdTwo = document.createElement("td");
  let tdTwoLink = document.createElement("a");
  tdTwoLink.innerHTML = redTableC[index];
  tdTwo.id = "red_table_index_" + 0 + x;
  let redIndexId = tdTwo.id;
  let redIndexIdFinalNumber = redIndexId.substr(redIndexId.length - 2);
  tdTwoLink.href = `#red${redIndexIdFinalNumber}`;
  tdTwoLink.style.cursor = "pointer";
  tdTwoLink.style.textDecoration = "none";
  trc.appendChild(tdOne);
  trc.appendChild(tdTwo);
  tdTwo.appendChild(tdTwoLink);
  document.getElementById("red_table_i").appendChild(trc);
  tdTwoLink.addEventListener("click", function () {
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

// create brown table and add event listener --> make the text appear

for (let index = 0; index < brownTableC.length; index++) {
  let x = index + 1;
  let trc = document.createElement("tr");
  let tdOne = document.createElement("td");
  tdOne.innerHTML = x;
  let tdTwo = document.createElement("td");
  let tdTwoLink = document.createElement("a");
  tdTwoLink.innerHTML = brownTableC[index];
  tdTwo.id = "brown_table_index_" + 0 + x;
  let brownIndexId = tdTwo.id;
  let brownIndexIdFinalNumber = brownIndexId.substr(brownIndexId.length - 2);
  tdTwoLink.href = `#brown${brownIndexIdFinalNumber}`;
  tdTwoLink.style.cursor = "pointer";
  tdTwoLink.style.textDecoration = "none";
  trc.appendChild(tdOne);
  trc.appendChild(tdTwo);
  tdTwo.appendChild(tdTwoLink);
  document.getElementById("brown_table_i").appendChild(trc);
  tdTwoLink.addEventListener("click", function () {
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

// create blue table and add event listener --> make the text appear

for (let index = 0; index < blueTableC.length; index++) {
  let x = index + 1;
  let trc = document.createElement("tr");
  let tdOne = document.createElement("td");
  tdOne.innerHTML = x;
  let tdTwo = document.createElement("td");
  let tdTwoLink = document.createElement("a");
  tdTwoLink.innerHTML = blueTableC[index];
  tdTwo.id = "blue_table_index_" + 0 + x;
  let blueIndexId = tdTwo.id;
  let blueIndexIdFinalNumber = blueIndexId.substr(blueIndexId.length - 2);
  tdTwoLink.href = `#blue${blueIndexIdFinalNumber}`;
  tdTwoLink.style.cursor = "pointer";
  tdTwoLink.style.textDecoration = "none";
  trc.appendChild(tdOne);
  trc.appendChild(tdTwo);
  tdTwo.appendChild(tdTwoLink);
  document.getElementById("blue_table_i").appendChild(trc);
  tdTwoLink.addEventListener("click", function () {
    let blueIndexId = tdTwo.id;
    let blueIndexIdFinalNumber = blueIndexId.substr(blueIndexId.length - 2);
    let blueItemId = document.getElementById(
      `blue_table_item_${blueIndexIdFinalNumber}`
    );
    chooseSomething.style.display = "none";
    for (let i = 0; i < allTableItmes.length; i++) {
      let element = allTableItmes[i];
      element.style.display = "none";
    }
    blueItemId.style.display = "block";
  });
}

// create gray table and add event listener --> make the text appear

for (let index = 0; index < grayTableC.length; index++) {
  let x = index + 1;
  let trc = document.createElement("tr");
  let tdOne = document.createElement("td");
  tdOne.innerHTML = x;
  let tdTwo = document.createElement("td");
  let tdTwoLink = document.createElement("a");
  tdTwoLink.innerHTML = grayTableC[index];
  tdTwo.id = "gray_table_index_" + 0 + x;
  let grayIndexId = tdTwo.id;
  let grayIndexIdFinalNumber = grayIndexId.substr(grayIndexId.length - 2);
  tdTwoLink.href = `#gray${grayIndexIdFinalNumber}`;
  tdTwoLink.style.cursor = "pointer";
  tdTwoLink.style.textDecoration = "none";
  trc.appendChild(tdOne);
  trc.appendChild(tdTwo);
  tdTwo.appendChild(tdTwoLink);
  document.getElementById("gray_table_i").appendChild(trc);
  tdTwoLink.addEventListener("click", function () {
    let grayIndexId = tdTwo.id;
    let grayIndexIdFinalNumber = grayIndexId.substr(grayIndexId.length - 2);
    let grayItemId = document.getElementById(
      `gray_table_item_${grayIndexIdFinalNumber}`
    );
    chooseSomething.style.display = "none";
    for (let i = 0; i < allTableItmes.length; i++) {
      let element = allTableItmes[i];
      element.style.display = "none";
    }
    grayItemId.style.display = "block";
    location.href = `#gray${grayIndexIdFinalNumber}`;
  });
}

// create green table and add event listener --> make the text appear

for (let index = 0; index < greenTableC.length; index++) {
  let x = index + 1;
  let trc = document.createElement("tr");
  let tdOne = document.createElement("td");
  tdOne.innerHTML = x;
  let tdTwo = document.createElement("td");
  let tdTwoLink = document.createElement("a");
  tdTwoLink.innerHTML = greenTableC[index];
  tdTwo.id = "green_table_index_" + 0 + x;
  let greenIndexId = tdTwo.id;
  let greenIndexIdFinalNumber = greenIndexId.substr(greenIndexId.length - 2);
  tdTwoLink.href = `#green${greenIndexIdFinalNumber}`;
  tdTwoLink.style.cursor = "pointer";
  tdTwoLink.style.textDecoration = "none";
  trc.appendChild(tdOne);
  trc.appendChild(tdTwo);
  tdTwo.appendChild(tdTwoLink);
  document.getElementById("green_table_i").appendChild(trc);
  tdTwoLink.addEventListener("click", function () {
    let greenIndexId = tdTwo.id;
    let greenIndexIdFinalNumber = greenIndexId.substr(greenIndexId.length - 2);
    let greenItemId = document.getElementById(
      `green_table_item_${greenIndexIdFinalNumber}`
    );
    chooseSomething.style.display = "none";
    for (let i = 0; i < allTableItmes.length; i++) {
      let element = allTableItmes[i];
      element.style.display = "none";
    }
    greenItemId.style.display = "block";
    location.href = `#green${greenIndexIdFinalNumber}`;
  });
}

const trackList = document.querySelector("select");
const container = document.getElementById("cont");
const buttons = document.getElementsByTagName("button");
const stopSymbol = document.getElementsByClassName("fa-stop");
const time = new Date().toLocaleTimeString();
let hour;
let amPm;
if (time.length === 10) {
  hour = time.substr(0, 1);
  amPm = time.substr(8, 10);
  hour = Number(hour);
  console.log(hour, amPm);
} else {
  hour = time.substr(0, 2);
  amPm = time.substr(9, 10);
  hour = Number(hour);
  console.log(hour, amPm);
}

if (
  (hour >= 8 && amPm === "PM" && hour <= 11) ||
  (hour <= 6 && amPm === "AM") ||
  (hour === 12 && amPm === "AM")
) {
  container.style.background = `linear-gradient(
    to bottom,
    rgb(79, 105, 136) 5%,
    rgb(0, 0, 0) 100%
  )`;
  for (let index = 0; index < buttons.length; index++) {
    let button = buttons[index];
    button.style.backgroundColor = "black";
  }
  for (let index = 0; index < stopSymbol.length; index++) {
    let stop = stopSymbol[index];
    stop.style.color = "white";
  }
  trackList.style.backgroundColor = "black";
  trackList.style.color = "white";
}

const modal = document.getElementById("myModal");
const leftText = document.getElementById("modal-left-text");
const rightText = document.getElementById("modal-right-text");
const allTables = document.getElementsByClassName("tables");
const allTableItmes = document.getElementsByClassName("table_items");
const red_table = document.getElementById("red_table");
const brown_table = document.getElementById("brown_table");
const blue_table = document.getElementById("blue_table");
const gray_table = document.getElementById("gray_table");
const green_table = document.getElementById("green_table");

const btn_red = document.getElementById("red");
const btn_brown = document.getElementById("brown");
const btn_blue = document.getElementById("blue");
const btn_green = document.getElementById("green");
const btn_gray = document.getElementById("gray");

const btn_red_2 = document.getElementById("red_2");
const btn_brown_2 = document.getElementById("brown_2");
const btn_blue_2 = document.getElementById("blue_2");
const btn_green_2 = document.getElementById("green_2");
const btn_gray_2 = document.getElementById("gray_2");

const span = document.getElementsByClassName("close")[0];

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
  }
  for (let i = 0; i < allTableItmes.length; i++) {
    let element = allTableItmes[i];
    element.style.display = "none";
  }
  setTimeout(function () {
    brown_table.style.display = "block";
  }, 200);
};

btn_blue.onclick = function () {
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
    blue_table.style.display = "block";
  }, 200);
};

btn_gray.onclick = function () {
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
    gray_table.style.display = "block";
  }, 200);
};

btn_green.onclick = function () {
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
    green_table.style.display = "block";
  }, 200);
};

btn_red_2.onclick = function () {
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

btn_brown_2.onclick = function () {
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
    brown_table.style.display = "block";
  }, 200);
};

btn_blue_2.onclick = function () {
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
    blue_table.style.display = "block";
  }, 200);
};

btn_gray_2.onclick = function () {
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
    gray_table.style.display = "block";
  }, 200);
};

btn_green_2.onclick = function () {
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
    green_table.style.display = "block";
  }, 200);
};

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
    window.location.href = "#c";
  }
};

let track1 = new Audio("Audio/mixkit-jumping-around-8.mp3");
let track2 = new Audio("Audio/mixkit-a-happy-child-532.mp3");
let track3 = new Audio("Audio/mixkit-at-the-playhouse-821.mp3");
let track4 = new Audio("Audio/mixkit-fun-and-games-6.mp3");
let track5 = new Audio("Audio/mixkit-playground-fun-12.mp3");
const playButton = document.getElementById("playButton");
const playButtonDisabled = document.getElementById("playButtonDisabled");
const pauseButton = document.getElementById("pauseButton");
const pauseButtonDisabled = document.getElementById("pauseButtonDisabled");
const stopButtonDisabled = document.getElementById("stopButtonDisabled");
const stopButton = document.getElementById("stopButton");

let trackSelector = 1;
let tracks = document.getElementById("musicCh");
tracks.addEventListener("click", function () {
  switch (tracks.value) {
    case "Jumping Around":
      trackSelector = 1;
      track1.pause();
      track1.currentTime = 0;
      track2.pause();
      track2.currentTime = 0;
      track3.pause();
      track3.currentTime = 0;
      track4.pause();
      track4.currentTime = 0;
      track5.pause();
      track5.currentTime = 0;
      stopButton.style.display = "none";
      stopButtonDisabled.style.display = "inline-block";
      playButton.style.display = "inline-block";
      playButtonDisabled.style.display = "none";
      pauseButton.style.display = "none";
      pauseButtonDisabled.style.display = "inline-block";
      break;
    case "A Happy Child":
      trackSelector = 2;
      track1.pause();
      track1.currentTime = 0;
      track2.pause();
      track2.currentTime = 0;
      track3.pause();
      track3.currentTime = 0;
      track4.pause();
      track4.currentTime = 0;
      track5.pause();
      track5.currentTime = 0;
      stopButton.style.display = "none";
      stopButtonDisabled.style.display = "inline-block";
      playButton.style.display = "inline-block";
      playButtonDisabled.style.display = "none";
      pauseButton.style.display = "none";
      pauseButtonDisabled.style.display = "inline-block";
      break;
    case "At The Playhouse":
      trackSelector = 3;
      track1.pause();
      track1.currentTime = 0;
      track2.pause();
      track2.currentTime = 0;
      track3.pause();
      track3.currentTime = 0;
      track4.pause();
      track4.currentTime = 0;
      track5.pause();
      track5.currentTime = 0;
      stopButton.style.display = "none";
      stopButtonDisabled.style.display = "inline-block";
      playButton.style.display = "inline-block";
      playButtonDisabled.style.display = "none";
      pauseButton.style.display = "none";
      pauseButtonDisabled.style.display = "inline-block";
      break;
    case "Fun And Games":
      trackSelector = 4;
      track1.pause();
      track1.currentTime = 0;
      track2.pause();
      track2.currentTime = 0;
      track3.pause();
      track3.currentTime = 0;
      track4.pause();
      track4.currentTime = 0;
      track5.pause();
      track5.currentTime = 0;
      stopButton.style.display = "none";
      stopButtonDisabled.style.display = "inline-block";
      playButton.style.display = "inline-block";
      playButtonDisabled.style.display = "none";
      pauseButton.style.display = "none";
      pauseButtonDisabled.style.display = "inline-block";
      break;
    case "Playground Fun":
      trackSelector = 5;
      track1.pause();
      track1.currentTime = 0;
      track2.pause();
      track2.currentTime = 0;
      track3.pause();
      track3.currentTime = 0;
      track4.pause();
      track4.currentTime = 0;
      track5.pause();
      track5.currentTime = 0;
      stopButton.style.display = "none";
      stopButtonDisabled.style.display = "inline-block";
      playButton.style.display = "inline-block";
      playButtonDisabled.style.display = "none";
      pauseButton.style.display = "none";
      pauseButtonDisabled.style.display = "inline-block";
      break;
    default:
      break;
  }
});

playButton.addEventListener("click", function () {
  switch (trackSelector) {
    case 1:
      track1.play();
      break;
    case 2:
      track2.play();
      break;
    case 3:
      track3.play();
      break;
    case 4:
      track4.play();
      break;
    case 5:
      track5.play();
      break;
    default:
      break;
  }
  playButton.style.display = "none";
  playButtonDisabled.style.display = "inline-block";
  pauseButtonDisabled.style.display = "none";
  pauseButton.style.display = "inline-block";
  stopButton.style.display = "inline-block";
  stopButtonDisabled.style.display = "none";
});

track1.onended = function () {
  track1.play();
};
track2.onended = function () {
  track2.play();
};
track3.onended = function () {
  track3.play();
};
track4.onended = function () {
  track4.play();
};
track5.onended = function () {
  track5.play();
};
// music.onended = function () {
//   // playButton.style.display = "inline-block";
//   // playButtonDisabled.style.display = "none";
//   // pauseButtonDisabled.style.display = "inline-block";
//   // pauseButton.style.display = "none";
//   switch (trackSelector) {
//     case 1:
//       track1.play();
//       break;
//     case 2:
//       track2.play();
//       break;
//     case 3:
//       track3.play();
//       break;
//     case 4:
//       track4.play();
//       break;
//     case 5:
//       track5.play();
//       break;
//     default:
//       break;
//   }
// };
pauseButton.addEventListener("click", function () {
  pauseButton.style.display = "none";
  pauseButtonDisabled.style.display = "inline-block";
  playButton.style.display = "inline-block";
  playButtonDisabled.style.display = "none";
  track1.pause();
  track2.pause();
  track3.pause();
  track4.pause();
  track5.pause();
});
stopButton.addEventListener("click", function () {
  track1.pause();
  track1.currentTime = 0;
  track2.pause();
  track2.currentTime = 0;
  track3.pause();
  track3.currentTime = 0;
  track4.pause();
  track4.currentTime = 0;
  track5.pause();
  track5.currentTime = 0;
  stopButton.style.display = "none";
  stopButtonDisabled.style.display = "inline-block";
  playButton.style.display = "inline-block";
  playButtonDisabled.style.display = "none";
  pauseButton.style.display = "none";
  pauseButtonDisabled.style.display = "inline-block";
});
