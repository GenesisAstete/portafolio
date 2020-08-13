import React, { Fragment } from 'react'

const Contact = () => {
  
/*   // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  const submitForm = (e) =>{
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name, company, email, message);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(() =>{
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  const getInputVal = (id) =>{
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
 const saveMessage = (name, company, email, message) =>{
    const newMessageRef = messagesRef.push();
      newMessageRef.set({
      name: name,
      company:company,
      email:email,
      message:message
    });
  } */


    return (
        <Fragment>
            <section className="section-4" id="section-4">
            <h1 className="section-heading section-4-heading">Contáctame</h1>
                <form className="contact-form center">
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Empresa" />
                    <input type="email" placeholder="Email" />
                    <textarea placeholder="Message"></textarea>
                    <input type="submit" value="Enviar" className="contact-form-btn" />
                </form>
            </section>
            <footer className="section-5 center">
            <div className="social-media">
            <a href="https://github.com/GenesisAstete" className="social-media-link">
                <i className="fab fa-github-square"></i>
            </a>
            <a href="https://www.linkedin.com/in/genesis-macarena-astete-ascencio-66b4031b1/" className="social-media-link">
                <i className="fa fa-linkedin-square"></i>
            </a>
            </div>
        </footer>
      </Fragment>
    )
}

export default Contact
