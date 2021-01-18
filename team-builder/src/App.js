import logo from './logo.svg';
import React, {useState} from 'react';
import MemberList from './components/MemberList';
import Form from './components/Form';
import './App.css';

function App() {
    const members = [
        {name: 'Anthony Martial',
          email: 'anthonymartial9@manutd.com',
          role: 'Frontend Engineer',
          nationality: 'France'},
        {
            name: 'Marcus Rashford',
            email: 'marcusrashford10@manutd.com',
            role: "Frontend Engineer",
            nationality: "England"
        },
        {
            name: 'Mason Greenwood',
            email: 'masongreenwood11@manutd.com',
            role: 'Designer',
            nationality: 'England'
        },
        {
            name: 'Bruno Fernandes',
            email: 'brunofernandez18@manutd.com',
            role: 'Team Lead',
            nationality: 'Portugal',
        },
        {
            name: 'Eric Bailly',
            email: 'Ericbailly3@manutd.com',
            role: 'Backend Engineer',
            nationality: 'Ivory Coast'
        }
    ] 
    const [memberList, setMemberList] = useState(members);
    const addNewMember = member=> {
        const newMember = {
            name: member.name,
            email: member.email,
            role: member.role,
            nationality: member.nationality

        };
        setMemberList([...memberList, newMember]);
    };
    
  return (
    <div className="App">
      <header className="App-header">
        <MemberList members={memberList}/>
        <Form addNewMember={addNewMember}/>
      </header>
    </div>
  );
}

export default App;
