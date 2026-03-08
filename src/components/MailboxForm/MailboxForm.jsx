import { useState } from 'react';

function MailboxForm (props) {
    const [formData, setFormData] = useState({
        boxOwner: '',
        boxSize: ''
    })

    const handleChange = (event) => {
      if (event && event.target) {
        setFormData ({
            ...formData,
            [event.target.name]: event.target.value
        })
      }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.addBox(formData);
    }

    return (
    <main>
      <h2>New Mailbox</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="boxOwner">Box Owner:</label>
          <input
            type="text"
            id="boxOwner"
            name="boxOwner"
            value={formData.boxOwner}
            onChange={handleChange}
            required
          />
        </div>
        
        <div>
          <label htmlFor="boxSize">Box Size:</label>
          <select
            id="boxSize"
            name="boxSize"
            value={formData.boxSize}
            onChange={handleChange}
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        
        <button type="submit">Create Mailbox</button>
      </form>
    </main>
    )
}

export default MailboxForm;