import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import NavBar from "./components/NavBar";
import MailboxList from "./components/MailboxList";
import MailboxDetails from "./components/MailboxDetails";
import MailboxForm from "./components/MailboxForm";
import LetterForm from "./components/LetterForm";

const initialState = [{ _id: 1, boxSize: "Small", boxholder: "Alex" }];
const initialLettersState = [
  {
    mailboxId: 1,
    recipient: "Jordan",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

const App = () => {
  const [mailboxes, setMailboxes] = useState(initialState);
  const [letters, setLetters] = useState(initialLettersState);

  function addBox(form) {
    form._id = mailboxes.length + 1;
    form.boxSize = form.boxSize.charAt(0).toUpperCase() + form.boxSize.slice(1);

    const newMailboxes = [...mailboxes, form];

    setMailboxes(newMailboxes);
  }

  function addLetter(letterForm) {
    const newLetters = [...letters, letterForm];

    setLetters(newLetters);
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
          element={<MailboxDetails mailboxes={mailboxes} letters={letters} />}
        />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />
        <Route
          path="/new-letter"
          element={<LetterForm addLetter={addLetter} mailboxes={mailboxes} />}
        />

        <Route path="*" element={<h1>Mailbox Not Found!</h1>} />
      </Routes>
    </>
  );
};

export default App;
