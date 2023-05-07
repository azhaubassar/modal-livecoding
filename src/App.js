import { useEffect, useState } from "react";
import "./App.css";
import ErrorModal from "./Components/ErrorModal";

function App() {
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const [isErrorModalVisible, setIsErrorModalVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      console.log("some BE requests is going.....");
      setIsErrorModalVisible(true);
    }, 5000);
  }, []);

  return (
    <div className="App">
      <div className="container-button">
        <button
          className="button"
          onClick={() => setIsAddModalVisible(!isAddModalVisible)}
        >
          <p className="button-text">+</p>
        </button>
      </div>

      <button onClick={() => setIsErrorModalVisible(!isErrorModalVisible)}>
        its an error
      </button>

      {isAddModalVisible && (
        <div className="modal">
          <p style={{ color: "black" }}>Add New To Do</p>
          <textarea className="modal-textarea">Your text</textarea>
          <button className="modal-addbutton">Add</button>
        </div>
      )}

      {isErrorModalVisible && <ErrorModal />}
    </div>
  );
}

export default App;
