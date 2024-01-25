import React from "react";
import UserData from "./UserData";

class AppClassComponenet extends React.Component{
    constructor(){
        super();
        let userValue ={
            name: "Kulthoom",
            position: "junior developer",
            age: 23
        }
        this.state = {...userValue}
        console.log("hello from constructor");
    }


    changeName = (name)=>{
        console.log("change name")
        this.setState({
            name
        })
    }
    render()
    {
        return ( 

            <>
            <UserData name={this.state.name} position={this.state.position} age={this.state.age}/>
            <button onClick={()=> this.changeName("Adel")}>change your name</button>
            <button onClick={()=> this.changeName("Ahmed")}>change your name</button>
            <h1>Hi it is {this.state.name} my age is {this.state.age} </h1>
            </>
        );
    }
}

export default AppClassComponenet;