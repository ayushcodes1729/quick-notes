"use client"
import NoteWriting from "@/app/components/NoteWriting";
import { useSearchParams } from "next/navigation";

export default function Notes() {
    const searchParams = useSearchParams()

    const id = searchParams.get('id');
    
  return (
    <div className="py-10 px-10">
      <NoteWriting edit={true} prevTitle="" prevContent=""/>
    </div>
  );
}
