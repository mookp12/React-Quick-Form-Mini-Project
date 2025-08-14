import { useState } from "react";
import MovieList from "./MovieList";
import validateEmail from "@/utils/validateEmail";

function SurveyForm({ onSubmit }) {
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
      
      
      if (onSubmit) {
        onSubmit(data);
      }
      
      
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
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6">สำรวจความชอบภาพยนตร์</h1>
      <form
        className="flex flex-col gap-2"
        onSubmit={(event) => {
          submitHandler(event);
        }}
      >
        <label htmlFor="name">Name</label>
        <input
          id="name"
          className="border-2 border-gray-300 rounded-md p-2 w-full"
          name="name"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        {nameError ? <p className="text-red-500">Name is required</p> : <p className="text-red-500 invisible">placeholder</p>}
        <label htmlFor="email">email</label>
        <input
          id="email"
          className="border-2 border-gray-300 rounded-md p-2 w-full"
          name="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        {emailError ? <p className="text-red-500">Invalid email</p> : <p className="text-red-500 invisible">placeholder</p>}

        <label htmlFor="movie">Movie</label>
        <MovieList movie={movie} setMovie={setMovie} />
        {movieError ? <p className="text-red-500">Movie is required</p> : <p className="text-red-500 invisible">placeholder</p>}

        <label htmlFor="comment">comment</label>
        <input
          id="comment"
          className="border-2 border-gray-300 rounded-md p-2 w-full"
          name="comment"
          value={comment}
          onChange={(event) => {
            setComment(event.target.value);
          }}
        />

        <button className="bg-blue-500 text-white p-2 rounded-md w-full hover:bg-blue-600 transition-colors" type="submit">
          Submit
        </button>
        <button
          className="bg-red-500 text-white p-2 rounded-md w-full hover:bg-red-600 transition-colors"
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
