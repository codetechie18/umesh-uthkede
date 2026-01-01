import { Mail, Phone, MapPin, Send, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('This is a static form. No data is being submitted or stored.');
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-blue-600" />,
      title: 'Office Address',
      details: ['123 Government Building', 'Capital City, State 12345'],
    },
    {
      icon: <Phone className="h-6 w-6 text-blue-600" />,
      title: 'Phone',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
    },
    {
      icon: <Mail className="h-6 w-6 text-blue-600" />,
      title: 'Email',
      details: ['info@politicalvision.gov', 'contact@politicalvision.gov'],
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We value your input and welcome your questions, feedback, and suggestions
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-shadow"
              >
                <div className="flex justify-center mb-4">{info.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600">
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Your voice matters. Whether you have questions about our policies,
                suggestions for improvement, or concerns you'd like to share, we're here
                to listen.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our team is committed to responding to all inquiries and ensuring that
                every citizen has access to their representatives.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mb-6">
                <h3 className="font-bold text-gray-900 mb-2">Office Hours</h3>
                <p className="text-gray-700">Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p className="text-gray-700">Saturday: 10:00 AM - 2:00 PM</p>
                <p className="text-gray-700">Sunday: Closed</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-white p-3 rounded-full shadow-md hover:shadow-lg hover:bg-blue-50 transition-all"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-6 w-6 text-blue-600" />
                  </a>
                  <a
                    href="#"
                    className="bg-white p-3 rounded-full shadow-md hover:shadow-lg hover:bg-blue-50 transition-all"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-6 w-6 text-blue-400" />
                  </a>
                  <a
                    href="#"
                    className="bg-white p-3 rounded-full shadow-md hover:shadow-lg hover:bg-pink-50 transition-all"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-6 w-6 text-pink-600" />
                  </a>
                  <a
                    href="#"
                    className="bg-white p-3 rounded-full shadow-md hover:shadow-lg hover:bg-red-50 transition-all"
                    aria-label="YouTube"
                  >
                    <Youtube className="h-6 w-6 text-red-600" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </button>

                <p className="text-sm text-gray-500 mt-4 text-center">
                  Note: This is a static form for display purposes only. No data is collected.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">We're Here to Serve</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your elected representatives work for you. Don't hesitate to reach out with
            your concerns, ideas, or questions. Together, we can build a better community.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Contact;
