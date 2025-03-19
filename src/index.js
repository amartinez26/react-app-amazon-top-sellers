import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { books } from './books'
import Book from './Book'

// function Greeting() {
//   return <h2>My First Component</h2>
// }

// const Greeting = () => {
//   return React.createElement(
//     'div',
//     {},
//     React.createElement('h2', {}, 'hello world')
//   )
// }

// const Greeting = () => {
//     return (
//       <>
//         <div className="someValue">
//           <h3>hello people</h3>
//           <ul>
//             <li>
//               <a href="#">hello world</a>
//             </li>
//           </ul>
//         </div>
//         <h2>hello world</h2>
//         <input type="text" name="" id="" />
//       </>
//     )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'))

// root.render(<Greeting />)

// const EventExamples = () => {
//   const handleFormInput = () => {
//     console.log('handle form input')
//   }
//   const handleButtonClick = () => {
//     alert('handle button click')
//   }
//   const handleFormSubmission = (e) => {
//     e.preventDefault()
//     console.log('form submitted')
//   }
//   return (
//     <section>
//       <form onSubmit={handleFormSubmission}>
//         <h2>Typical Form</h2>
//         <input
//           type="text"
//           name="example"
//           onChange={handleFormInput}
//           style={{ margin: '1rem 0' }}
//         />
//       </form>
//       <button onClick={handleButtonClick}>click me</button>
//     </section>
//   )
// }

const BookList = () => {
  return (
    <>
      <h1>amazon best sellers</h1>
      <section className="booklist">
        {books.map((book, index) => {
          return (
            <Book {...book} key={book.id} index={index} />
          )
        })}
      </section>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
