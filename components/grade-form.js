class GradeForm{
  constructor(formElement){
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formElement = formElement
    this.formElement.addEventListener("submit", this.handleSubmit)
  }
  onSubmit(createGrade){
    this.createGrade = createGrade
  }
  handleSubmit(submit){
    event.preventDefault();
    console.log("hi");
  }
}
