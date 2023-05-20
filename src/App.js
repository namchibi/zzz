import "./App.css";
import { useCallback, useState } from "react";
import axios from "axios";
import HideToast from "./Toast";

function App() {
  const [url, setUrl] = useState("");
  const [count, setCount] = useState(0);

  const onUrlInputChange = (e) => {
    setUrl(e.target.value);
  };

  const onCountInputChange = (e) => {
    setCount(e.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      url: url,
      count: count,
    };
    // console.log(data);
    axios
      .post("http://103.116.38.112:3000/api/insert", data)
      .then((response) => {
        console.log(response);
        alert("Thêm thành công!");
        // Xử lý thành công, làm gì đó
      })
      .catch((error) => {
        console.error(error);
        alert("Thêm thất bại!");
        // Xử lý lỗi, hiển thị thông báo hoặc gửi lỗi lên server
      });
    setUrl("");
    setCount("");
  };
  return (
    <div className="container my-5">
      <form>
        <div className="col-md-6">
          <label className="form-label">Url:</label>
          <input type="text" className="form-control" placeholder="Url" value={url} onChange={onUrlInputChange}></input>
        </div>

        <div className="col-md-6">
          <label className="form-label">Count:</label>
          <input type="number" className="form-control" placeholder="Count" value={count} onChange={onCountInputChange}></input>
        </div>
        <div className="mb-3"></div>
        <button type="submit" className="btn btn-primary" onClick={(event)=>handleSubmit(event)} > Submit </button>
      </form>
    </div>
  );
}

export default App;
