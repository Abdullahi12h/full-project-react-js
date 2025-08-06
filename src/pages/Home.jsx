function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white text-center  ">
        <h1 className="text-4xl mb-7 font-bold">Welcome to My website</h1>
        <p className="mt-0 text-lg max-w-xl mx-auto mb-12">
          Waxaan ahay Abdullahi – Developer iyo Designer khibrad leh.  
        </p>
      </section>

      {/* About Section */}
      <div className="mt-12 flex flex-col-reverse md:flex-row items-center justify-center gap-8 px-4 max-w-6xl mx-auto">
        {/* Text Section */}
        <p className="text-black text-base leading-relaxed max-w-xl text-center md:text-left">
          Abdullahi is a passionate Web Developer and a Computer Science student at Hormuud University.
          With a strong foundation in front-end and back-end technologies including HTML, CSS, JavaScript, React JS,
          Tailwind CSS, and Node.js, he is committed to creating modern, user-friendly, and responsive websites.
          Abdullahi aims to become a skilled full-stack developer who leverages technology to solve real-world problems
          and bring innovative ideas to life.
        </p>

        {/* Image Section */}
        <img
          className="w-64 h-64 rounded-lg object-cover"
          src="https://i.pinimg.com/736x/a4/5a/63/a45a638eba63ab1cf248fa4434086b25.jpg"
          alt="Abdullahi"
        />
      </div>
    </>
  );
}

export default Home;
