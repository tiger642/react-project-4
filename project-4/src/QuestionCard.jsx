import { nanoid } from 'nanoid'
import { useEffect } from 'react'
import { useState } from 'react'

function QuestionCard(props) {
    
    

    const styles = {
        backgroundColor: props.isSelected ? "black" : "gray"
    }

    return (
        <div className='question-card'>
            <h3 className='card-title'>{props.question}</h3>
            <div className='card-answers'>
                {props.answers.map(answer => 
                <button style={styles} onClick={props.selectAnswer}>{answer}</button>
                )}
            </div>
        </div>
    )
}

export default QuestionCard