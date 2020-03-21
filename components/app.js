class App {
  constructor(gradeTable, pageHeader) {
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
  }
  getGrades(){
    $.ajax({
      method: "GET",
      url: "https://sgt.lfzprototypes.com/api/grades",
      headers: { "x-access-token": "sdRRrF00"},
      success: this.handleGetGradesSuccess,
      error: this.handleGetGradesError
    })
  }
  handleGetGradesError(error){
    console.error(error);
  }
  handleGetGradesSuccess(grades){
    this.gradeTable.updateGrades(grades)

    var gradesSum = 0;
    for(var i = 0; i < grades.length; i++) {
      gradesSum += grades[i].grade;
      var gradeAverage = (gradesSum/(grades.length))
    }
    this.pageHeader.updateAverage(gradeAverage)
  }
  start(){
    this.getGrades();
  }
}
