import React from 'react';

const OurServices = () => {
  const services = [
    {
      id: 1,
      title: "Weaving",
      image: "https://s3-alpha-sig.figma.com/img/0f7c/f84f/0cf0749ce04dd82308d32233adca5260?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S1oEgXlERhx9cVhU8wEmd8ho4RM~QWIcVZ3DT32oBVh7Xy21oOzNPJV6I2JCCoUNC89LYlNLrxOKWUY8E1BoNFdUKFzqGPX4WPHXcSJ0ESNkxeuVR6-Xmx~U-qX9LasoB0feByFf4h6WkR~ULlwhdfkeuzh9GoqK~CEDRhfIvVxuEa2zsIj5AdT0FeFNcG49OBUDAo3rJBhxB8bk769F3o81HLTEES5wtHvtSuJQRc7i2rAtryvav4dJjlUfxNSUaqGoVgOwBQOueL9pVjpFPte7buSiQ9HLMAfkINpI9760LnpYFjcjDUsjzCFCrv4fDC2grBPBEziUCEEvK8SZiQ__",
    },
    {
      id: 2,
      title: "Dyeing",
      image: "https://s3-alpha-sig.figma.com/img/487e/1c39/6c11b7cabc3baca5190a0abd149dd8c3?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q2jrl8BBIquV2077tlAzbQWXAAD2wrHUVcu1-yvKaZIUDLj6bFY9HxnhbxRBBybW351wvSHqxaSa7OeRP-A1gmJXY71uvg5jZ9Bv4gxicJp1H9joaFUwbfJ3zHk~HYhd0NS04aYngg284MjeEZQbKKgefqxAHH35zTi~0Uqn86n7vaMg-hbcgWxtoHADjM8scstzIptHzCRYbedpT86XImJJ0Ax2fTHA5yORB2kFXTPNVRAcv8x9lyx7km6ixrnNCt1CwQbAg8slm9M812bQ2JBAJQjSXm6CGAykWUjaWMBfzxT-WbNO1MJ7EemWpTu2u8W1At0JQVGlFfEgGBcvTg__",
    },
    {
      id: 3,
      title: "Printing",
      image: "https://s3-alpha-sig.figma.com/img/1c6c/5be0/ecc52d14db1d4f5fc17d32db2c5f25b2?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I5j~gKsJS9ycPVldGY~WxuyfD9TB-dQJGRAKB8HM-c5YuvIQ17CTD-gyubw1b3Bk4JqB40B8Ust~K-JZCnRUs~8DbhzsLjgUkxVBX3tx5tKMHa8QWFGl12j5367QvYdRysz4fqj4-qh2n7wRSHXP2C1AjZyOwB29xIYBysD5ScQYzwIkzcpSp4w7X484h7uiXeZ7dFvQCu9oSXpB0IhUxoYM~fOh3yMdrSP5~y9EKpDa6pbjuf8eNIMD70TKJTs23N4xhZ7cPRF7to0JNVMbfpT2JzkmrMULyex3Hw48Oj8m-JfEZDkESUwegJnc2R7CYg0gFQvI9rtftb4bNJlg9Q__",
    },
    {
      id: 4,
      title: "Raging",
      image: "https://s3-alpha-sig.figma.com/img/0f7c/f84f/0cf0749ce04dd82308d32233adca5260?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S1oEgXlERhx9cVhU8wEmd8ho4RM~QWIcVZ3DT32oBVh7Xy21oOzNPJV6I2JCCoUNC89LYlNLrxOKWUY8E1BoNFdUKFzqGPX4WPHXcSJ0ESNkxeuVR6-Xmx~U-qX9LasoB0feByFf4h6WkR~ULlwhdfkeuzh9GoqK~CEDRhfIvVxuEa2zsIj5AdT0FeFNcG49OBUDAo3rJBhxB8bk769F3o81HLTEES5wtHvtSuJQRc7i2rAtryvav4dJjlUfxNSUaqGoVgOwBQOueL9pVjpFPte7buSiQ9HLMAfkINpI9760LnpYFjcjDUsjzCFCrv4fDC2grBPBEziUCEEvK8SZiQ__",
    },
  ];

  return (
    <div className="px-4 md:px-24 py-12 ">
      <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
      <div className="flex flex-wrap justify-center md:justify-between gap-8">
        {services.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center w-72 shadow-lg rounded-lg overflow-hidden bg-white"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-64 w-full object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              {/* <button className="bg-[#d2b48c] text-white py-2 px-4 rounded hover:bg-[#b68a60]">
                MORE
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
