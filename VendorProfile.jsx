// VendorProfile.jsx
import { useParams } from "react-router-dom";
import { FaPhoneAlt, FaMapMarkerAlt, FaStar } from "react-icons/fa";

// Sample detailed vendor data
const vendorData = {
  1: {
    name: "Zeenat's Couture",
    description: "Elegant wedding dresses with custom designs and flawless stitching.",
    about: "With over 10 years of experience in bridal wear, Zeenat's Couture offers top-tier custom designs, hand embroidery, and luxury fabrics tailored to make your big day unforgettable.",
    location: "Karachi, Pakistan",
    phone: "+92 300 1234567",
    image: "/images/zeenat-profile.jpg",
    gallery: ["/images/gallery1.jpg", "/images/gallery2.jpg"]
  },
  2: {
    name: "Nida's Stitch",
    description: "Bridal gowns made to perfection with delicate craftsmanship.",
    about: "Nida's Stitch brings you the best of elegance and tradition, offering beautiful bridal and formal wear crafted with attention to detail and timely delivery.",
    location: "Lahore, Pakistan",
    phone: "+92 300 9876543",
    image: "/images/nida-profile.jpg",
    gallery: ["/images/gallery3.jpg", "/images/gallery4.jpg"]
  },
  3: {
    name: "Feroze Bridal",
    description: "Unique, handcrafted wedding outfits that make your big day special.",
    about: "Feroze Bridal is known for creating unique, handcrafted pieces that blend modern and traditional aesthetics for brides who want to stand out.",
    location: "Islamabad, Pakistan",
    phone: "+92 300 1122334",
    image: "/images/feroze-profile.jpg",
    gallery: ["/images/gallery5.jpg", "/images/gallery6.jpg"]
  },
  4: {
    name: "Saniya Creations",
    description: "Stunning bridal wear with fine detailing and premium fabric choices.",
    about: "Saniya Creations offers premium bridal dresses known for fine detailing and luxury fabric choices perfect for all events.",
    location: "Rawalpindi, Pakistan",
    phone: "+92 300 4455667",
    image: "/images/saniya-profile.jpg",
    gallery: ["/images/gallery7.jpg", "/images/gallery8.jpg"]
  },
  5: {
    name: "Kiran's Stitchery",
    description: "Custom bridal dresses with a blend of traditional and modern styles.",
    about: "Blending modern cuts with traditional designs, Kiran’s Stitchery is ideal for brides looking for unique styling and comfort.",
    location: "Faisalabad, Pakistan",
    phone: "+92 300 7788990",
    image: "/images/kiran-profile.jpg",
    gallery: ["/images/gallery9.jpg", "/images/gallery10.jpg"]
  },
  6: {
    name: "Amina Couture",
    description: "A blend of luxury and style in every stitch of your bridal dress.",
    about: "Amina Couture focuses on luxurious bridal wear with elegant finishes and exclusive handcrafted detailing.",
    location: "Hyderabad, Pakistan",
    phone: "+92 300 5566778",
    image: "/images/amina-profile.jpg",
    gallery: ["/images/gallery11.jpg", "/images/gallery12.jpg"]
  }
};

const VendorProfile = () => {
  const { id } = useParams();
  const vendor = vendorData[id];

  if (!vendor) {
    return <div className="text-center text-red-500 mt-20 text-2xl">Vendor not found.</div>;
  }

  return (
    <div className="min-h-screen bg-[#FFF8F3] py-16 px-4 sm:px-10">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10">
          {/* Left Side - Image and Info */}
          <div>
            <img
              src={vendor.image}
              alt={`${vendor.name} display`}
              className="rounded-2xl shadow-lg object-cover w-full h-72"
            />
            <h2 className="text-4xl font-extrabold text-[#831418] mt-6">{vendor.name}</h2>
            <p className="text-[#B17F6B] mt-3 text-lg">{vendor.description}</p>
            <div className="flex items-center gap-3 mt-4">
              <FaStar className="text-yellow-500" />
              <span className="text-gray-700 font-medium">4.9 (200 reviews)</span>
            </div>
            <div className="flex items-center gap-3 mt-2">
              <FaMapMarkerAlt className="text-[#B17F6B]" />
              <span className="text-gray-700">{vendor.location}</span>
            </div>
            <div className="flex items-center gap-3 mt-2">
              <FaPhoneAlt className="text-[#B17F6B]" />
              <a href={`tel:${vendor.phone}`} className="text-[#831418] font-medium hover:underline">
                {vendor.phone}
              </a>
            </div>
          </div>

          {/* Right Side - Details */}
          <div>
            <h3 className="text-2xl font-semibold text-[#831418] mb-4">About</h3>
            <p className="text-gray-700 leading-relaxed mb-6">{vendor.about}</p>

            <h3 className="text-2xl font-semibold text-[#831418] mb-4">Services</h3>
            <ul className="list-disc ml-5 text-gray-700 space-y-1 mb-6">
              <li>Custom Bridal Gowns</li>
              <li>Mehndi & Barat Dresses</li>
              <li>Formal Party Wear</li>
              <li>Embroidery & Handwork</li>
              <li>On-Time Delivery</li>
            </ul>

            <h3 className="text-2xl font-semibold text-[#831418] mb-4">Gallery</h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {vendor.gallery.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  className="w-40 h-60 object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
                  alt={`Gallery ${index + 1}`}
                />
              ))}
            </div>

            <a href={`https://wa.me/${vendor.phone.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer">
              <button className="w-full bg-[#831418] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#B17F6B] transition-all duration-300">
                📞 Contact via WhatsApp
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorProfile;
