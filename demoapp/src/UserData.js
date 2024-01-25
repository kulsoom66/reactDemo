

export default function UserData(props) { 
    console.log(props);
    return (
        <>
        <h2>Hello from React created by KS</h2>
        <h3>Your name is: {props.name}</h3>
        <h3>Your position is: {props.position}</h3>
        <h3>Your age is: {props.age}</h3>
        </>
    )

 }