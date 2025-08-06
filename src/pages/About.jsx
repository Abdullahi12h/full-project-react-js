 function About() {
  return (
    <section className="py-16 px-6 text-center bg-white">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="max-w-2xl mx-auto text-lg text-gray-700 leading-relaxed">
        Waxaan ahay developer xirfad leh oo ku takhasusay React JS, Tailwind CSS, 
        iyo web design casri ah. Waxaan sameeyaa websites responsive ah oo 
        isticmaale-saaxiibtinimo leh.
      </p>
      <div className="mt-6 flex justify-center">
        <video 
          src="/dhamaystoir.mp4" 
          controls 
          className="rounded-lg shadow-lg w-full max-w-xl"
        />
      </div>
    </section>
  )
}export default About
