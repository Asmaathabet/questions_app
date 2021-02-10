
import React, { useState } from 'react';

const Question = (questions) => {
    const Qs = questions.questions; 
    console.log(Qs);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
    
const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < Qs.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

    return (
    <div className='Question'>
       {showScore ? (
				<div className='score-section'>
					You scored {score} out of {Qs.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{Qs.length}
						</div>
						<div className='question-text'>{Qs[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{Qs[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>

)
}

export default Question;