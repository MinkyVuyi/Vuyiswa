import React from 'react';

export default function Footer() {
  return (
    <>
    <div className="contact">
      <h3>Contact Form</h3>
      </div>
      <div className="form">
        <form action="https://formsubmit.co/dialevuyiswa@gmail.com" method="POST">
          <label htmlFor="subject">Subject:</label>
          <select id="subject" name="subject" required>
            <option value="subject">Choose a Subject</option>
            <option value="job">Job Opportunity</option>
            <option value="proposal">Proposal Collaboration</option>
            <option value="general">General Queries</option>
          </select>
          <label htmlFor="title">Title:</label>
          <select id="title" name="title" size="0.5vw" required>
            <option value="title">Title</option>
            <option value="mr">Mr</option>
            <option value="mrs">Mrs</option>
            <option value="ms/miss">Ms/Miss</option>
          </select>
          <div className="flex-form">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="user_name" size="3vw" required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" size="3.5vw" required />
            <label htmlFor="message">Message:</label>
            <textarea className="msg" name="message" id="message"></textarea>
          </div>
          <br />
          <br />
          <button className="submission" type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
