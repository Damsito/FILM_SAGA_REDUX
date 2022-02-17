import Chips from "./Chips";

function Genre({ name }) {
  if (!name) return null;
  return <Chips label={name} />;
}
export default Genre;
