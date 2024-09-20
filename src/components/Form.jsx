import React from 'react';
import '../styles/Form.css'; // Create a separate Form.css to avoid confusion with Footer.css

const Form = () => {
  return (
    <div className="form-container">
      <form>
        <label>Your Name</label>
        <input type="text" placeholder="Enter your name" required />
        
        <label>Email</label>
        <input type="email" placeholder="Enter your email" required />
        
        <label>Subject</label>
        <input type="text" placeholder="Enter the subject" required />
        
        <label>Message</label>
        <textarea rows="6" placeholder="Type your message here" required></textarea>
        
        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;
