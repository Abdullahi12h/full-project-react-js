 function Contact() {
  return (
    <section className="py-16 px-6 text-center bg-gray-100">
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <form 
        action="mailto:abdullahidacad28@gmail.com" 
        method="POST" 
        className="max-w-lg mx-auto bg-white shadow-md p-6 rounded space-y-4"
      >
        <input 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          className="w-full border px-4 py-2 rounded"
          required
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          className="w-full border px-4 py-2 rounded"
          required
        />
        <textarea 
          name="message" 
          placeholder="Your Message" 
          rows="4" 
          className="w-full border px-4 py-2 rounded"
          required
        />
        <button 
          type="submit" 
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
        >
          Send Message
        </button>
      </form>

      <div className="mt-6 space-x-6">
        <a 
          href="https://wa.me/252613213138" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
        >
          WhatsApp
        </a>
        <a 
          href="mailto:abdullahidacad28@gmail.com" 
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
        >
          Email
        </a>
      </div>
    </section>
  );
}
export default Contact