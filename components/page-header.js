class PageHeader {
  constructor(headerElement) {
    this.headerElement = headerElement
  }
  updateAverage(newAverage) {
    console.log(newAverage);

    var averageGrade = document.getElementById("averageGrade");
    averageGrade.textContent = newAverage
  }
}
