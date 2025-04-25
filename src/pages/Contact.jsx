import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import SectionTitle from '../components/SectionTitle'
import { ToastContainer, toast } from 'react-toastify'
import {
  FaGithub,
  FaLinkedin,
  FaInstagram
} from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

const Contact = () => {
  const form = useRef()
  const [nameError, setNameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [messageError, setMessageError] = useState('')

  const validateForm = (formData) => {
    let isValid = true
    const name = formData.get('from_name')
    const email = formData.get('from_email')
    const message = formData.get('message')

    // Name validation
    if (!name.trim()) {
      setNameError('Name is required')
      isValid = false
    } else if (/\d/.test(name)) {
      setNameError('Name should not contain numbers')
      isValid = false
    } else {
      setNameError('')
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email.trim()) {
      setEmailError('Email is required')
      isValid = false
    } else if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address')
      isValid = false
    } else {
      setEmailError('')
    }

    // Message validation
    if (message.trim().length < 2) {
      setMessageError('Message must be at least 2 characters')
      isValid = false
    } else if (message.length > 500) {
      setMessageError('Message must be less than 500 characters')
      isValid = false
    } else {
      setMessageError('')
    }

    return isValid
  }

  const sendEmail = (e) => {
    e.preventDefault()
    const formData = new FormData(form.current)

    if (!validateForm(formData)) return

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_USER_ID
    ).then(
      () => {
        toast.success('Message sent successfully!', {
          position: 'top-right',
          autoClose: 3000,
          theme: 'dark',
        })
        form.current.reset()
        // Clear errors after successful submission
        setNameError('')
        setEmailError('')
        setMessageError('')
      },
      (error) => {
        toast.error('Something went wrong. Try again!', {
          position: 'top-right',
          autoClose: 3000,
          theme: 'dark',
        })
        console.error(error)
      }
    )
  }

  return (
    <section>
      <SectionTitle title="Contact Me" />

      <div className="flex flex-col md:flex-row gap-10">
        {/* Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex-1 space-y-4 bg-secondary p-6 rounded shadow-md"
          action="#"
          noValidate
        >
          <div>
            <label className="block text-sm text-gray-300 mb-1">Name</label>
            <input
              type="text"
              id="from_name"
              name="from_name"
              placeholder="Your full name"
              className="w-full px-4 py-2 rounded bg-primary text-white border border-gray-600 focus:outline-accent"
            />
            {nameError && <p className="text-red-300 text-sm mt-1">{nameError}</p>}
          </div>
          <div>
            <label className="block text-sm text-gray-300 mb-1">Email</label>
            <input
              type="email"
              id="from_email"
              name="from_email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded bg-primary text-white border border-gray-600 focus:outline-accent"
            />
            {emailError && <p className="text-red-300 text-sm mt-1">{emailError}</p>}
          </div>
          <div>
            <label className="block text-sm text-gray-300 mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Let’s work together or just say hi..."
              className="w-full px-4 py-2 rounded bg-primary text-white border border-gray-600 focus:outline-accent"
            ></textarea>
            {messageError && <p className="text-red-300 text-sm mt-1">{messageError}</p>}
          </div>
          <button
            type="submit"
            className="bg-accent text-black font-semibold px-6 py-2 rounded hover:bg-blue-400 transition flex items-center gap-2"
          >
            Send Message
          </button>
        </form>

        {/* Social Icons (remaining code stays the same) */}
        <div className="flex-1 flex flex-col items-center justify-center gap-6">
          <h3 className="text-white text-lg font-semibold mb-2">Connect with me</h3>
          <div className="flex gap-6 flex-wrap justify-center">
            <a
              href="https://github.com/LohithaLakkireddy"
              target="_blank"
              className="social-icon"
              title="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/lohitha-lakkireddy/"
              target="_blank"
              className="social-icon"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://leetcode.com/u/Lohitha_lr/"
              target="_blank"
              className="social-icon"
              title="LeetCode"
            >
              <SiLeetcode />
            </a>
            <a
              href="https://www.instagram.com/lohitha.lakkireddy/"
              target="_blank"
              className="social-icon"
              title="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
          <p className="text-sm text-gray-400 text-center mt-4">
            You can also reach me at:<br />
            <span className="text-white font-medium">lohithalakkireddy2@gmail.com</span>
          </p>
        </div>
      </div>
      <ToastContainer />
    </section>
  )
}

export default Contact