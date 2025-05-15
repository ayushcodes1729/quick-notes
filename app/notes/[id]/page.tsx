"use client"
import NoteWriting from "@/app/components/NoteWriting";
import { useNoteStore } from "@/stores/note-store";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Notes() {
    const searchParams = useSearchParams()
    const [hydrated, setHydrated] = useState(false)
    const addNote = useNoteStore((state)=> state.addNote);
    const removeNote = useNoteStore((state)=> state.removeNote);

    const id = searchParams.get('id');
    async function getNote(){
      try {
        removeNote();
        const res = await axios.get(`/api/notes/note?id=${id}`);
        addNote(res.data.data);
      } catch (error) {
        console.log(error);
      }
    }

    useEffect(()=>{
      setHydrated(true);
      getNote();
    },[getNote])
    
  return (
    <div className="py-10 px-10">
      <NoteWriting edit={true}/>
    </div>
  );
}
