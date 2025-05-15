'use client'
import React, { useEffect, useState } from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import axios from "axios";
import { Notes } from "@prisma/client";
import { useFeedStore } from "@/stores/feed-store";

export function BentoGridDemo() {
  const [items, setItems] = useState<Notes[]>([]);
  const [hydrated, setHydrated] = useState(false);
  const addFeed = useFeedStore((state)=> state.addFeed)
  const feeds = useFeedStore((state)=> state.feeds)
  async function fetchNotes() {
    try {
      const res = await axios.get("/api/notes");
      const notes = res.data.data;
      addFeed(notes);
      setItems(notes);
      return notes;
    } catch (error) {
      console.log(error)
      return error;
    }
  }

  useEffect(()=>{
    setHydrated(true);
    fetchNotes();
  },[fetchNotes])
  return (
    <BentoGrid className="max-w-[1440px] py-10 mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          id={item.id}
          title={item.title}
          description={item.content}
          header={item.title}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
