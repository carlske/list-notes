import { useRef, useState } from "react";

function Form() {
  const [notes, setNotes] = useState([]);
  const titleRef = useRef("");
  const descripRef = useRef("");
  const statusRef = useRef(null);

  const addNoteEvent = () => {
    const newElement = {
      title: titleRef.current.value,
      description: descripRef.current.value,
      status: statusRef.current.checked,
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
        <textarea ref={descripRef}></textarea>
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
