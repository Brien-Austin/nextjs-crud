import React, { useState } from "react";
import axios from "axios"; 
import { useRouter } from "next/navigation";


export default function EditDestinationForm({ id, selectedDest }) {
    const { name: nameToBeUpdated, location: locationToBeUpdated } = selectedDest;
    const [newName, setNewName] = useState(nameToBeUpdated);
    const [newLocation, setNewLocation] = useState(locationToBeUpdated);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.put(`/api/destination/${id}`, {
                newName: newName,
                newLocation: newLocation
            });

            if (response.status === 200) {
                console.log("Destination updated successfully");
                router.push("/");
               
            }
        } catch (error) {
            console.error("Error updating destination:", error);
            // Handle error messages or UI updates for failed update
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                    defaultValue={nameToBeUpdated}
                    onChange={(e) => setNewName(e.target.value)}
                    className="border px-8 py-4 border-slate-300"
                    type="text"
                />
                <input
                    defaultValue={locationToBeUpdated}
                    onChange={(e) => setNewLocation(e.target.value)}
                    className="border px-8 py-4 border-slate-300"
                    type="text"
                />
                <button
                    type="submit"
                    className="px-5 py-4 rounded-md bg-black text-white w-fit mx-auto"
                >
                    Update Destination
                </button>
            </form>
        </>
    );
}
