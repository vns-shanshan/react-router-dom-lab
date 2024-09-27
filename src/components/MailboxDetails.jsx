import { useParams } from "react-router-dom";

const MailboxDetails = ({ mailboxes, letters }) => {
  const { mailboxId } = useParams();

  const selectedMailbox = mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId)
  );
  //   console.log(selectedMailbox);

  const selectedLetters = letters.filter(
    (letter) => letter.mailboxId === Number(mailboxId)
  );

  if (!selectedMailbox) return <h1>Mailbox Not Found!</h1>;

  return (
    <>
      <h1>Mailbox {selectedMailbox._id}</h1>

      <h2>Details</h2>

      <p>Boxholder: {selectedMailbox.boxholder}</p>
      <p>Box Size: {selectedMailbox.boxSize}</p>

      {selectedLetters.length > 0 && (
        <>
          <h2>Letters</h2>
          <ul>
            {selectedLetters.map((letter, index) => (
              <li key={index}>
                <p>Dear {letter.recipient},</p>
                <p>{letter.message}</p>
              </li>
            ))}
            <li></li>
          </ul>
        </>
      )}
    </>
  );
};

export default MailboxDetails;
