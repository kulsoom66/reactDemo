import React from "react";

class AppClassComponenet extends React.Component{
    constructor(){
        super();
        this.state ={
            name: "Kulthoom",
            age: 23
        }
    }

    render()
    {
        return (
            
        <h1>Hi it is {this.state.name} my age is {this.state.age} </h1>
        );
    }
}

export default AppClassComponenet;