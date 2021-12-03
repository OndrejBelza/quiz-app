import { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Steps } from "primereact/steps";
import getQuizData from "../data/QuizDataProvider";
import { Button } from "primereact/button";
import Confetti from "react-confetti";
import useWindowSize from "../hooks/useWindowSize";

const Quiz: FC = () => {
  const [index, setIndex] = useState(0);
  const { width, height } = useWindowSize();
  const [questions, setQuestions] = useState<
    { question: string; answer: boolean }[]
  >([]);

  const [answers, setAnswers] = useState<boolean[]>([]);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(params);
    if (!params.name) navigate("/");

    setQuestions(getQuizData(params.name as string));
  }, [params, navigate]);

  const steps: { label: string }[] = [];
  for (let i = 1; i < 11; i++) {
    steps.push({ label: "" });
  }

  const handleQuestionAnswer = (answer: boolean) => {
    setAnswers((a) => [...a, answer]);
    setIndex((i) => i + 1);
  };

  const getScore = () => {
    let totalScore = 0;
    for (let i = 0; i < 10; i++) {
      if (questions[i].answer === answers[i]) totalScore++;
    }
    return totalScore;
  };

  return (
    <>
      <div className="p-grid p-justify-center">
        <div className="p-col-8">
          <Steps model={steps} activeIndex={index} className="p-mt-2" />
        </div>
      </div>
      {questions && questions.length && (
        <>
          {index < 10 ? (
            <div className="p-grid p-dir-col p-align-center">
              <div className="p-col-8">
                <h3 className="p-text-center">Question {index + 1}</h3>
                <p className="p-text-center">{questions[index].question}</p>
              </div>

              <div className="p-col-8 p-d-flex p-jc-evenly">
                <Button
                  label="true"
                  onClick={() => handleQuestionAnswer(true)}
                />
                <Button
                  label="false"
                  onClick={() => handleQuestionAnswer(false)}
                />
              </div>
            </div>
          ) : (
            <>
              <h2 className="p-text-center">Your result</h2>
              <p className="p-text-center">{getScore()}/10</p>
              <div className="p-d-flex p-jc-center">
                <Button label="Go back" onClick={() => navigate("/")} />
              </div>
              {getScore() >= 7 && <Confetti width={width} height={height} />}
            </>
          )}
        </>
      )}
    </>
  );
};

export default Quiz;
