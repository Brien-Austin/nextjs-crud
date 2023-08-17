"use client"
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function AddDestination() {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const router = useRouter();
 



    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !location) {
            alert("Please Enter Name and Location");
            return;
        }
        try {
            const response = await axios.post('/api/destination', {
                name: name,
                location: location
            })

            if (response.status === 201) {
                console.log("Posted Successfully");
                router.push("/");
                setName('');
                setLocation('');
               
            }
            
        } catch (error) {
            console.log(error);
        }
    }
    
    return (
        <>
            <h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <input value={name} onChange={(e)=>{setName(e.target.value)}} className="border px-8 py-4 border-slate-300" type="text" placeholder="Enter Destination name" />
                    <input value={location} onChange={(e)=>{setLocation(e.target.value)}} className="border px-8 py-4 border-slate-300" type="text" placeholder="Enter Destination location" />
                    <button type="submit" className="px-5 py-4 rounded-md bg-black text-white w-fit mx-auto">
                        Add Destination
                    </button>
                </form>
                
            </h1>
        </>
    )
}
