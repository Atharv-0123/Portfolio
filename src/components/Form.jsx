import React from 'react';
import '../styles/Form.css'; // Assuming Form.css exists

const Form = () => {
  const accessKey = process.env.REACT_APP_WEB3FORMS_ACCESS_KEY;
  return (
    <div className="form-container">
      <form action="https://api.web3forms.com/submit" method="POST">
  <input type="hidden" name="access_key" value={accessKey} />
  
  <label>Your Name</label>
  <input type="text" placeholder="Enter your name" name="name" required />

  <label>Email</label>
  <input type="email" placeholder="Enter your email" name="email" required />

  <label>Subject</label>
  <input type="text" placeholder="Enter the subject" name="subject" required />

  <label>Message</label>
  <textarea rows="6" placeholder="Type your message here" name="msg" required></textarea>

  {/* HoneyPot spam detection */}
  <input type="checkbox" name="botcheck" className="hidden" />

  <button type="submit" className="btn">Submit</button>
</form>

    </div>
  );
};

export default Form;