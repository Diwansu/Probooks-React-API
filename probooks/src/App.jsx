import axios from "axios";
import "./App.css";
import { useState, useEffect } from "react";

export default function App() {
  const [state, setState] = useState([]);

  useEffect(() => {
    axios
      .get("https://reactnd-books-api.udacity.com/books", {
        headers: { Authorization: "whatever-you-want" },
      })
      .then((res) => setState(res.data.books))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {state.map((e) => (
        <div key={e.id}>
          <hr />
          <div className="container">
            <div className="flex-adjust">
              <h2>{e.title}</h2>
              {e.imageLinks?.thumbnail && (
                <img src={e.imageLinks.thumbnail} alt="image" />    
              )}
              <h2>{e.authors}</h2>
            </div>
            <p>{e.description}</p>
          </div>
        </div>
      ))}
    </>
  );
}
