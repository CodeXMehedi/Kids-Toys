const WhyChooseUs = () => {
  const features = [
    {
      icon: "https://cdn-icons-png.flaticon.com/512/104/104678.png",
      title: "Fast Delivery",
      desc: "Quick & safe delivery to your doorstep.",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/2920/2920235.png",
      title: "Safe & Quality Products",
      desc: "All toys are safety-tested for children.",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/1828/1828843.png",
      title: "Easy Return",
      desc: "Simple return policy, no hassle.",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/3159/3159066.png",
      title: "Happy Customers",
      desc: "Thousands of satisfied parents.",
    },
  ];

  return (
    <section className="py-16 bg-[#FBE8D3]">
      <h2 className="text-4xl font-bold text-center mb-14 text-orange-600">
        Why Choose Us?
      </h2>

      <div className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 ">
        {features.map((item, idx) => (
          <div
            key={idx}
            className="text-center rounded-xl p-6 shadow-xl hover:scale-140 hover:bg-orange-50 transition bg-white"
          >
            <img
              src={item.icon}
              alt={item.title}
              className="w-14 h-14 mx-auto mb-3"
            />
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
