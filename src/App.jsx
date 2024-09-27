import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import NavBar from "./components/NavBar";
import MailboxList from "./components/MailboxList";
import MailboxDetails from "./components/MailboxDetails";
import MailboxForm from "./components/MailboxForm";

const initialState = [{ _id: 1, boxSize: "Small", boxholder: "Alex" }];

const App = () => {
  const [mailboxes, setMailboxes] = useState(initialState);

  function addBox(form) {
    form._id = mailboxes.length + 1;
    form.boxSize = form.boxSize.charAt(0).toUpperCase() + form.boxSize.slice(1);

    const newMailboxes = [...mailboxes, form];

    setMailboxes(newMailboxes);
  }

  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<h1>Post Office</h1>} />

        <Route
          path="/mailboxes"
          element={<MailboxList mailboxes={mailboxes} />}
        />
        <Route
          path="/mailboxes/:mailboxId"
          element={<MailboxDetails mailboxes={mailboxes} />}
        />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />

        <Route path="*" element={<h1>Mailbox Not Found!</h1>} />
      </Routes>
    </>
  );
};

export default App;
