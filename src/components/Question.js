import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";
export default function Question({
  questionText,
  answers,
  onSelectAnswer,
  answerState,
  selectedAnswer,
  onSkipAnswer,
}) {
  return (
    <div id="question">
      <QuestionTimer timeout={10000} onTimeout={onSkipAnswer} />
      <h2>{questionText}</h2>
      <Answers
        answers={answers}
        answerState={answerState}
        selectedAnswer={selectedAnswer}
        onSelect={onSelectAnswer}
      />
    </div>
  );
}
