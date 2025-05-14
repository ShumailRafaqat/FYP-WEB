import { motion } from "framer-motion";
import { FaStore } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const vendors = [
  {
    id: 1,
    name: "Zeenat's Couture",
    description: "Elegant wedding dresses with custom designs and flawless stitching.",
    image: "/images/zeenat.jpg", // Add vendor images in /public/images
  },
  {
    id: 2,
    name: "Nida's Stitch",
    description: "Bridal gowns made to perfection with delicate craftsmanship.",
    image: "/images/nida.jpg",
  },
  {
    id: 3,
    name: "Feroze Bridal",
    description: "Unique, handcrafted wedding outfits that make your big day special.",
    image: "/images/feroze.jpg",
  },
  {
    id: 4,
    name: "Saniya Creations",
    description: "Stunning bridal wear with fine detailing and premium fabric choices.",
    image: "/images/saniya.jpg",
  },
  {
    id: 5,
    name: "Kiran's Stitchery",
    description: "Custom bridal dresses with a blend of traditional and modern styles.",
    image: "/images/kiran.jpg",
  },
  {
    id: 6,
    name: "Amina Couture",
    description: "A blend of luxury and style in every stitch of your bridal dress.",
    image: "/images/amina.jpg",
  },
];

const VendorsSection = () => {
  const navigate = useNavigate();

  return (
    <div className="py-20 bg-[#EFD4C9]">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-[#831418]">Our Trusted Tailors</h2>
        <p className="mt-4 text-lg text-[#B17F6B]">Find the best wedding tailors in Pakistan</p>
      </div>

      <div className="flex justify-center gap-16 px-10 flex-wrap">
        {vendors.map((vendor, index) => (
          <motion.div
            key={vendor.id}
            className="text-center max-w-sm mx-4 p-6 text-white rounded-2xl shadow-lg transform transition duration-300 ease-in-out hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            style={{ background: 'linear-gradient(135deg, #831418, #B17F6B)' }}
          >
            <FaStore className="text-6xl mb-4" />
            <h3 className="text-2xl font-semibold">{vendor.name}</h3>
            <p className="mt-2 text-[#EFD4C9]">{vendor.description}</p>
            <div className="mt-4 flex justify-center gap-4">
              <button
                className="bg-[#B17F6B] text-white px-4 py-2 rounded-lg hover:bg-[#831418]"
                onClick={() => navigate(`/vendor/${vendor.id}`)}
              >
                View Profile
              </button>
              <button className="bg-[#B17F6B] text-white px-4 py-2 rounded-lg hover:bg-[#831418]">
                More Info
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default VendorsSection;
