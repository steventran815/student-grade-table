class App {
  constructor(gradeTable, pageHeader, gradeForm) {

    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.handleGetGradesError = this.handleGetGradesError.bind(this);

    this.handleDeleteGradeError = this.handleDeleteGradeError.bind(this);
    this.handleDeleteGradeSuccess = this.handleCreateGradeSuccess.bind(this);


    this.deleteGrade = this.deleteGrade.bind(this);
    this.getGrades = this.getGrades.bind(this);

    this.createGrade = this.createGrade.bind(this);
    this.handleCreateGradeError = this.handleCreateGradeError.bind(this);
    this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this);

    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.gradeForm = gradeForm;
  }
  getGrades() {
    $.ajax({
      method: "GET",
      url: "https://sgt.lfzprototypes.com/api/grades",
      headers: { "x-access-token": "sdRRrF00" },
      success: this.handleGetGradesSuccess,
      error: this.handleGetGradesError
    })
  }
  handleGetGradesError(error) {
    console.error(error);
  }
  handleGetGradesSuccess(grades) {
    this.gradeTable.updateGrades(grades)

    var gradesSum = 0;
    for(var i = 0; i < grades.length; i++) {
      gradesSum += grades[i].grade;
      var gradeAverage = (gradesSum/(grades.length))
    }
    this.pageHeader.updateAverage(gradeAverage)
  }
  start() {
    this.getGrades();
    this.gradeForm.onSubmit(this.createGrade)
    this.gradeTable.onDeleteClick(this.deleteGrade);
  }
  createGrade(name,course,grade){
    console.log(name,course,grade);

    $.ajax({
      method:"POST",
      url: "https://sgt.lfzprototypes.com/api/grades",
      data: {
        "name": name,
        "course": course,
        "grade": grade
      },
      headers: { "x-access-token": "sdRRrF00" },
      success: this.handleCreateGradeSuccess,
      error: this.handleCreateGradeError
    })
  }
  handleCreateGradeError(error){
    console.error(error);
  }
  handleCreateGradeSuccess(){
  this.getGrades()
  }
  deleteGrade(id){
    console.log(id);
    $.ajax ({
      method:"DELETE",
      url: "https://sgt.lfzprototypes.com/api/grades/"+id,
      headers: { "x-access-token": "sdRRrF00" },
      success: this.handleDeleteGradeSuccess,
      error: this.handleDeleteGradeError
    })
  }
  handleDeleteGradeError(error) {
    console.error(error);
  }
  handleDeleteGradeSuccess() {
    this.getGrades()
  }
}
