import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-blue-950">
      <h1 className="text-black text-3xl font-bold mb-4">Contact Us</h1>
      <form className="flex flex-col w-full max-w-md text-black">
        <input
          type="text"
          placeholder="Your Name"
          className="mb-4 p-2 border rounded"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="mb-4 p-2 border rounded"
          required
        />
        <textarea
          placeholder="Your Message"
          className="mb-4 p-2 border rounded"
          rows={4}
          required
        />
        <button className="px-4 py-2 bg-orange-300 text-black rounded hover:bg-orange-400 transition">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
