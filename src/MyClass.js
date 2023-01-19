import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class MyClass extends Component {
    constructor(props){
        super(props);
        this.state={name:props.fname};
        this.setName=this.setName.bind(this);
        this.updateName=this.updateName.bind(this);
    }
    setName() {
        this.setState({name:"No name"});    
    }
    updateName = (event)=>{
        const userValue = event.target.value;
        this.setState({name:userValue}); 
        console.log(userValue);
    };

    render() {
        return (
            <div className='container'>
                <h2>MyClass</h2>
                <input  onChange={this.updateName}/>
                <p>Hello {this.state.name}</p>
                <Button onClick={this.setName}>Set to NoName</Button>
            </div>
        );
    }
}

export default MyClass;