class App {
  constructor(parentChildName) {
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
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
    console.log(grades)
  }
  start(){
    this.getGrades();
  }
}
