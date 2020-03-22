var tableElement = document.querySelector("table");
var headerElement = document.querySelector("header")
var header = new PageHeader(headerElement);
var table = new GradeTable(tableElement);
var app = new App(table, header);
app.start();
