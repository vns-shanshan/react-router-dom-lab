import { useParams } from "react-router-dom";

const MailboxDetails = ({ mailboxes }) => {
  const { mailboxId } = useParams();

  const selectedMailbox = mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId)
  );
  //   console.log(selectedMailbox);

  if (!selectedMailbox) return <h1>Mailbox Not Found!</h1>;

  return (
    <>
      <h1>Mailbox {selectedMailbox._id}</h1>

      <h2>Details</h2>

      <p>Boxholder: {selectedMailbox.boxholder}</p>
      <p>Box Size: {selectedMailbox.boxSize}</p>
    </>
  );
};

export default MailboxDetails;
