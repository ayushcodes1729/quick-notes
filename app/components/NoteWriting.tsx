"use client";

import { Button } from "@/components/ui/button";
import axios from "axios";
import { useRef, useState } from "react";

export default function NoteWriting({
  edit,
  prevTitle,
  prevContent,
}: Readonly<{ edit: boolean; prevTitle?: string; prevContent?: string }>) {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [title, setTitle] = useState(edit ? prevTitle : "");
  const [content, setContent] = useState(edit ? prevContent : "");
  function textAreaAdjust() {
    const element = textAreaRef.current;
    if (element) {
      element.style.height = "100px";
      element.style.height = 25 + element.scrollHeight + "px";
    }
  }
  async function handleSave() {
    // const element = textAreaRef.current;
    // let timer;
    // clearTimeout(timer);
    // timer = setTimeout(async () => {
    try {
      {
        edit
          ? await axios.patch("/api/notes/note", {
              title: title,
              content: content,
            })
          : await axios.post("/api/notes", {
              title: title,
              content: content,
            });
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <form
      className="flex flex-col gap-10"
      onSubmit={(e) => {
        e.preventDefault();
        handleSave();
      }}
    >
      <Button className="w-fit" type="submit">
        Save
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
