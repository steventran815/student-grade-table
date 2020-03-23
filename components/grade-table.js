class GradeTable {
  constructor(tableElement) {
    this.tableElement = tableElement
  }
  updateGrades(grades) {
    var mainTable = document.getElementById("mainTable")
    $("#mainTable").empty();
    for (var i = 0; i < grades.length; i++) {
      // mainTable = document.createElement("tbody");
      var tableRow = document.createElement("tr");
      var name = document.createElement("td")
      name.textContent = grades[i].name;
      var course = document.createElement("td")
      course.textContent = grades[i].course;
      var grade = document.createElement("td")
      grade.textContent = grades[i].grade;

      tableRow.append(name, course, grade);
      mainTable.append(tableRow)
    }
  }
}
