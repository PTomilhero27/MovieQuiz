/* eslint-disable no-console */
/* eslint-disable func-names */
/* eslint-disable arrow-parens */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable quotes */
/* eslint-disable react/react-in-jsx-scope */
import Head from 'next/head';
import { useRouter } from 'next/router';
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubConer from '../src/components/GitHubConer';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import QuizContainer from '../src/components/QuizContainer';
import Link from '../src/components/Link';
import { motion } from 'framer-motion';


export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState("");

  return (

    <QuizBackground backgroundImage={db.bg}>

      <Head>
        <title>MovieQuiz</title>
      </Head>

      <QuizContainer>


        <Widget
          as={motion.section}
          transition={{dalay: 0 ,duration: 0.5}}

          variants={{
            show: { opacity: 1, y: "0" },
            hidden: { opacity: 0, y: "100%" }
          }}

          initial="hidden"
          animate="show"
        >
          <Widget.Header>
            <h1>Descubra o seu conhecimento sobre Filmes</h1>
          </Widget.Header>

          <Widget.Content>
            <form onSubmit={function (event) {
              event.preventDefault();
              router.push(`/quiz?name=${name}`);
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

        <Widget
          as={motion.section}
          transition={{dalay: 0.5 ,duration: 0.5}}
          variants={{
            show: { opacity: 1, y: "0" },
            hidden: { opacity: 0, y: "100%" }
          }}

          initial="hidden"
          animate="show"
        >
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <ul>
              {db.external.map((linkExterno) => {
                const [projectName, githubUser] = linkExterno
                  .replace(/\//g, '')
                  .replace('https:', '')
                  .replace('.vercel.app', '')
                  .split('.');

                return (
                  <li key={linkExterno}>
                    <Widget.Topic
                      as={Link}
                      href={`/quiz/${projectName}___${githubUser}`}
                    >
                      {`${githubUser} / ${projectName}`}
                    </Widget.Topic>
                  </li>
                );
              })}
            </ul>

          </Widget.Content>
        </Widget>

        <Footer />
      </QuizContainer>
      <GitHubConer projectUrl="https://github.com/PTomilhero27" />
    </QuizBackground >

  );
}
