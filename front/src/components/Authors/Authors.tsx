import React from "react";

import { useAuthorsStore } from "./../../store/authors";

import Author from "./../Author/Author";

import { AuthorsContainer } from "./Authors.styled";

const createAuthor = (author: string[]) => {
  return {
    fullName: author[0],
    avatar: author[1],
    _id: author[2],
  };
};

const authorsNew = (authors: Array<string[]>) => {
  return authors.map((author: string[]) => createAuthor(author));
};

const Authors = (): React.ReactElement => {
  const {
    authors,
    getAuthors,
  }: { authors: string[] | any; getAuthors: () => void } = useAuthorsStore();

  React.useEffect(() => {
    getAuthors();
  }, []);

  return (
    <AuthorsContainer>
      {authors !== null && (
        <>
          {authorsNew(authors).map(
            (author: { fullName: string; avatar: string; _id: string }) => {
              const { fullName, avatar, _id } = author;
              return (
                <Author
                  key={_id}
                  fullName={fullName}
                  avatar={avatar}
                  _id={_id}
                />
              );
            }
          )}
        </>
      )}
    </AuthorsContainer>
  );
};

export default Authors;
