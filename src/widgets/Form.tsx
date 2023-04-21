import { useRef, useState } from "react";
import { Note } from "../shared/interfaces/Note";

function Form() {
  const [notes, setNotes] = useState<Array<Note>>([]);
  const titleRef = useRef<null | HTMLInputElement>(null);
  const descripRef = useRef<null | HTMLInputElement>(null);
  const statusRef = useRef<null | HTMLInputElement>(null);

  const addNoteEvent = () => {
    const newElement: Note = {
      title: titleRef.current?.value,
      description: "",
      status: statusRef.current?.checked,
    };
    console.log(newElement);
    console.log(notes);
    setNotes((oldArray) => [...oldArray, newElement]);
  };

  return (
    <>
      <form>
        <label>Title</label>
        <br />
        <input type="text" ref={titleRef}></input>
        <br />
        <label>Description</label>
        <br />
        <textarea></textarea>
        <br />
        <label>Status</label>
        <input type="checkbox" ref={statusRef} />
      </form>
      <button onClick={addNoteEvent}>Save</button>
      <button>Delete</button>
    </>
  );
}

export default Form;
