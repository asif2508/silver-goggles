import React from 'react'
import background from '../images/background.jpg'

const PageHeading = (props) => {
  return (
    <div className="bg-center font-sans bg-cover w-full h-36 flex justify-center items-center" style={{ backgroundImage: `url(${background})` }}>
        <h1 className="text-dark-blue text-4xl font-bold">{props.title}</h1>
    </div>
  )
}

export default PageHeading