import registerApp from './app/index';

registerApp();


class Parent {
    state = {
      book:[],
      question:'',
      op1:'',
      op2:'',
      op3:'',
      op4:'',
      answer:0
    }
  
    addQuestion = (question) => {
      let q = [...this.state.book];
      this.setState({
        book: q.push(question)
      })
    }
  
    render(){
      return   <Submit onPress={() => {
        let options = [this.state.op1,this.state.op2,this.state.op3]
        this.addQuestion({
          question:this.state.question,
          answer:this.state.answer,
          options
        });
  
        this.setState({
          op1:'',op2:'',op3:'',op4:'',answer:0
        })
        
      }}/>
  
     
    }
  }
  