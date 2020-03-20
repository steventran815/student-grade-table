var tableElement = document.querySelector("table");
var headerElement = document.querySelector("header")
var table = new GradeTable(tableElement);
var app = new App(table, headerElement);
app.start();
