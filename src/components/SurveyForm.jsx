import { useState } from "react";
import MovieList from "./MovieList";
import validateEmail from "@/utils/validateEmail";

function SurveyForm() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [movie, setMovie] = useState("");
  const [movieError, setMovieError] = useState(false);
  const [comment, setComment] = useState("");

  function submitHandler(event) {
    event.preventDefault();

    setNameError(false);
    setEmailError(false);
    setMovieError(false);

    let hasErrors = false;
    

    if (name === "") {
      setNameError(true);
      hasErrors = true;
    }
    if (!validateEmail(email)) {
      setEmailError(true);
      hasErrors = true;
    }
    if (movie === "") {
      setMovieError(true);
      hasErrors = true;
    }

    if (!hasErrors) {
      const data = { name, email, movie, comment };
      alert(JSON.stringify(data));
      setName("");
      setEmail("");
      setMovie("");
      setComment("");
      setNameError(false);
      setEmailError(false);
      setMovieError(false);
    }
  }

  function clearHandler() {
    setName("");
    setEmail("");
    setMovie("");
    setComment("");
    setNameError(false);
    setEmailError(false);
    setMovieError(false);
  }

  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      <h1 className="text-2xl font-bold">สำรวจความชอบภาพยนตร์</h1>
      <form
        className="flex flex-col gap-2 items-start"
        onSubmit={(event) => {
          submitHandler(event);
        }}
      >
        <label htmlFor="name">Name</label>
        <input
          className="border-2 border-gray-300 rounded-md p-2 w-full"
          name="name"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        {nameError && <p className="text-red-500">Name is required</p>}
        <label htmlFor="email">email</label>
        <input
          className="border-2 border-gray-300 rounded-md p-2 w-full"
          name="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        {emailError && <p className="text-red-500">Invalid email</p>}

        <label htmlFor="movie">Movie</label>
        <MovieList movie={movie} setMovie={setMovie} />
        {movieError && <p className="text-red-500">Movie is required</p>}

        <label htmlFor="comment">comment</label>
        <input
          className="border-2 border-gray-300 rounded-md p-2 w-full"
          name="comment"
          value={comment}
          onChange={(event) => {
            setComment(event.target.value);
          }}
        />

        <button className="bg-blue-500 p-2 rounded-md w-full" type="submit">
          Submit
        </button>
        <button
          className="bg-red-300 p-2 rounded-md w-full"
          type="button"
          onClick={() => {
            clearHandler();
          }}
        >
          Clear
        </button>
      </form>
    </div>
  );
}

export default SurveyForm;
