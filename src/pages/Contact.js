import React, { useState, useEffect } from "react";
import * as Icon from "react-feather";
import Sectiontitle from "../components/Sectiontitle";
import Layout from "../components/Layout";
import emailjs from 'emailjs-com';
import ReCAPTCHA from "react-google-recaptcha";


const Contact = () => {
  const recaptchaRef = React.createRef()
  const RECAPTCHA_KEY = process.env.REACT_APP_RECAPTCHA_KEY
  const SERVICE_ID = process.env.REACT_APP_EMAIL_SERVICE_ID
  const TEMPLATE_ID = process.env.REACT_APP_EMAIL_TEMPLATE_ID
  const USER_ID = process.env.REACT_APP_EMAIL_USER_ID
  const [phoneNumbers, setPhoneNumbers] = useState([])
  const [emailAddress, setEmailAddress] = useState([])
  const [address, setAddress] = useState([])
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [error, setError] = useState(false)
  const [message, setMessage] = useState("")
  const [isMounted, setIsMounted] = useState(false)
  const [hasCaptcha, setHasCaptcha] = useState(false)
  const [captchaValue, setCaptchaValue] = useState()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value)
    setHasCaptcha(true)
  }

  const sendEmail = () => {
    const params = {
      from_name: formdata.name,
      to_name: 'Bryant',
      subject: formdata.subject,
      message: formdata.message,
      email: formdata.email,
      'g-recaptcha-response': captchaValue
    }
    emailjs.send(SERVICE_ID,TEMPLATE_ID, params, USER_ID)
	.then((response) => {
	   console.log('SUCCESS!', response.status, response.text)
	}, (err) => {
	   console.log('FAILED...', err)
	})
  }

  const resetFormData = () => {
    setFormdata({
      name: "",
      email: "",
      subject: "",
      message: ""
    })
    setCaptchaValue('')
    setHasCaptcha(false)
    recaptchaRef.current.reset()
  }

  const submitHandler = (event) =>{
    event.preventDefault()
    if( !formdata.name ){
      setError(true)
      setMessage('Name is required')
    } else if( !formdata.email ){
      setError(true)
      setMessage('Email is required')
    } else if( !formdata.subject ){
      setError(true)
      setMessage('Subject is required')
    } else if( !formdata.message ){
      setError(true)
      setMessage('Message is required')
    } else {
      if(hasCaptcha) {
        setError(false)
        sendEmail()
        resetFormData()
        setMessage('You message has been sent!!!')
      } else {
        setMessage('Please verify that you are not a robot')
      }
    }
  }
  const handleChange = (event) => {
    setFormdata({
      ...formdata,
      [event.currentTarget.name] : event.currentTarget.value
    })
  }
  const numberFormatter = (number) =>{
    const phnNumber = number;
    return phnNumber;
  }

  const handleAlerts = () => {
    if(error && message){
      return (
        <div className="alert alert-danger mt-4">
          {message}
        </div>
      )
    } else if(!error && message){
      return (
        <div className="alert alert-success mt-4">
          {message}
        </div>
      )
    } else{
      return null;
    }
  }

  return (
    isMounted ? (
      <Layout>
        <div className="mi-contact-area mi-section mi-padding-top mi-padding-bottom">
          <div className="container">
            <Sectiontitle title="Contact Me"/>
                <div className="mi-contact-formwrapper">
                  <h4>Get In Touch</h4>
                  <form action="#" className="mi-form mi-contact-form" onSubmit={submitHandler}>
                    <div className="mi-form-field">
                      <label htmlFor="contact-form-name">Enter your name*</label>
                      <input onChange={handleChange} type="text" name="name" id="contact-form-name" value={formdata.name}/>
                    </div>
                    <div className="mi-form-field">
                      <label htmlFor="contact-form-email">Enter your email*</label>
                      <input onChange={handleChange} type="text" name="email" id="contact-form-email" value={formdata.email}/>
                    </div>
                    <div className="mi-form-field">
                      <label htmlFor="contact-form-subject">Enter your subject*</label>
                      <input onChange={handleChange} type="text" name="subject" id="contact-form-subject" value={formdata.subject}/>
                    </div>
                    <div className="mi-form-field">
                      <label htmlFor="contact-form-message">Enter your Message*</label>
                      <textarea onChange={handleChange} name="message" id="contact-form-message" cols="30" rows="6" value={formdata.message}></textarea>
                    </div>
                    <div className="mi-form-field">
                      <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey= {RECAPTCHA_KEY}
                        onChange={handleCaptchaChange}
                        theme='dark'
                      />
                    </div>
                    <div className="mi-form-field">
                      <button className="mi-button" type="submit">Send Mail</button>
                    </div>
                  </form>
                  {handleAlerts()}
                </div>
          </div>
        </div>
      </Layout>
    ) : null
  )
}

export default Contact
