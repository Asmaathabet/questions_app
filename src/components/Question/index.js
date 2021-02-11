
import React, { useState } from 'react';
import light from '../../assets/light.svg';
import clock from '../../assets/clock.svg';
import minus from '../../assets/minus.svg';
import differnt from '../../assets/differnt.svg';
import coins from '../../assets/coins.svg';
import wrong from '../../assets/wrong.svg';
import tag from '../../assets/tag.svg';
import {Link } from 'react-router-dom';
import AlertBox from './AlertBox'

import './style.css'
const Question = (questions) => {
    const Qs = questions.questions; 
    console.log(Qs);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [answer, setAnswer] =useState(false);
	const [enable, setEnable] = useState(false);
    
const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setAnswer(true);
			setScore(score + 1);
		} else {
			setAnswer(false);
		}
		setEnable(true);
	};
const handleNextQuestion = () =>{
	setEnable(false);
	const nextQuestion = currentQuestion + 1;
		if (nextQuestion < Qs.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
}
const handleAnswer = ()=>{

		
}	
	
    return (
    <div className='Question'>
       {showScore ? (
				<div className='score-section'>
				 نتيجتك هي  {score}
				  من {Qs.length}
				</div>
			) : (
				<>
					<div className='question-section'>

						<div className='question'>
							<div className="side_icon">
								<button>
									<img src={differnt} />
									<text>المفردة<br/> الشاذة </text>
								</button>
							</div>
							<div className="sign">
								<img src={wrong} />
							</div>
							<div className="counter">
								<button>	
									<span>124</span>
									<img src={coins} />
								</button>
							</div>
						</div>
						<div className="question-title">
							<img src={tag} />
						<div className='question-text'>{Qs[currentQuestion].questionText}</div>
						</div>
					</div>
					<div className='answer-section'>
						{Qs[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
					<div className='buttons-section'>
						<button><img src={light} /></button>
						<button><img src={clock} /></button>
						<button><img src={minus} /></button>
					</div>
		{enable ? ( 
			answer ? ( 
				<div className="RightAnswer">
					<span> إجابة صحيحة </span>
					<button onClick={handleNextQuestion}>التالي</button>
					</div> ):( 
					<div className="WrongAnswer">
					الإجابة الصحيحة هي  
					{Qs[currentQuestion].answerOptions.map((answerOption) => (
							answerOption.isCorrect? 
							<span> { answerOption.answerText}</span> : <></>
						))}
					<button onClick={handleNextQuestion}>التالي</button>
					</div> 
					) ) :(
					<div className='vertification-section'>
						<Link to="/">
						<button className='logout'>
						خروج
						</button>
						</Link>
						<button className='note'>إغلاق صندوق الملاحظة</button>
						<button className='confirm' onClick={() =>handleAnswer(answer)}>تحقق من الإجابة</button>
					</div>
					)}
				</>
			)}
		</div>

)}

export default Question;
