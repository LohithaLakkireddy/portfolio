import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import SectionTitle from '../components/SectionTitle'
import {
  FaGithub,
  FaLinkedin,
  FaInstagram
} from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

const Contact = () => {
  const form = useRef()

  const [formValues, setFormValues] = useState({
    from_name: '',
    from_email: '',
    message: ''
  })

  const [errors, setErrors] = useState({})

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  const validate = () => {
    const newErrors = {}

    if (!formValues.from_name.trim()) {
      newErrors.from_name = 'Name is required'
    } else if (formValues.from_name.trim().length < 3) {
      newErrors.from_name = 'Name should be at least 3 characters'
    }

    if (!formValues.from_email.trim()) {
      newErrors.from_email = 'Email is required'
    } else if (!emailRegex.test(formValues.from_email.trim())) {
      newErrors.from_email = 'Please enter a valid email'
    }

    if (!formValues.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formValues.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const sendEmail = (e) => {
    e.preventDefault()

    if (!validate()) return

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_USER_ID
    ).then(
      () => {
        alert('Message sent successfully!')
        setFormValues({ from_name: '', from_email: '', message: '' })
        setErrors({})
        form.current.reset()
      },
      (error) => {
        alert('Something went wrong. Please try again.')
        console.error(error)
      }
    )
  }
  return (
    <section>
      <SectionTitle title="Contact Me" />

      <div className="flex flex-col md:flex-row gap-10">
        {/* Contact Form */}
             <form ref={form} onSubmit={sendEmail} className="space-y-6 bg-secondary p-6 rounded shadow-md max-w-xl mx-auto">
        {/* Name */}
        <div>
          <label htmlFor="from_name" className="block text-sm text-gray-300 mb-1">Name</label>
          <input
            type="text"
            id="from_name"
            name="from_name"
            value={formValues.from_name}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded bg-primary text-white border ${
              errors.from_name ? 'border-red-500' : 'border-gray-600'
            } focus:outline-accent`}
            placeholder="Your full name"
          />
          {errors.from_name && <p className="text-red-400 text-xs mt-1">{errors.from_name}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="from_email" className="block text-sm text-gray-300 mb-1">Email</label>
          <input
            type="text"
            id="from_email"
            name="from_email"
            value={formValues.from_email}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded bg-primary text-white border ${
              errors.from_email ? 'border-red-500' : 'border-gray-600'
            } focus:outline-accent`}
            placeholder="you@example.com"
          />
          {errors.from_email && <p className="text-red-400 text-xs mt-1">{errors.from_email}</p>}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm text-gray-300 mb-1">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formValues.message}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded bg-primary text-white border ${
              errors.message ? 'border-red-500' : 'border-gray-600'
            } focus:outline-accent`}
            placeholder="Let’s work together or just say hi..."
          ></textarea>
          {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
        </div>

        <button
          type="submit"
          className="bg-accent text-black font-semibold px-6 py-2 rounded hover:bg-blue-400 transition"
        >
          Send Message
        </button>
      </form>

        {/* Social Icons */}
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
    </section>
  )
}

export default Contact
