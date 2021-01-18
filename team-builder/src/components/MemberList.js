import React from 'react';
import MemberCard from './MemberCard';

export default function MemberList (props){
    console.log(props.members)
    return (
        <div>
            {props.members.map(member=>(
                    <MemberCard member={member} key={member.name}/>
             )    
            )}        
        </div>
    )
}