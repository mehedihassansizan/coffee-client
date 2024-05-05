import { FaArrowRight } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";


const Viewcard = () => {

    const coffee = useLoaderData();
    const {name, quantity, supplier, taste, photo } = coffee;

  return (
    <div className=" bg-base-100 shadow-xl mb-12">
        <div>
           <Link to='/'> <h1 className="flex justify-end mr-[40px] text-xl cursor-pointer"><FaArrowRight/>Back</h1></Link>
        </div>
    <figure>
      <img src={photo} alt="Movie" />
    </figure>
    <div className="flex justify-between w-full pr-4">
      <div className="">
        <h2 className="card-title">Name: {name ? name : "hello"}</h2>
        <p>Quantity :{quantity ? quantity : 0}</p>
        <p>chef : {supplier ? supplier : "null"}</p>
        <p>Taste :{taste}</p>
      </div>
    </div>
  </div>
  )
}

export default Viewcard


