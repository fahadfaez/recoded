import React from 'react';
import data from '../data.json'
import dataTest from './test.json'

const Main = () => {
  const joiningCriteria = [
    'People between the ages of 18 and 35 years.',
    'A demonstrated passion for coding and technology.',
    'The time and capacity to commit to a full coding bootcamp. Classes are three times per week in person at one of our learning hubs.',
    'An intermediate level of English comprehension.',
    'The aptitude to succeed in the selection process.',
  ];

  let infoCountries =[]

  let showKey = false

  const showAwsome = ()=> {
    let x = document.getElementById("awesome");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  const showMoreInfo = () => {
    let infoCountries = dataTest.map((info,index) => {
      return (
        info.countries
      )

    })
    console.log(infoCountries)
  }


  return (
    <section class="bootcamp">
      {/* Where should the following h2 tag be displayed? Center or right? and why? */}
      {/* Type your answer here */}
      <h2 class="align-right" style={{ textAlign: 'center' }}>
        Re:Coded Front-End Web Development Bootcamp
      </h2>
      <h3>What is our bootcamp</h3>
      {/* Make every 'Front-End Web Development' sentence in the following article bold */}
      {/* DONE */}
      <p>
        Our <strong> Front-End Web Development </strong> Bootcamp is designed to kickstart your
        career as junior web developer or as an entrepreneur with a vision to
        build your own website, app or software solution.
      </p>
      <p>
        As a non-profit organization we have partnered with Flatiron School in
        New York, one of the leading coding schools in the world. That allows us
        to teach their <strong> Front-End Web Development </strong> course introducing you to HTML
        and CSS. We provide additional training on React, a library for building
        user interfaces maintained by Facebook and Instagram. And during our
        program, you will learn JavaScript, all of which will allow you to build
        amazing websites and accelerate your journey to becoming a working Web
        Developer!
      </p>
      <p>
        By the end of the program, you will have a portfolio of completed
        projects to highlight your achievements.
      </p>
      <p>
        The <strong> Front-End Web Development </strong> course will take approximately 3.5 months
        with 10 hours per week of in-person training and 15-25 hours per week of
        self-study.
      </p>
      <p>
        The last 1.5 month of the bootcamp will be dedicated to a final project
        to help you build your portfolio of work.
      </p>
      <p>Our programs are all in english.</p>
      <h3>Who can join</h3>
      {/* What are the differences between <ul> and <ol>? */}
      {/* <ul>  defines unordered list( bullets ) while <ol> defines ordered list (numberd) */}
        {
          joiningCriteria.map (e => {
            return (
              <li key={e}>{e}</li>
            )
          })
        }
      <div class="buttons">
        {/* Using CSS, try to provide multiple methods to display these divs in a row like the attached pictures. Keep one of the methods, and comment out the rest */}
        
        <div class="searchDiv">
          <form id="search">
            <input
              type="text"
              name="searchBox"
              id="searchBox"
              placeholder="search bootcamps"
            />
            {/* When clicking the "search" button, search the camps in JSON file by country and display the search results in the '#searchResults' div. */}
            <input type="submit" id="searchBtn" value="search" />
          </form>
          <div id="searchResults"></div>
        </div>
        
        <div class="awesomeDiv">
          <button id="awesomeBtn" onClick={showAwsome}>I'm Awesome</button>
          {/*  When clicking the "I'm Awesome" button, display the content of '#awesome' div. When clicking it again, hide the content of '#awesome' div. */}
          {/*  DONE */}
          <div id="awesome">
            <p>
              <em>I'm awesome, I'm doing the js part</em>
            </p>
          </div>
        </div>
        
        <div class="infoDiv">
          {/* When clicking "More Info" button, get the countries and bootcamps data from the JSON file and display them in the '#dataDisplay' div. */}
          <button id="infoBtn" onClick={showMoreInfo}>More Info</button>

        </div>

        <div id="dataDisplay">
        {
          infoCountries.map(country => {
            return (
              <p>{country}</p>
            )
          })
        }
        </div>
        
        
      </div>
      {/* ##Delete the wrong fact/facts in the comments below */}
      {/* 2. The same class can be used multiple times, but the same id can be used only once */}
      {/* 3. In CSS, '#' refers to id while '.' refers to class */}
    </section>
  );
};

export default Main;
