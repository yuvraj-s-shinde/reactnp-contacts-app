import React from 'react';
//import logo from './logo.svg';
import ListContacts from './ListContacts'
import './App.css';


class App extends React.Component {
  state = {
    contacts: [
      {
        "id": "karen",
        "name": "Karen Isgrigg",
        "handle": "@karen_isgrigg",
        "avatarURL": "http://localhost:5001/karen.jpg"
      },
      {
        "id": "richard",
        "name": "Richard Kalehoff",
        "handle": "@richardkalehoff",
        "avatarURL": "http://localhost:5001/richard.jpg"
      },
      {
        "id": "tyler",
        "name": "Tyler McGinnis",
        "handle": "@tylermcginnis",
        "avatarURL": "http://localhost:5001/tyler.jpg"
      }
    ]
  };
  
  deleteContact = (contact_id) => {
        this.setState((prevState) => ({
          contacts: prevState.contacts.filter(contact => contact.id !== contact_id)  
        }))
  }
  
  render() {
    return (
        <div>
        <ListContacts contacts={this.state.contacts} onClick={this.deleteContact}/>
      </div>
    );
  }
}

export default App;
