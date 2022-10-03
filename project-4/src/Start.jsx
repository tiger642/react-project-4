import { useState } from 'react'

function Start() {
  const [inputs, setInputs] = useState({})

  const handleChange = event => {
    const name = event.target.name
    const value = event.target.value
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = event => {
    event.preventDefault()
    localStorage.setItem('inputs', JSON.stringify(inputs))
    document.location.href="/quiz.html"
  }

  return (
    <main className="App">
      <h1>Quizzical</h1>
      <form onSubmit={handleSubmit}>
        <label>Number of Questions:</label>
        <input type='number' name='number' onChange={handleChange}></input>
        <br />
        <label>Category: </label>
        <select className='category' name='category' onChange={handleChange}>
          <option value='0' >Any Category</option>
          <option value='9' >General Knowledge</option>
          <option value='10' >Entertainment: Books</option>
          <option value='11' >Entertainment: Film</option>
          <option value='12' >Entertainment: Music</option>
          <option value='13' >Entertainment: Musicals and Theatre</option>
          <option value='14' >Entertainment: Television</option>
          <option value='15' >Entertainment: Video Games</option>
          <option value='16' >Entertainment: Board Games</option>
          <option value='17' >Science & Nature</option>
          <option value='18' >Science: Computers</option>
          <option value='19' >Science: Mathematics</option>
          <option value='20' >Mythology</option>
          <option value='21' >Sports</option>
          <option value='22' >Geography</option>
          <option value='23' >History</option>
          <option value='24' >Politics</option>
          <option value='25' >Art</option>
          <option value='26' >Celebrities</option>
          <option value='27' >Animals</option>
          <option value='28' >Vehicles</option>
          <option value='29' >Entertainment: Comics</option>
          <option value='30' >Science: Gadgets</option>
          <option value='31' >Entertainment: Japanese Anime & Manga</option>
          <option value='32' >Entertainment: Cartoon & Animations</option>
        </select>
        <br />
        <label>Difficulty: </label>
        <select className='difficulty' name='difficulty' onChange={handleChange}>
          <option value='0'>Any</option>
          <option value='easy'>Easy</option>
          <option value='medium'>Medium</option>
          <option value='hard'>Hard</option>
        </select>
        <br />
        <label>Type: </label>
        <select className='type' name='type' onChange={handleChange}>
          <option value='0'>Any Type</option>
          <option value='multiple'>Multiple Choice</option>
          <option value='boolean'>True/False</option>
        </select>
        <br />
        <input type='submit' value='Get Questions' />
      </form>
    </main>
  )
}

export default Start