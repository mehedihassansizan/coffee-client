import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, quantity, supplier, taste, photo } = coffee;
  

  const handleDelete = _id => {

    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {


            fetch(`http://localhost:3000/coffee/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            'Your Coffee has been deleted.',
                            'success'
                        )
                        const remaining = coffees.filter(cof => cof._id !== _id);
                        setCoffees(remaining);
                    }
                })

        }
    })
}


  return (
    <div className="card card-side bg-base-100 shadow-xl mb-12">
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
        <div className="card-actions justify-end">
          <div className="btn-group btn-group-vertical space-y-4">
            <Link to={`view/${_id}`}>
            <button className="btn">View</button>
            </Link>
            <Link to={`updateCoffee/${_id}`}>
              <button className="btn">Edit</button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn bg-orange-500"
            >
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
