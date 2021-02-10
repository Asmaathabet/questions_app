import Question from '../components/Question'

const Game = () => {
 const questions = [
		{
			questionText: 'ما هي المفردة الشاذة؟',
			answerOptions: [
				{ answerText: 'خندق', isCorrect: false },
				{ answerText: 'بئر', isCorrect: false },
				{ answerText: 'حفرة', isCorrect: false },
				{ answerText: 'مبنى', isCorrect: true },
			],
		},
	{
			questionText: 'ما هو مجموع 1+10 ؟',
			answerOptions: [
				{ answerText: '15', isCorrect: false },
				{ answerText: '21', isCorrect: false },
				{ answerText: '11', isCorrect: true },
				{ answerText: '19', isCorrect: false },
			],
		} ]

    return <Question questions={questions}/>
}

export default Game; 

