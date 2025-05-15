import NoteWriting from "../components/NoteWriting";

export default function Create() {
  return (
    <div className="py-10 px-10">
      <NoteWriting edit={false}/>
    </div>
  );
}
