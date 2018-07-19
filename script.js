class Person { // Holds name and balance for each person
  constructor(name, balance, color) {
    this.name = name;
    this.balance = balance;
    this.color = color;
  }

  owe(personB) { // Returns the amount this person owes another
    if (Math.abs(this.balance) >= personB.balance) {
      var temp = personB.balance;
    } else {
      var temp = Math.abs(this.balance);
    }
    this.balance += temp;
    personB.balance -= temp;
    var currency = document.getElementById("currency").elements[0].value;
    return "<span style='background-color: " + this.color + "'>" + this.name + "</span> owes <span style='background-color: "+ personB.color + "'>" + personB.name + "</span> " + String(temp) + currency + "<br>";
  }
}

function toggleForms() {
  var form0 = document.getElementById("form0");
  var people = form0.elements[0].value;
  if (people > 2) {
    document.getElementById("form3").style.display = "block";
  } else {
    document.getElementById("form3").style.display = "none";
  }
  if (people > 3) {
    document.getElementById("form4").style.display = "block";
  } else {
    document.getElementById("form4").style.display = "none";
  }
  if (people > 4) {
    document.getElementById("form5").style.display = "block";
  } else {
    document.getElementById("form5").style.display = "none";
  }
  if (people > 5) {
    document.getElementById("form6").style.display = "block";
  } else {
    document.getElementById("form6").style.display = "none";
  }
  if (people > 6) {
    document.getElementById("form7").style.display = "block";
  } else {
    document.getElementById("form7").style.display = "none";
  }
  if (people > 7) {
    document.getElementById("form8").style.display = "block";
  } else {
    document.getElementById("form8").style.display = "none";
  }
  if (people > 8) {
    document.getElementById("form9").style.display = "block";
  } else {
    document.getElementById("form9").style.display = "none";
  }
  if (people > 9) {
    document.getElementById("form10").style.display = "block";
  } else {
    document.getElementById("form10").style.display = "none";
  }
}

function readForm() { // Reads the data input
  var form0 = document.getElementById("form0");
  var people = form0.elements[0].value;
  var formResult = [];
  var form1 = document.getElementById("form1");
  var person1 = new Person(form1.elements[0].value, form1.elements[1].value, "#ffcccc");
  formResult.push(person1);

  var form2 = document.getElementById("form2");
  var person2 = new Person(form2.elements[0].value, form2.elements[1].value, "#ccffcc");
  formResult.push(person2);

  if (people > 2) {
    var form3 = document.getElementById("form3");
    var person3 = new Person(form3.elements[0].value, form3.elements[1].value, "#ccccff");
    formResult.push(person3);
  }

  if (people > 3) {
    var form4 = document.getElementById("form4");
    var person4 = new Person(form4.elements[0].value, form4.elements[1].value, "#ffffcc");
    formResult.push(person4);
  }

  if (people > 4) {
    var form5 = document.getElementById("form5");
    var person5 = new Person(form5.elements[0].value, form5.elements[1].value, "#ffebcc");
    formResult.push(person5);
  }

  if (people > 5) {
    var form6 = document.getElementById("form6");
    var person6 = new Person(form6.elements[0].value, form6.elements[1].value, "#f2e6d9");
    formResult.push(person6);
  }

  if (people > 6) {
    var form7 = document.getElementById("form7");
    var person7 = new Person(form7.elements[0].value, form7.elements[1].value, "#ebccff");
    formResult.push(person7);
  }

  if (people > 7) {
    var form8 = document.getElementById("form8");
    var person8 = new Person(form8.elements[0].value, form8.elements[1].value, "#ffccff");
    formResult.push(person8);
  }

  if (people > 8) {
    var form9 = document.getElementById("form9");
    var person9 = new Person(form9.elements[0].value, form9.elements[1].value, "#ccffff");
    formResult.push(person9);
  }

  if (people > 9) {
    var form10 = document.getElementById("form10");
    var person10 = new Person(form10.elements[0].value, form10.elements[1].value, "#e0ebeb");
    formResult.push(person10);
  }

  calculate(formResult);
}

function calculate(formResult) { // Calculates how much each person owes
  var text = "";
  var tot = 0;
  var people = formResult.length;
  for (var i=0;i<people;i++) {
    tot += parseInt(formResult[i].balance);
  }
  var perPerson = Math.floor(tot / people);
  for (var i=0;i<people;i++) {
    formResult[i].balance -= perPerson;
  }

  formResult.sort(function(a, b){return a.balance - b.balance}); // Sort through balance low to high

  var j;
  for (var i=0;i<people;i++) {
    if (formResult[i].balance < 0) {
      j = i + 1;
      while (formResult[i].balance < 0) {
        if (formResult[j].balance > 0) {
          text = text + formResult[i].owe(formResult[j]);
        }
        j += 1;
      }
    }
  }

  document.getElementById("result").innerHTML = text;
  window.scrollTo(0,document.body.scrollHeight);
}
