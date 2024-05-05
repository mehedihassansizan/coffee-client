import { FaCoffee } from "react-icons/fa";
import { Link } from "react-router-dom";

const Coffees = () => {
  return (
    <div className="text-center mt-16">
      <h1 className="mb-2">--- Sip & Savor ---</h1>
      <h1>Our Propular Product</h1>
      <div className="mt-2 flex justify-center">
        <Link to="/addCoffee" className="btn bg-[#E3B577] p-3 rounded">
          Add Coffee <FaCoffee />
        </Link>
      </div>
    </div>
  );
};


export default Coffees;
