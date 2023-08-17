"use client"
import Link from "next/link";
import axios from 'axios'

import {HiPencilAlt} from "react-icons/hi"
import { useEffect, useState } from "react";
import { HiOutlineTrash } from "react-icons/hi"
import { useRouter } from "next/navigation";

export default function DestinationList() {

    const [dest, setDest] = useState([]);
    const router = useRouter();
    const handleDelete = async(id) => {
        const response = await axios.delete(`/api/destination?id=${id}`);
        if (response.status === 200) {
            console.log("Deleted ");
            setDest(dest.filter(destination => destination.id !== id));
        }
    }

    useEffect(() => {

   
        const fetchDestinations = async () => {
            try {
                const response = await fetch('/api/destination');
                const data = await response.json();
                const destinationNamesAndLocations = data.destinations.map((dest) => ({
                    id: dest._id,
          name: dest.name,
          location: dest.location
        }));
                
                setDest(destinationNamesAndLocations);
               

            } catch (error) {
                console.error(error)
                
            }
        };
        fetchDestinations();
        
    }, []);
      useEffect(() => {

    console.log(dest);
  }, [dest]);


    return (
        <>
            
            {dest.map((destination) => (
                <div className="p-4 border border-slate-300 mt-5 rounded flex justify-between gap-5">
                    <div>
                       
                 
                        <h2 className="text-2xl font-bold">{destination.name}</h2>
                        <h3 className="text-xl font-semibold">{destination.location}</h3>
                        </div>
                            <div className="flex items-start gap-2">
                  
                    <Link href={`/editDestination/${destination.id}`}>
                        <HiPencilAlt className="text-black" size={24} />
                        

                        </Link>
                         <HiOutlineTrash size={24} className="text-red-600 cursor-pointer" onClick={()=>handleDelete(destination.id)} />
                </div>
            </div>
 
        
               )
                )}
               
              
                
           
              
                    
                
        
            </>
    )
}