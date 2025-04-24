import { useRef } from 'react'
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

  const sendEmail = (e) => {
    e.preventDefault()
     // 🔍 Validate the form using built-in browser API
    if (!form.current.checkValidity()) {
      form.current.reportValidity() // show native validation tooltips
      return
    }
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_USER_ID
    ).then(
      () => {
        alert('Message sent successfully!')
        form.current.reset()
      },
      (error) => {
        alert('Something went wrong. Try again')
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
        >
          <div>
            <label className="block text-sm text-gray-300 mb-1">Name</label>
            <input
              type="text"
              id="from_name"
              name="from_name"
              required
              placeholder="Your full name"
              pattern="^[A-Za-z\s]{3,}$"
              title="Name must contain only letters and spaces, min 3 characters"
              className="w-full px-4 py-2 rounded bg-primary text-white border border-gray-600 focus:outline-accent"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-300 mb-1">Email</label>
            <input
              type="text"
              id="from_email"
              name="from_email"
              required
              placeholder="you@example.com"
              pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              title="Enter a valid email like name@example.com"
              className="w-full px-4 py-2 rounded bg-primary text-white border border-gray-600 focus:outline-accent focus:invalid:border-red-500"
              autoComplete="email"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-300 mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              minLength="10"
              maxLength="500"
              placeholder="Let’s work together or just say hi..."
              title="Message should be between 10 and 500 characters"
              className="w-full px-4 py-2 rounded bg-primary text-white border border-gray-600 focus:outline-accent"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-accent text-black font-semibold px-6 py-2 rounded hover:bg-blue-400 transition flex items-center gap-2"
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
