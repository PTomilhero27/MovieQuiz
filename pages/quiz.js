import React from 'react';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import Button from '../src/components/Button';
import QuizContainer from '../src/components/QuizContainer';
import QuizLogo from '../src/components/QuizLogo'



function LoadingWidget() {
    return (
        <Widget>
            <Widget.Header>
                carregando...
            </Widget.Header>

            <Widget.Content>
                [Desafio Carregando]
            </Widget.Content>
        </Widget>
    )
}

function QuestionWidget({ question, totalQuestions, questionIndex, onSubmit }) {
    const questionId = `question__${questionIndex}`
    return (
        <Widget>
            <Widget.Header>
                {/* <backLinkArrow href="/" /> */}
                <h3>
                    {`pergunta ${questionIndex + 1} de ${totalQuestions}`}
                </h3>
            </Widget.Header>

            <img
                alt="Descrição"
                style={{
                    width: "100%",
                    height: "150px",
                    objectFit: "cover",
                }}
                src={question.image}
            />
            <Widget.Content>

                <h2>
                    {question.title}
                </h2>
                <p>
                    {question.description}
                </p>


                <form onSubmit={(infoDoEvento) => {
                    infoDoEvento.preventDefault()
                    onSubmit();
                }}>
                    {question.alternatives.map((alternative, alternativeIndex) => {
                        const alternativeId = `alternative__${alternativeIndex}`
                        return (


                            <Widget.Topic
                                as="label"
                                htmlFor={alternativeId}>

                                <input
                                    style={{ display: "none" }}
                                    id={alternativeId}
                                    name={questionId}
                                    type="radio"
                                />
                                {alternative}
                            </Widget.Topic>
                        )
                    })}

                    <Button type="submit">
                        Confirmar
            </Button>
                </form>

            </Widget.Content>
        </Widget>
    );
}


const screenStates = {
    QUIZ: "QUIZ",
    LOADING: "LOADING",
    RESULT: "RESULT",
};

function QuizPage() {

    const [screenState, setScreenState] = React.useState(screenStates.LOADING);
    const [currentQuestion, setCurrentQuestion] = React.useState(0);
    const questionIndex = currentQuestion;
    const totalQuestions = db.questions.length;
    const question = db.questions[questionIndex];

    React.useEffect(() => {
        setTimeout(() => {
            setScreenState(screenStates.QUIZ);
        }, 1 * 1000)
    }, []);



    function handleSubmitQuiz() {
        const nextQuestion = questionIndex + 1;
        if (nextQuestion < totalQuestions) {
            setCurrentQuestion(nextQuestion);
        } else {
            setScreenState(screenStates.RESULT);
        }
    }

    return (
        <QuizBackground backgroundImage={db.bg}>
            <QuizContainer>
                <QuizLogo />
                {screenState === screenStates.QUIZ && (
                    <QuestionWidget
                        question={question}
                        questionIndex={questionIndex}
                        totalQuestions={totalQuestions}
                        onSubmit={handleSubmitQuiz}
                    />
                )}
                {screenState === screenStates.LOADING && <LoadingWidget />}

                {screenState === screenStates.RESULT && <div>Você acertou X questões Parabens!</div>}

            </QuizContainer>
        </QuizBackground>
    );
}


export default QuizPage; 