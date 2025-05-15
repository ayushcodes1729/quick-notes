"use client";

import { Button } from "@/components/ui/button";
import { useNoteStore } from "@/stores/note-store";
import { Notes } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function NoteWriting({ edit }: Readonly<{ edit: boolean }>) {
  const noteFromStore = useNoteStore((state) => state.note);
  const [note, setNote] = useState<Notes | null>(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (edit && noteFromStore) {
      setNote(noteFromStore);
      setTitle(noteFromStore.title);
      setContent(noteFromStore.content);
    } else {
      const newNote = {
        id: "",
        slug: "",
        title: "",
        content: "",
        updatedAt: new Date(),
      };
      setNote(newNote);
      setTitle("");
      setContent("");
    }
  }, [edit, noteFromStore]);

  function textAreaAdjust() {
    const element = textAreaRef.current;
    if (element) {
      element.style.height = "100px";
      element.style.height = 25 + element.scrollHeight + "px";
    }
  }

  async function handleSave() {
    try {
      if (edit) {
        await axios.patch(`/api/notes/note?id=${note?.id}`, {
          newTitle: title,
          newContent: content,
        });
      } else {
        await axios.post("/api/notes", {
          title,
          content,
        });
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function handleDelete() {
    try {
      await axios.delete(`/api/notes/note?id=${note?.id}`);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <form
      className="flex flex-col gap-10"
      onSubmit={(e) => {
        e.preventDefault();
        handleSave();
        router.push("/");
      }}
    >
      <Button className="w-fit" type="submit">
        Save
      </Button>
      <Button className="w-fit" onClick={handleDelete}>
        Delete
      </Button>
      <input
        type="text"
        placeholder="Title"
        name="title"
        className="outline-none text-3xl w-full"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        name="content"
        id="content"
        placeholder="Note something here"
        className="outline-none w-full resize-none"
        ref={textAreaRef}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        onKeyUp={textAreaAdjust}
      ></textarea>
    </form>
  );
}
