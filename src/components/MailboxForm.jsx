import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MailboxForm = ({ addBox }) => {
  const [form, setForm] = useState({
    boxholder: "",
    boxSize: "small",
  });
  const navigate = useNavigate();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    addBox(form);

    setForm({
      boxholder: "",
      boxSize: "small",
    });

    navigate("/mailboxes");
  }

  return (
    <>
      <h1>New Mailbox</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="boxholder">Enter a Boxholder: </label>
        <input
          type="text"
          name="boxholder"
          id="boxholder"
          placeholder="Boxholder name"
          value={form.boxholder}
          onChange={handleChange}
        />

        <label htmlFor="boxSize">Select a Box Size:</label>
        <select
          name="boxSize"
          id="boxSize"
          value={form.boxSize}
          onChange={handleChange}
        >
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default MailboxForm;
