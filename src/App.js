import "./App.css";
import { useState } from "react";
import clothing from "./clothes";

function App() {
  const [dressCode, setDresscode] = useState("casual");
  console.log("dresscode is: ", dressCode);

  const findClothingItem = (type) => {
    const filteredItems = clothing.filter(
      (clothingItem) =>
        clothingItem.type === type && clothingItem.dressCode === dressCode
    );
    return filteredItems[Math.floor(Math.random() * filteredItems.length)];
  };

  return (
    <div className="App">
      <div className="button-row">
        {" "}
        <button id="casual-button" onClick={() => setDresscode("casual")}>
          Casual{" "}
        </button>
        <button id="sports-button" onClick={() => setDresscode("sport")}>
          Sports{" "}
        </button>
        <button id="formal-button" onClick={() => setDresscode("formal")}>
          Formal{" "}
        </button>
      </div>
      <div className="outfit-container"></div>
      <div id="top">
        {" "}
        <img
          src={findClothingItem("top").imageUrl}
          style={{ width: "120px", height: "120px", objectFit: "cover" }}
          alt=""
        />
      </div>
      <div id="bottom">
        <img
          src={findClothingItem("bottom").imageUrl}
          style={{ width: "120px", height: "120px", objectFit: "cover" }}
          alt=""
        />
      </div>
      <div id="shoe">
        <img
          src={findClothingItem("shoes").imageUrl}
          style={{ width: "120px", height: "120px", objectFit: "cover" }}
          alt=""
        />
      </div>
    </div>
  );
}

export default App;
