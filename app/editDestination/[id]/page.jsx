"use client"
import EditDestinationForm from "@/components/EditDestinationForm";
import { useEffect, useState } from "react";

export default function EditDestinationPage({ params }) {
    const [selectedDest, setSelectedDest] = useState([]);
    const { id } = params;

    useEffect(() => {
        const fetchSelectedDestination = async () => {
            try {
                const response = await fetch(`/api/destination/${id}`); 
                const data = await response.json();
                setSelectedDest(data); 
            } catch (error) {
                console.error(error);
            }
        };

        fetchSelectedDestination();
    }, [id]); 

    useEffect(() => {
        console.log(selectedDest);
    }, [selectedDest]);

    return (
        <>
            <EditDestinationForm id={id} selectedDest={selectedDest}/>
        </>
    );
}
