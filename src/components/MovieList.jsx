import { useState } from "react";
import movies from "@/constants/movies";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

function MovieList(props) {
    const {movie, setMovie} = props;

  return (
    <div>
      <RadioGroup value={movie} onValueChange={setMovie} className="flex flex-col gap-2">
        {movies.map((movie) => (
          <div key={movie.title} className="flex items-center space-x-2 ">
            <RadioGroupItem value={movie.title} id={movie.title}/>
            <label
              htmlFor={movie.title}
              className="text-sm font-medium leading-none"
            >
              {movie.title} {movie.year} {movie.director}
            </label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}

export default MovieList;
