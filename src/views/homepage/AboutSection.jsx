import React from "react";

const AboutSection = () => {
  return (
    <div className="py-8 px-4 md:px-16 bg-gray-200">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">About Us</h2>
      <div className="flex flex-wrap md:flex-nowrap items-start gap-6">
        {/* Text Section */}
        <div className="w-full md:w-1/2 border-2  p-4 rounded-md">
          <p className="text-gray-700 mb-4">
            Body text for your whole article or post. We'll put in some lorem ipsum to show how a filled-out page might look.
          </p>
          <p className="text-gray-700">
            Excepteur efficient emerging, minim veniam anim aute carefully curated. Culpa retro authentic, excepteur organic shamanic aesthetic echo park bespoke tousled. Magna butcher farm-to-table poke chillwave, ennui Brooklyn aesthetic. Ethical affogato 8-bit enamel pin post-ironic kale chips fanny pack PBR&B.
          </p>
        </div>
        {/* Image Section */}
        <div className="w-full md:w-1/2 border-2  rounded-md flex justify-center items-center">
          <div className="w-1/2 h-1/2 bg-gray-300 flex justify-center items-center">
            <img className="w-full" src="https://s3-alpha-sig.figma.com/img/0f7c/f84f/0cf0749ce04dd82308d32233adca5260?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S1oEgXlERhx9cVhU8wEmd8ho4RM~QWIcVZ3DT32oBVh7Xy21oOzNPJV6I2JCCoUNC89LYlNLrxOKWUY8E1BoNFdUKFzqGPX4WPHXcSJ0ESNkxeuVR6-Xmx~U-qX9LasoB0feByFf4h6WkR~ULlwhdfkeuzh9GoqK~CEDRhfIvVxuEa2zsIj5AdT0FeFNcG49OBUDAo3rJBhxB8bk769F3o81HLTEES5wtHvtSuJQRc7i2rAtryvav4dJjlUfxNSUaqGoVgOwBQOueL9pVjpFPte7buSiQ9HLMAfkINpI9760LnpYFjcjDUsjzCFCrv4fDC2grBPBEziUCEEvK8SZiQ__" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
