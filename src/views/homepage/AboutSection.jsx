import React from "react";

const AboutSection = () => {
  return (
    <div id="about-us" className='md:py-12'>
    <div className="px-4 md:px-24 py-12">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">About Us</h2>
      <div className="flex flex-wrap md:flex-nowrap items-start gap-6">
        {/* Text Section */}
        <div className="w-full md:w-1/2  py-4 rounded-md">
          <p className="text-gray-700 mb-4">
          Shiva Baba Fabric Pvt. Ltd., is a trusted partner for high-quality shawls and scarves. Since 2014, we’ve been specializing in wholesale manufacturing, helping businesses bring their designs and ideas to life.
          We work closely with wholesale buyers to create products that match their needs and specifications. Whether it’s a special pattern, a type of material, or a specific style, our skilled team ensures top-quality craftsmanship every time.
          With competitive prices, reliable bulk production, and on-time delivery, we make it easy to grow your business with exceptional shawls and scarves.
          Partner with us to create products you desire and your customers will love!
          </p>
          {/* <p className="text-gray-700">
            Excepteur efficient emerging, minim veniam anim aute carefully curated. Culpa retro authentic, excepteur organic shamanic aesthetic echo park bespoke tousled. Magna butcher farm-to-table poke chillwave, ennui Brooklyn aesthetic. Ethical affogato 8-bit enamel pin post-ironic kale chips fanny pack PBR&B.
          </p> */}
        </div>
        {/* Image Section */}
        <div className="w-full md:w-1/2   rounded-md flex justify-center items-center">
          <div className="w-full md:w-1/2 h-80 bg-gray-300 flex justify-center items-center">
            <img className="w-full h-full" src="/images/manequinn-and-scarf.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    </div>
  );d
};

export default AboutSection;
