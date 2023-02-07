import React from 'react'
import Button from '../Button';
import introImg from './illustration-intro.png';
import './styles.scss';

function Intro() {
  return (
    <>
      <section className='intro'>
        <img src={introImg} alt="Illustration intro" />
        <h1>
          All your files in one secure location, accessible anywhere.
        </h1>
        <p>
          Fylo stores all your most important files in one secure location. Access them wherever
          you need, share and collaborate with friends family, and co-workers.
        </p>
        <Button>
          Get Started
        </Button>
      </section>
      <article className='imageBG'>
      </article>
    </>
  )
}

export default Intro