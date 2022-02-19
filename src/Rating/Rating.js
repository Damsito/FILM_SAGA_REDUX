import "./Rating.css";
import FillStar from "./FillStar";
import EmptyStar from "./EmptyStar";

function Rating({ note }) {
  let noteBy5 = (parseInt(note.toString()) / 2).toFixed(1);

  let array = [1, 2, 3, 4, 5];
  return (
    <div>
      <h1>Note du public</h1>
      <div className={"flex"}>
        <ul className="flex justify-start">
          {array.map((number, index) => {
            if (noteBy5 >= number) {
              return <FillStar key={`${number}`} />;
            } else {
              return <EmptyStar key={`${number}`} />;
            }
          })}
        </ul>
        <span className={"ml-3"}>{noteBy5} / 5</span>
      </div>
    </div>
  );
}
export default Rating;

Rating.defaultProps = {
    note: 0
}
