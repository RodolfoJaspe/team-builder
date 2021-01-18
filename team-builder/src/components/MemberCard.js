import React from 'react';

export default function MemberCard (props){
    console.log(props.member)
    const { name, email, role, nationality} = props.member;
    return (
        <div>
            <h3>{name}</h3>
            <p>{email}</p>
            <p>{role}</p>
            <p>{nationality}</p>
        </div>
    )
}