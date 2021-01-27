import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router'


import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubConer from '../src/components/GitHubConer';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import QuizContainer from '../src/components/QuizContainer'






export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState("");

  return (

    <QuizBackground backgroundImage={db.bg}>

      <Head>
        <title>MovieQuiz</title>
      </Head>

      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>Descubra o seu conhecimento sobre Filmes</h1>
          </Widget.Header>

          <Widget.Content>
            <form onSubmit={function (event) {
              event.preventDefault();
              router.push(`/quiz?name=${name}`)
              console.log("faznedo uma submissão por meio do react");
            }}>


              <Input
                name="nomeDoUsuario"
                placeholder="Nome"
                onChange={infosDoEvento => { setName(infosDoEvento.target.value); }}
                value={name}
              />


              <Button type="submit" disabled={name.length === 0}>
                {`Jogar ${name}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p>descubrem outros quizes</p>
          </Widget.Content>
        </Widget>

        <Footer />
      </QuizContainer>
      <GitHubConer projectUrl="https://github.com/PTomilhero27" />
    </QuizBackground>

  );
}
