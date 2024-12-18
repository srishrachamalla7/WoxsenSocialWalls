import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export function Contact() {
  const { theme } = useTheme();

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      value: 'info@woxsen.edu.in',
      action: 'mailto:info@woxsen.edu.in'
    },
    {
      icon: Phone,
      title: 'Call Us',
      value: '+91 XXXXXXXXXX',
      action: 'tel:+91XXXXXXXXXX'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      value: 'Woxsen University, Hyderabad',
      action: 'https://maps.google.com/?q=Woxsen+University'
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <div className="h-1 w-24 theme-gradient rounded-full mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.action}
              className="p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all text-center group"
            >
              <method.icon className="w-8 h-8 mx-auto mb-4 theme-color" />
              <h3 className="font-semibold mb-2">{method.title}</h3>
              <p className="text-gray-600">{method.value}</p>
            </a>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-opacity-50 theme-ring"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-opacity-50 theme-ring"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-opacity-50 theme-ring"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-opacity-50 theme-ring"
            ></textarea>
            <button className="w-full py-3 theme-gradient text-white font-medium rounded-lg">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}