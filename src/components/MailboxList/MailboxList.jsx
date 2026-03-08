import { link } from 'react-router-dom'
import MailboxList from './components/MailboxList/MailboxList.css';

function MailboxList(props) {
    return (
    <main>
      <h2>Mailboxes</h2>
      <div className="mailbox-grid">
        {props.mailboxes.map((mailbox) => (
          <Link 
            to={`/mailboxes/${mailbox._id}`} 
            key={mailbox._id}
            className="mailbox-square"
          >
            <div className="mailbox-box">
              <span className="mailbox-id">Box #{mailbox._id}</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
    )
}

export default MailboxList;