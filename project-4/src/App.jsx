import { useEffect } from 'react'
import { useState } from 'react'
import { nanoid } from 'nanoid'
import QuestionCard from "./QuestionCard"

function App() {

    const form =JSON.parse(localStorage.getItem('inputs'))
    
    const [questions, setQuestions] = useState([])

    const category = form.category ? `&category=${form.category}`: ''
    const type = form.type ? `&type=${form.type}`: ''
    const difficulty = form.difficulty ? `&difficulty=${form.difficulty}`: ''

    async function loadQuestions(form) {
        const apiReq = `https://opentdb.com/api.php?amount=${form.number + category + type + difficulty}`
        const res = await fetch(apiReq)
        const data = await res.json()
        return data      
    }

    useEffect(() => {
    loadQuestions(form)
        .then (data => {
            return setQuestions(data.results.map(item => {
                return {
                    ...item, 
                    id: nanoid(),
                    answers: item.incorrect_answers.concat(item.correct_answer),
                    isSelected: false
                    }
            }))
        })
    }, [])        



       const questionElements = questions.map(question => {    
            return  <QuestionCard 
                    key={question.id}
                    question={question.question}
                    answers={question.answers}
                    correct_answer={question.correct_answer}
                    incorrect_answers={question.incorrect_answers}
                    isSelected={question.isSelected}
                    selectAnswer={selectAnswer}
                />
        })
        
        function selectAnswer() {
            setQuestions(oldQuestions => oldQuestions.map(question => {
                return {
                    ...question,
                    isSelected: !isSelected
                }
            }))
        }

    return (
        <main>
            <div className='question-container'>
                {questionElements}
            </div>
            <button>Check Answers</button>
            
        </main>
    )
}

export default App
