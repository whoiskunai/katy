import React from 'react'

import PropTypes from 'prop-types'

import './testimonial-card1.css'

const TestimonialCard1 = (props) => {
  return (
    <div
      className={`testimonial-card1-testimonial-card ${props.rootClassName} `}
    >
      <div className="testimonial-card1-testimonial">
        <img
          alt={props.picture_alt}
          src={props.picture_src}
          className="testimonial-card1-image"
        />
        <span className="testimonial-card1-text">{props.name}</span>
        <span className="testimonial-card1-text1">{props.role}</span>
        <span className="testimonial-card1-text2">{props.quote}</span>
        <div className="testimonial-card1-container">
          <a
            href={props.link_button}
            target="_blank"
            rel="noreferrer noopener"
            className="testimonial-card1-link button"
          >
            {props.button}
          </a>
        </div>
      </div>
    </div>
  )
}

TestimonialCard1.defaultProps = {
  button: 'Button',
  button1: 'Button',
  link_button: '',
  button2: 'Button',
  button3: 'Button',
  role: 'Model',
  picture_alt: 'profile',
  name: 'Jane Doe',
  rootClassName: '',
  picture_src:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&w=200',
  quote:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem lorem, malesuada in metus vitae, scelerisque accumsan ipsum.  Nam pellentesque nulla leo, sagittis vehicula sem commodo nec.',
}

TestimonialCard1.propTypes = {
  button: PropTypes.string,
  button1: PropTypes.string,
  link_button: PropTypes.string,
  button2: PropTypes.string,
  button3: PropTypes.string,
  role: PropTypes.string,
  picture_alt: PropTypes.string,
  name: PropTypes.string,
  rootClassName: PropTypes.string,
  picture_src: PropTypes.string,
  quote: PropTypes.string,
}

export default TestimonialCard1
