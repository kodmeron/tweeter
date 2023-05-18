import React from 'react';
import styled from "styled-components";

function Home() {
  return (
    <HomeComponent>
      <div className='outer'>
        <div className='mid'>
          <div className='inner'>

            <div className='section-bar'>
              <a href="#">Bird idenfication</a>
            </div>

            <div className='section-bar'>
              <a href="#">Birdwatching Tips</a>
            </div>

            <div className='section-bar'>
              <a href="#">Photography</a>
            </div>

            <div className='section-bar'>
              <a href="#">Birdwatching Locations</a>
            </div>

            <div className='section-bar'>
              <a href="#">Conservation and Preservation</a>
            </div>

            <div className='section-bar'>
              <a href="#">Behavior and Biology</a>
            </div>

            <div className='section-bar'>
              <a href="#">Binoculars and Gear</a>
            </div>

            <div className='section-bar'>
              <a href="#">Events and Meetups</a>
            </div>

            <div className='section-bar'>
              <a href="#">Stories and Experiences</a>
            </div>

            <div className='section-bar'>
              <a href="#">Resources</a>
            </div>

          </div>
        </div>
      </div>
    </HomeComponent>
  )
}

const HomeComponent = styled.header`
display: grid;
grid-template-columns: 20px auto 20px;
grid-template-rows: 2rem auto 2rem;
width: 100vw;

.outer {
  grid-column: 2;
  grid-row: 2;
  background-color: #D8D9CF;
}

.mid {
  
  margin: auto;
  padding: 20px;
}

.inner {
  marin: 30px;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 30px 30px 30px 30px 30px 30px 30px 30px 30px 30px;
  grid-gap: 1rem;
  width: 100%;
}

.section-bar {
  background-color: #9CA777;
}

a {
  font-size: 2rem;
  text-decoration: none;
  margin-left: 10px;
}
 
`

export default Home