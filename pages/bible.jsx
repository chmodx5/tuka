import React from "react";
import data from "../data";

const bible = () => {
  return (
    <div>
      <h1 className="uppercase text-xl font-bold">books</h1>
      <ul>
        {data.map((book) => (
          <li key={book.id}>
            {book.name} <span className="font-bold"> abbr:</span> ({" "}
            {book.abbrev})
            <span className="font-bold">
              chapters:
              {book.chapters.map((chapter, index) => (
                <>
                  <span key={index}> {index}</span>
                  <p className="font-light font-mono">
                    {chapter.map((verse, index) => (
                      <p key={index}>
                        {index}:{verse}
                      </p>
                    ))}
                  </p>
                </>
              ))}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default bible;
