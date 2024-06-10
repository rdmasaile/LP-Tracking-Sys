import { Component } from 'react';
import Message from "../Message";

class View extends Component {
    constructor(props) {
        super(props);
        this.currentComponent= null
        this.parent = document.createElement("div")
        this.onclick = this.onClick.bind(this)
        this.update = this.update.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
        this.componentDidUpdate = this.componentDidUpdate.bind(this)
    }
    onClick = (id)=>{
        
    }
    state = {  }
    update(data,comp){
        /*this.currentComponent = "p"
        this.parent.appendChild(this.currentComponent)*/
        this.componentDidMount(data);
        console.log("um in view")
    }
    componentDidMount(data){
        document.title = <Message message={data} type='good' onClick={this.onClick}/>
    }
    componentDidUpdate(data){
        document.title = <Message message={data} type='good' onClick={this.onClick}/>
    }
    render() { 
        return ( 
            <>
                {document.title}
            </>
         );
    }
}
 
export default View;