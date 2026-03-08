import { useParams } from 'react-router-dom' 

function MailboxDetails (props) {
    const {mailboxId} = useParams();

    const selectedBox = props.mailboxes.find(
        (mailbox) => mailbox.id === Number(mailboxId)
    )

    return (
        <main>
            <h2>Mailbox Details</h2>
            {selectedBox ? (
                <div>
                <p><strong>ID:</strong> {selectedBox._id}</p>
                <p><strong>Size:</strong> {selectedBox.boxSize}</p>
                <p><strong>Owner:</strong> {selectedBox.boxOwner}</p>
                </div>
            ) : (
                <p className="not-found">Mailbox not found</p>
            )}
        </main>
    )
}

export default MailboxDetails; 