import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Heroimg2 from '../components/Heroimg2'
import Form from '../components/Form'

const Contact = () => {
  return (
    <div>
      <div>
      <Navbar />
      <Heroimg2 heading="CONTACT" text="Let's have a chat"/>
      <div className='contact-container'>
          <Form/>
      </div>
      <Footer />
    </div>
    </div>
  )
}

export default Contact