export default class Marks{
    constructor(test1,test2,exam){
        this.test1 = test1
        this.test2 = test2
        this.exam = exam
    }
    setTest1(test1){
        this.test1 = test1
    }
    setTest2(test2){
        this.test2 = test2
    }
    setExam(exam){
        this.exam = exam
    }
    getCoarseWork(){
        return (0.4 * (this.test1 + this.test2))
    }
    getExamMark(){
        return (0.6 * this.exam)
    }
    getfinalMark(){
        return (this.getCoarseWork() + this.getExamMark())
    }
}