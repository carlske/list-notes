import Form from "../widgets/Form";
import { ListNotes } from "../widgets/ListNotes";

export const Home = () => {
  return (
    <>
      <h1>My notes</h1>
      <Form />
      <ListNotes />
    </>
  );
};
