class GradeTable {
  constructor(tableElement, noGradesElement) {
    this.tableElement = tableElement
    this.noGradesElement = noGradesElement
  }
  updateGrades(data){
    console.log(data)

    var noGrades = document.getElementById("noGradesRecorded");

    if (!data[0]) {
      noGrades.className ="d-inline"
    } else if (data[0]) {
      noGrades.className = "d-none"
    }


    var mainTable = document.getElementById("mainTable")
    $("#mainTable").empty();
    for (var i = 0; i < data.length; i++) {
      var tableRow = this.renderGradeRow(data[i],this.deleteGrade)
      mainTable.append(tableRow)
    }
  }
  onDeleteClick(deleteGrade){
    this.deleteGrade = deleteGrade;
  }
  renderGradeRow(data,deleteGrade){
    var tableRow = document.createElement("tr");
    var name = document.createElement("td")
    var course = document.createElement("td")
    var grade = document.createElement("td")
    var deleteOperation = document.createElement("td");
    var deleteButton = document.createElement("button");
    name.textContent = data.name;
    course.textContent = data.course;
    grade.textContent = data.grade;
    deleteButton.textContent = "DELETE";

    deleteButton.classList.add("btn", "btn-danger");
    deleteButton.addEventListener("click", function() {
      deleteGrade(data.id)
    });

    deleteOperation.appendChild(deleteButton);
    tableRow.appendChild(name);
    tableRow.appendChild(course);
    tableRow.appendChild(grade);
    tableRow.appendChild(deleteOperation);
    return tableRow
  }
}
