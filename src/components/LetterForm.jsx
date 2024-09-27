import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LetterForm = ({ addLetter, mailboxes }) => {
  const [letterForm, setLetterForm] = useState({
    mailboxId: mailboxes[0]._id,
    recipient: "",
    message: "",
  });
  const navigate = useNavigate();

  function handleChange(e) {
    setLetterForm({
      ...letterForm,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newLetter = {
      ...letterForm,
      mailboxId: parseInt(letterForm.mailboxId),
    };
    addLetter(newLetter);

    setLetterForm({
      mailboxId: mailboxes[0]._id,
      recipient: "",
      message: "",
    });

    navigate(`/mailboxes/${letterForm.mailboxId}`);
  }

  return (
    <>
      <h1>New Letter</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="mailbox-dropdown">Select a Mailbox</label>
        <select
          name="mailboxId"
          id="mailbox-dropdown"
          value={letterForm.mailboxId}
          onChange={handleChange}
        >
          {mailboxes.map((mailbox) => (
            <option key={mailbox._id} value={mailbox._id}>
              Mailbox {mailbox._id}
            </option>
          ))}
        </select>

        <label htmlFor="recipient">Recipient</label>
        <input
          type="text"
          name="recipient"
          id="recipient"
          placeholder="Recipient name"
          value={letterForm.recipient}
          onChange={handleChange}
        />

        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          placeholder="Message"
          value={letterForm.message}
          onChange={handleChange}
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default LetterForm;
