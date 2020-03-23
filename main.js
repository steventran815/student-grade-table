var tableElement = document.querySelector("table");
var headerElement = document.querySelector("header");
var formElement = document.getElementById("studentGradeForm");

var form = new GradeForm(formElement)
var header = new PageHeader(headerElement);
var table = new GradeTable(tableElement);

var app = new App(table, header, form);
app.start();
