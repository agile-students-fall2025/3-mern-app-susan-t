import React, { useEffect, useState } from 'react'
import axios from 'axios'

const AboutUs = () => {
  const [about, setAbout] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    axios
      .get('http://localhost:5002/about')
      .then(res => setAbout(res.data))
      .catch(err => {
        console.error(err)
        setError('Failed to load About Us information')
      })
  }, [])

  if (error) return <p>{error}</p>
  if (!about) return <p>Loading...</p>

  return (
    <div className="about-page">
      {/* Display page header */}
      <h1>{about.pageName}</h1>
      <br></br>
      
      {/* Display name */}
      <h2>{about.name}</h2>

      {/* Display photo */}
      <img src={about.photo} alt={about.name} width="200" />

      {/* Display bio as multiple paragraphs */}
      {about.bio.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  )
}

export default AboutUs
