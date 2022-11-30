import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';

function App() {
  const [questions,setQuestions] = useState(data)
  return (
    <main className="App">
     <div className='container'>
      <h3> Login Q&A</h3>
      <section className='info'>
        {
          questions.map((question)=> {
            return <SingleQuestion key={question.id} {...question}/>
          })
        }
      </section>
     </div>
    </main>
  )
}

export default App
