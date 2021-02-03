import React from 'react';

import db from '../../db.json';
import Widget from '../../src/components/Widget';
import QuizBackground from '../../src/components/QuizBackground';
import Button from '../../src/components/Button';
import QuizContainer from '../../src/components/QuizContainer';
import QuizLogo from '../../src/components/QuizLogo';
import AlternativesForm from '../../src/components/AlternativesForm';



function ResultWidget({ results }) {
    return (
        <Widget>
            <Widget.Header>
                Tela de Resultado
            </Widget.Header>

            <Widget.Content>

                <p> Deem o feedback no:
                    
                    <Widget.Topic
                     
                     href="https://www.instagram.com/tomilhero27/"
                    >
                        INSTAGRAM
                    </Widget.Topic>
                    {" "}
                    Voce Acertou:
                    {results.reduce((somatoriaAtual, resultAtual) => {
                        const isAcerto = resultAtual === true;
                        if (isAcerto) {
                            return isAcerto
                        }

                        return somatoriaAtual;

                    }, 0)}
                    {" "}
                </p>

                <ul>

                    {results.map((results, index) => (

                        <li key={`result__${results}`}>
                            <Widget.Topic>
                                {index + 1}
                                {" "}

                                {results === true ? "Você Acertou" : "Você Errou"}
                            </Widget.Topic>
                        </li>
                    ))}

                </ul>
            </Widget.Content>
        </Widget>
    )
}


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

function QuestionWidget({
    question,
    totalQuestions,
    questionIndex,
    onSubmit,
    addResult
}) {


    const [selectAlternative, setSelectAlternative] = React.useState(undefined);
    const [isQuestionSubmited, setIsQuestionSubmited] = React.useState(false);
    const questionId = `question__${questionIndex}`;
    const isCorrect = selectAlternative === question.answer;
    const hasAlternativeSelected = selectAlternative !== undefined;


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


                <AlternativesForm onSubmit={(infoDoEvento) => {
                    infoDoEvento.preventDefault();
                    setIsQuestionSubmited(true);
                    setTimeout(() => {
                        addResult(isCorrect);
                        onSubmit();
                        setIsQuestionSubmited(false);
                        setSelectAlternative(undefined);
                    }, 2 * 1000);


                }}>
                    {question.alternatives.map((alternative, alternativeIndex) => {
                        const alternativeId = `alternative__${alternativeIndex}`
                        const selectedAlternativeStatus = isCorrect ? "SUCCESS" : "ERROR";
                        const isSelected = selectAlternative === alternativeIndex;
                        return (


                            <Widget.Topic
                                as="label"
                                htmlFor={alternativeId}
                                key={alternativeId}
                                data-selected={isSelected}
                                data-status={isQuestionSubmited && selectedAlternativeStatus}

                            >

                                <input

                                    style={{ display: "none" }}
                                    id={alternativeId}
                                    name={questionId}
                                    onChange={() => { setSelectAlternative(alternativeIndex) }}
                                    type="radio"
                                />
                                {alternative}
                            </Widget.Topic>
                        )
                    })}

                    <Button type="submit" disabled={!hasAlternativeSelected}>
                        Confirmar
            </Button>
                    {isQuestionSubmited && isCorrect && <p>Você acertou!</p>}
                    {isQuestionSubmited && !isCorrect && <p>Você Errou!</p>}

                </AlternativesForm>

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
    const [results, setResults] = React.useState([]);
    const [currentQuestion, setCurrentQuestion] = React.useState(0);
    const questionIndex = currentQuestion;
    const totalQuestions = db.questions.length;
    const question = db.questions[questionIndex];


    function addResult(result) {
        setResults([
            ...results,
            result,
        ]);
    }




    React.useEffect(() => {
        setTimeout(() => {
            setScreenState(screenStates.QUIZ);
        }, 0.5 * 1000)
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
                        addResult={addResult}
                    />
                )}

                {screenState === screenStates.LOADING && <LoadingWidget />}

                {screenState === screenStates.RESULT && <ResultWidget results={results} />}

            </QuizContainer>
        </QuizBackground>
    );
}


export default QuizPage; 