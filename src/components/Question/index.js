
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
    
const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
			<AlertBox message={"success"} type ={"success"} />
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
					<div className='vertification-section'>
						<Link to="/">
						<button className='logout'>
						خروج
						</button>
						</Link>
						<button className='note'>إغلاق صندوق الملاحظة</button>
						<button className='confirm'>تحقق من الإجابة</button>
					</div>
				</>
			)}
		</div>

)
}

export default Question;