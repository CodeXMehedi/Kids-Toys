import React from "react";

const PopularBrands = () => {
  const brands = [
    {
      name: "Puffy Playmates",
      img: "https://i.ibb.co.com/n8fHJg5M/caleb-toranzo-QWLUn-Fg9-NOg-unsplash.jpg",
    },
    {
      name: "Cotton Stuffed",
      img: "https://i.ibb.co.com/r285r84x/vanessa-bucceri-g-Di-Rw-IYAMA8-unsplash.jpg",
    },
    {
      name: "Cute Plushies",
      img: "https://i.ibb.co.com/ycg3DWtp/hossein-beygi-vt55di-Mi7tc-unsplash.jpg",
    },
    {
      name: "Fuzzy Friends",
      img: "https://i.ibb.co.com/vyTq91n/kira-cherkavskaya-Ljl5-KJYJxb-E-unsplash.jpg",
    },
    {
      name: "Softy Squad",
      img: "https://i.ibb.co.com/M55NxbZV/patricia-fonseca-L4-KHPYl-TWIQ-unsplash.jpg",
    },
  ];

  return (
    <section className="py-16 bg-[#FBE8D3]">
      <h2 className="text-4xl font-bold text-center mb-10 text-[#A55E2A]">
        Popular Toy Brands
      </h2>

      <div className="flex justify-center gap-10 w-10/12 mx-auto">
        {brands.map((brand, index) => (
          <div key={index} className="text-center">
            <img
              src={brand.img}
              alt={brand.name}
              className="w-40 h-40 rounded-full object-cover shadow-md hover:scale-120 transition-1s"
            />
            <p className="mt-3 text-lg font-semibold">{brand.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularBrands;
