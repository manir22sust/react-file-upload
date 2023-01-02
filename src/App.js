import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    if (!e.target.files) {
      return;
    }
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = "http://localhost:3000/uploadFile";
    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", file.name);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    axios.post(url, formData, config).then((response) => {
      console.log(response.data);
    });
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>React File Upload</h1>
        <input type="file" onChange={handleChange} />
        <button type="submit"> Upload</button>
      </form>
    </div>
  );
}

export default App;
