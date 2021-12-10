import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Heading = styled.h1`
  color: #01FF70;
  font-size: 32px;
  text-align: center;
  margin: 50px;
`
const FlexDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 50px;
`
const Link = styled.a`
  color: #4FDEE5;
  text-decoration: none;
`
const StyledInput = styled.input`
  background: black;
  color: #F5B041;
`
const GetButton = styled.button`
  background-color: black;
`
const GetSpan = styled.span`
  color: #01FF70;
`
const BooksDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`
const IdText = styled.p`
  color:#4FDEE5;
`
const AuthorText = styled.p`
  color: #F5B041;
`

export const App = () => {
  const [books, setBooks] = useState([])
  const [input, setInput] = useState()

  const BOOKS_API =
    "https://a-book-api.herokuapp.com/books";

  useEffect(() => {
    fetch(BOOKS_API)
      .then((res) => res.json())
      .then((json) => setBooks(json.response));
  }, []);

  const checkKey = (event) => {
    if (event.keyCode === 13 && !event.shiftKey) {
        
    }
}

  console.log(books);
  return (
    <>
      <section>
        <div>
          <div>
            <Heading>BOOKS</Heading>
            <FlexDiv>
              <p>Books from: <Link href='https://a-book-api.herokuapp.com'>A Book API</Link></p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <p>API endpoints: <Link href='https://a-book-api.herokuapp.com/endpoints'>A Book API/endpoints</Link></p>
            </FlexDiv>
            <FlexDiv>
              <div>
                <p>Books by Id nr:</p>
                <StyledInput type="text" id="id" onChange={(event) => setInput(event.target.value)} onKeyDown={(event) => checkKey(event)}/>
                <a href={`https://a-book-api.herokuapp.com/books/id/${input}`}>
                  <GetButton><GetSpan>GET</GetSpan></GetButton>
                </a>
              </div>

              <div>
                <p>Books by Title:</p>
                <StyledInput type="text" id="id" onChange={(event) => setInput(event.target.value)}/>
                <a href={`https://a-book-api.herokuapp.com/books?title=${input}`}>
                <GetButton><GetSpan>GET</GetSpan></GetButton>
                </a>
              </div>

              <div>
                <p>Books by Author:</p>
                <StyledInput type="text" id="id" onChange={(event) => setInput(event.target.value)}/>
                <a href={`https://a-book-api.herokuapp.com/books?author=${input}`}>
                <GetButton><GetSpan>GET</GetSpan></GetButton>
                </a>
              </div>

              <div>
                <p>Books by ISBN nr:</p>
                <StyledInput type="text" id="id" onChange={(event) => setInput(event.target.value)} onKeyDown={(event) => checkKey(event)}/>
                <a href={`https://a-book-api.herokuapp.com/books/isbn/${input}`}>
                <GetButton><GetSpan>GET</GetSpan></GetButton>
                </a>
              </div>

              <div>
                <p>Books by nr of pages:</p>
                <StyledInput type="text" id="id" onChange={(event) => setInput(event.target.value)} onKeyDown={(event) => checkKey(event)}/>
                <a href={`https://a-book-api.herokuapp.com/books/pages/${input}`}>
                <GetButton><GetSpan>GET</GetSpan></GetButton>
                </a>
              </div>

              <div>
                <p>Books by rating 1-5:</p>
                <StyledInput type="text" id="id" onChange={(event) => setInput(event.target.value)} onKeyDown={(event) => checkKey(event)}/>
                <a href={`https://a-book-api.herokuapp.com/books/rating/${input}`}>
                <GetButton><GetSpan>GET</GetSpan></GetButton>
                </a>
              </div>
            </FlexDiv>

          </div>
          <Heading>List of all books:</Heading>
          {books.map((book) => (
            <BooksDiv key={book.bookID}>
              <IdText>{book.bookID}.</IdText>
              &nbsp;
              <p>{book.title}</p>
              &nbsp;
              <AuthorText>by: {book.authors}</AuthorText>
            </BooksDiv>
          ))}
        </div>
      </section>
    </>
  );
};












/* export const App = () => {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    isLoading(true)
    fetch(`https://a-book-api.herokuapp.com/books`)
      .then((res) => res.json())
      .then((json) => setBooks(json));
  }, []);
  
  console.log("books2:", books)

  return (
    <div>
      <h1>BOOKS!</h1>
      {books.response.map((book) => {
      return (
        <div key={book.bookID}>

        </div>
      )}
      )}  
    </div>
  )
} */
