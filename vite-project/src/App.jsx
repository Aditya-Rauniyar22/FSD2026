import StateHandling from "./component/StateHandling";
import ImageManipulation from "./component/Imagemanipulation";
import Shopping from "./component/Shopping";

function App() {
  return (
    <div
      style={{
        display: "flex",
        gap: "24px",
        padding: "24px",
        flexWrap: "wrap",
        marginLeft: "30px",
        marginRight: "30px"
      }}
    >
      <StateHandling />
      <ImageManipulation />
      <Shopping />
    </div>
  );
}

export default App;