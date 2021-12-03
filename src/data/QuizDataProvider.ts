import reactQuiz from "./quizzesData/React";

const getQuizData = (quizName: string) => {
  let data: { question: string; answer: boolean }[] = [];

  switch (quizName) {
    case "React":
      data = reactQuiz;
      break;
    default:
      throw new Error("Invalid quiz name");
  }
  console.log(data);
  return data;
};

export default getQuizData;
