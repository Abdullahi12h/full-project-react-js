function Testimonials() {
  return (
    <>
      <div className="text-center text-3xl font-semibold text-blue-500 mt-10">
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </h1>
      </div>

      {/* First Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 px-4 max-w-7xl mx-auto">
        {/* Testimonial 1 */}
        <div className="flex flex-col items-center text-center">
          <img
            className="w-48 h-64 rounded-full object-cover mb-4"
            src="https://i.pinimg.com/736x/97/00/19/9700195ee1212e3be61c0294fdc80a0a.jpg"
            alt=""
          />
          <p className="text-gray-800 text-sm leading-relaxed max-w-md">
            Abdullahi Abdinasir Hussein waa horumariye buuxa (Full Stack Developer) oo leh faham qoto dheer oo ku saabsan web development.
            Wuxuu si qoto dheer u yaqaanaa horumarinta frontend-ka iyo backend-ka labadaba.
            Farsamadiisa iyo xirfadiisu waxay si cad ugu muuqataa mashaariicda uu qabto...
          </p>
        </div>

        {/* Testimonial 2 */}
        <div className="flex flex-col items-center text-center">
          <img
            className="w-48 h-64 rounded-full object-cover mb-4"
            src="https://i.pinimg.com/736x/97/00/19/9700195ee1212e3be61c0294fdc80a0a.jpg"
            alt=""
          />
          <p className="text-gray-800 text-sm leading-relaxed max-w-md">
            Abdullahi waa nin dhameystiran oo xirfadihiisu u kala go’an yihiin frontend iyo backend labadaba.
            Wuxuu leeyahay aqoon iyo aragti ku saleysan xalinta dhibaatooyinka tignoolajiyadda casriga ah...
          </p>
        </div>
      </div>

      {/* Second Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 px-4 max-w-7xl mx-auto">
        {/* Testimonial 3 */}
        <div className="flex flex-col items-center text-center">
          <img
            className="w-48 h-64 rounded-full object-cover mb-4"
            src="https://i.pinimg.com/736x/97/00/19/9700195ee1212e3be61c0294fdc80a0a.jpg"
            alt=""
          />
          <p className="text-gray-800 text-sm leading-relaxed max-w-md">
            Abdullahi waa shaqsi aad u firfircoon oo leh maskax hal-abuur leh iyo aqoon waafi ah.
            Wuxuu si hufan u maareeyaa dhammaan qeybaha horumarinta webka...
          </p>
        </div>

        {/* Testimonial 4 */}
        <div className="flex flex-col items-center text-center">
          <img
            className="w-48 h-64 rounded-full object-cover mb-4"
            src="https://i.pinimg.com/736x/97/00/19/9700195ee1212e3be61c0294fdc80a0a.jpg"
            alt=""
          />
          <p className="text-gray-800 text-sm leading-relaxed max-w-md">
            Abdullahi waa nin dhameystiran oo xirfadihiisu u kala go’an yihiin frontend iyo backend labadaba.
            Shaqo kasta wuxuu u wajahaa si taxaddar leh oo natiijo muuqata keenta...
          </p>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
