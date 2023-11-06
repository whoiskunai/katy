import React from 'react'

import { Helmet } from 'react-helmet'

import TestimonialCard1 from '../components/testimonial-card1'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Political Misty Fox</title>
        <meta property="og:title" content="Political Misty Fox" />
      </Helmet>
      <TestimonialCard1
        name="Katy Baity"
        role="your girlfriend🤍"
        quote="I love meeting new people so come say Hi on my Onlyfans 🥰"
        button="Free Trial OnlyFans 🤍 (Claim here)"
        link_button="https://onlyfans.com/action/trial/2sz2nyrkvgz49onqtyfwtobvvhe7tz3n"
        picture_src="/whatsapp%20image%202023-11-05%20at%207.32.32%20pm-min-200w.jpeg"
        rootClassName="rootClassName1"
      ></TestimonialCard1>
    </div>
  )
}

export default Home
