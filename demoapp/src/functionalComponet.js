import { useEffect, useState } from "react";
import UserData from "./UserData";



export default function FunctionalComponent() {

    //1. State --> set, get ==> useState()
    //2. Lifecycle:
    // const [Name, setName] = useState("Ali")
    // const [position, setPosition] = useState("softe")
    // const [age, setAge] = useState("23")
    const [UserValue, setUserValue] = useState(
        {
            name: "Ali",
            age: 23,
            position: "Soft Eng"

        }
    );

    useEffect(() => {
        console.log("componet");
    });


    const changeName = (name) => {
        setUserValue({
            ...UserValue,
            name
        });
    }
    let conditionalRendering = "null";
    let flag = false;
    return (
        <>
        {conditionalRendering ??    <UserData name={UserValue.name} position={UserValue.position} age={UserValue.age} />}
        {flag? <UserData name={UserValue.name} position={UserValue.position} age={UserValue.age} /> :
        <h1>no Data available</h1>}
            <UserData name={UserValue.name} position={UserValue.position} age={UserValue.age} />
            <button onClick={() => changeName("Adel")}>change your name</button>
            <button onClick={() => changeName("Ahmed")}>change your name</button>
        </>
    );

}