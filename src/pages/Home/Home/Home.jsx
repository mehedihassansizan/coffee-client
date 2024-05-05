import { useLoaderData } from "react-router-dom";
import Quality from "../../../components/Quality/Quality";
import Coffees from "../../../components/coffees/Coffees";
import Cover from "../../../components/cover/Cover";
import { useState } from "react";
import CoffeeCard from "../../../components/CoffeeCard/CoffeeCard";


const Home = () => {
    const loadedCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(loadedCoffees);

    return (
        <div>
            <Cover></Cover>
            <Quality></Quality>
            <div>
             <Coffees></Coffees>
             {
                coffees.map(coffee => 
                <CoffeeCard 
                key={coffee._id}
                coffee={coffee}
                coffees={coffees}
                setCoffees={setCoffees}
                >
                </CoffeeCard>)
             }
            </div>
            
        </div>
    );
};

export default Home;