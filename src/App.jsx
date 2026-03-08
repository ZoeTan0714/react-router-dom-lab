// src/App.jsx
import { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.jsx';
import MailboxList from './components/MailboxList/MailboxList.jsx';
import MailboxForm from './components/MailboxForm/MailboxForm.jsx';
import MailboxDetails from './components/MailboxDetails/MailboxDetails.jsx';

const App = () => {
  const [mailboxes, setMailboxes] = useState ([]);
  const navigate = useNavigate();

  const addBox = (formData) => {
    const newMailbox = {
      _id: mailboxes.length + 1,
      boxSize: formData.boxSize,
      boxOwner: formData.boxOwner
    };

    setMailboxes([...mailboxes, newMailbox]);
    navigate('/mailboxes')
  };

  return (
      <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element = {<MailboxList mailboxes={mailboxes} title="Mailbox List"/>} />
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} title="All Mailboxes"/>} />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox}/>} />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes}/>} />
      </Routes>
    </div>
  )
};

export default App;
