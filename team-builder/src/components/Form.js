import React, {useState} from 'react';


export default function Form (props){
    const [newMember, setNewMember] = useState({name: "",email:""})
    const handleChanges = (event) => {
        console.log(event.target.name);
        console.log(event.target.value);

        setNewMember({...newMember, [event.target.name]: event.target.value})
    };
    const submitForm = event => {
        event.preventDefault();
        props.addNewMember(newMember);

        setNewMember({name: "",email:""});
        
    }
    return (
        <form onSubmit={submitForm}>
            <label htmlFor="name">Name</label>
            <input name="name" id="name" type="text" placeholder="Enter Name" onChange={handleChanges} value={newMember.name} />
            <input name="email" id="email" type="text" placeholder="Enter email" onChange={handleChanges} value={newMember.email} />
            <input name="role" id="role" type="text" placeholder="Enter Role" onChange={handleChanges} value={newMember.role} />
            <input name="nationality" id="nationality" type="text" placeholder="Enter Nationality" onChange={handleChanges} value={newMember.nationality} />
            <button type='submit'>Add Member</button>
        </form>
    )
}