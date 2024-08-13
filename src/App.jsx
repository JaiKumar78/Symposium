import React, { useState, useEffect } from 'react';
import Timer from './component/countdown';
import clgLogo from './assets/clg-logo.png';
import deptLogo from './assets/sympo_logo.png';
import code from './assets/code.jpg';
import insta from './assets/file.png';
import RainEffect from './component/RainEffect';
import './App.css';

const App = () => {

  const register = () => {
    const url = "https://conoscenza2024.stjosephstechnology.ac.in/registration/";
  window.open(url, '_blank');
  }

  const instagram = () => {
    const url = "https://www.instagram.com/p/C-NcS4NBabf/?igsh=MXU4eTNmdzZyc2M3Yw==";
  window.open(url, '_blank');
  }
  return (
    <div className="app">
      <section className="title">
      <RainEffect />
        <div className="title-card glitch">
          <h1>
            AIZ<span>E</span>N
          </h1>
        </div>
      </section>

      <section className='countdown'>
      <h1>St. Joseph's Institute of Technology</h1>
      <h2>Department of Artificial Intelligence & Data Science <br /> presents</h2>
      <div className="clg-dept">
          <div className='img'>
            <img src={deptLogo} alt="" />
          </div>
          <div className='clg-name'>
            <h1>AIZEN 2k24</h1>
          </div>
          <div className='img'>
            <img src={clgLogo} alt="" />
          </div>
        </div>
        <Timer targetDate={"2024-09-28"} />
        <button className='register' type='button' onClick={register}>REGISTER</button>
      </section>

      <section className='about'>
        <h3>About</h3>
        <div className="info">
          <p>
          The Artificial Intelligence and Computer Science Symposium is a prestigious gathering that unites thought leaders, researchers, and professionals from the fields of AI and CS. This symposium serves as a platform to discuss groundbreaking developments, emerging trends, and the future trajectory of these rapidly evolving domains. With a diverse range of events, including keynote speeches, panel discussions, and interactive workshops, participants will delve into topics such as machine learning, data science, robotics, and the ethical implications of AI. The symposium fosters an environment of innovation and collaboration, encouraging attendees to exchange ideas, network, and gain insights into the cutting-edge technologies shaping our world.
          </p>
          <img src={code} alt="" />
        </div>
      </section>

      <section className='events'>
        <h1>Events</h1>
        <div className="card mystery-twist" style={{backgroundColor: "#e63946"}}>
          <h1>Mystery Twist</h1>
          <div className='rules-reg'> 
            <div className="rules">
            <h2>Rules</h2>
              <ul>
                <li> Each team must have exactly 4 members.</li>
                <li>Teams must decide on their participants for each round in advance, except for the
    bonus round.</li>
                <li> Marks will be allocated based on performance in each round.
                </li>
                <li>he team with the highest marks at the end of all rounds will be the winner.</li>
                <li> The name and nature of each round will be revealed just before the round begins.</li>
                <li>The bonus round will be a surprise and will be announced during the event.
                </li>
                <li>The decisions made by the event organizers are final and binding.
                </li>
                <li>Any form of cheating will lead to immediate disqualification.
                </li>
                <li> Participants are not allowed to use personal equipment unless explicitly permitted
                by the organizers.</li>
                <li>No substitutions are allowed once the event begins, the original team members
                must participate in all rounds.</li>
              </ul>
            </div>
            <div className="rounds">
            <h2>Rounds</h2>
              <h3>Rapid Fire</h3>
              <ul style={{listStyle: "none"}}>
                <li>There will be a total of 10-15 questions printed and given to the contestants, with each question carrying 2 points.</li>
                <li>The first team to finish the questions in the given time with correct answers and faster time gets higher points.</li>
              </ul>
              <h3>Algorithm Guessing</h3>
              <ul style={{listStyle: "none"}}>
                <li>Machine learning models' definitions or their features will be given, and the participants have to guess them correctly.</li>
                <li>A person will describe the model or feature, and the description will not be repeated more than twice.</li>
                <li>The first team to answer correctly gets the point.</li>
              </ul>
              <h3>Debugging</h3>
              <ul style={{listStyle: "none"}}>
                <li>Simple code with errors will be given to the contestants, who must debug the code and achieve the correct result without any errors.</li>
                <li>Each code will contain 5 errors, and 2 points will be awarded for each error solved.</li>
                <li>There will be 2-3 questions, and each correctly answered question will earn 10 points.</li>
              </ul>
              <h3>Tech Talk</h3>
              <ul style={{listStyle: "none"}}>
                <li>Each team will be given a topic to speak on for about 1-3 minutes, with 30 seconds of preparation time.</li>
                <li>Teams will be evaluated based on the creativity and innovation of their presentation.</li>
                <li>The most appealing talk will receive the highest points, followed by the next best.</li>
              </ul>
              <h3>Spell Bee</h3>
              <ul style={{listStyle: "none"}}>
                <li>This is the final round, where each remaining candidate will be given 5 unique tech words to spell.</li>
                <li>Each correctly spelled word will earn 2 points, with no points awarded for incorrect spellings.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card think-sink" 
        style={{
          backgroundColor: "#f1faee",
          color: "#023047"}}>
          <h1>Think Or Sink</h1>
          <div className="rules-reg">
            <div className="rules">
            <h2>Rules</h2>
            <ul>
              <li>Each team consists of 2 members.</li>
              <li>Teams must adhere to the time limits set for each round.</li>
              <li>Participants must work together as a team. External help or the use of unauthorized resources is strictly prohibited.</li>
              <li>The judges' decisions are final in all matters related to scoring, time management, and rule enforcement.</li>
              <li>Any form of cheating, including using mobile phones or other devices during the rounds, will result in immediate disqualification.</li>
            </ul>
            </div>
            <div className="rounds">
            <h2>Rounds</h2>
            <h3>Mind in Motion</h3>
            <ul>
              <li>Teams must complete the puzzle before they are allowed to answer the MCQ. Any answers given before the puzzle is completed will not be considered.</li>
              <li>After completing the puzzle, within 5 seconds, teams have to answer the MCQ. The timer starts as soon as the puzzle is completed.</li>
              <li>Points are awarded for correct answers. Bonus points are awarded for completing the puzzle and answering the MCQ quickly.</li>
            </ul>

            <h3>AI Connects</h3>
            <ul>
              <li>A series of images will be displayed on the projector, and teams must connect the images to identify the underlying technical word or concept.</li>
              <li>Teams have to answer within 1 minute and submit their answer. No additional time will be provided.</li>
              <li>Each team is allowed to submit only one answer. Multiple submissions are not permitted.</li>
              <li>Points are awarded for correct answers. Bonus points may be awarded for creativity in connecting the images.</li>
              <li>Teams are not allowed to request hints from the Volunteers or organizers. The images should be interpreted based solely on team discussion.</li>
            </ul>

            <h3>The Last AI Standing</h3>
            <ul>
              <li>Teams will be given a specific survival scenario, on which they must base their survival kit. The scenario details cannot be changed.</li>
              <li>Teams must select features from multiple AI products (3 AI products) in a random manner to build their survival kit, focusing on specific features.</li>
              <li>Teams have 5 minutes to discuss and think.</li>
              <li>Teams have to defend their choices against other teams or judges.</li>
              <li>Teams are scored based on the effectiveness, creativity, and coherence of their survival kit, as well as the strength of their justification during the debate.</li>
              <li>The team that has a high score in both previous rounds (1 and 2) will have the advantage of choosing any 3 AI products of their choice.</li>
            </ul>

            </div>
          </div>
        </div>
        <div className="card brain-teasers" 
        style={{backgroundColor: "#a8dadc",
                color: "#fca311"
        }}>
          <h1>Brain Teasers</h1>
          <div className="rules-reg">
            <div className="rules">
            <h2>Rules</h2>
            <ul>
              <li>Team Size: Each team may consist of 2-4 members, but no more than that.</li>
              <li>Event Duration: May consume 2-3 hours from the commencement of the event.</li>
              <li>Gameplay: Participants can play as a team until the end of the round; there is no elimination of members in between.</li>
              <li>Final Decision: In case of any confusion, the actions taken by the judge are final, and no compromise will be accepted.</li>
              <li>Fairplay: If any team or player is found cheating or engaging in malpractices, such as using mobile phones or copying, the team will be eliminated without any questions.</li>
            </ul>
            </div>
            <div className="rounds">
              <h2>Rounds</h2>
              <h3>Connexions</h3>
              <ul>
                <li>A normal connection round where a group of pictures will be displayed and a hint will be given. Players have to find the word based on the images and hint within the stipulated time.</li>
                <li>The total number of questions would be 30-40, and each question will carry 1 mark. 60 seconds time will be allotted for every question.</li>
                <li>At the end of the round, the top 15 teams will move forward to the next round based on the marks scored.</li>
              </ul>

              <h3>Jeopardy</h3>
              <ul>
                <li>Jeopardy is a quiz-like round where the participants will be given 5 different domains to choose from, and from each domain, you will have 5 levels of questions.</li>
                <li>The participants will have the right to choose the domain and level of difficulty. The hardest question will carry the highest mark. For each wrong answer, the team will receive negative marks.</li>
                <li>Each question comes with a hint. If a hint is used to answer the question, the team will receive lesser marks than the original mark.</li>
                <li>If a team gives a wrong answer, the team will lose the chance to choose the next question.</li>
                <li>From the 15 teams, only 10 teams will move forward to the next round based on the scores.</li>
              </ul>

              <h3>Less Is More</h3>
              <ul>
                <li>This round involves participants finding the word based on the clues displayed.</li>
                <li>Teams will be given 5 clues to find the word. The team that finds the answer with fewer clues will receive the highest points. There is a negative mark for each wrong answer given whenever the team answers wrong after each clue.</li>
                <li>At the end of this round, 5 teams will move forward to the next round.</li>
              </ul>

              <h3>Maathi Yosi!!!</h3>
              <ul>
                <li>The rules are as simple as a usual Maathi Yosi round. One member from each team will come up, and a question will be asked. The contestant should give an answer different from the question.</li>
                <li>Each participant will be given a single chance, and the team that lasts the longest is the winner. The answers must only be in English!</li>
              </ul>
            </div>
          </div>

        </div>
        <div className="card code-bounty" 
        style={{backgroundColor: "#457b9d",
                color: "#fb5607"
        }}>
          <h1>Code Bounty</h1>
          <div className="rules-reg">
            <div className="rules">
              <h2>Rules</h2> 
              <ul>
                <li>Each team must have exactly 2 members.</li>
                <li>In the event of a tie, a surprise tiebreaker round will be conducted to determine the final rankings.</li>
                <li>The decisions made by the event organizers are final and binding.</li>
                <li>Any form of cheating will lead to immediate disqualification.</li>
                <li>Participants are not allowed to use personal equipment unless explicitly permitted by the organizers.</li>
                <li>No additional members or substitutions are allowed once the event begins.</li>
              </ul>
            </div>
            <div className="rounds">
            <h2>Rounds</h2>
            <h3>Round-1</h3>
              <ul>
                <li>This round consists of some MCQ questions given to each team.</li>
              </ul>

              <h3>Round-2</h3>
              <ul>
                <li>The code will be partially filled. The task of each team is to complete the code and execute the output.</li>
              </ul>

              <h3>Round-3</h3>
              <ul>
                <li>Each team will be given a problem to solve.</li>
                <li>The backspace key won't be working while solving the problem.</li>
              </ul>

              <h3>Round-4</h3>
              <ul>
                <li>Each team will be given a website which consists of problems to solve and hints hidden in the website.</li>
                <li>There will be a maximum of three hints.</li>
              </ul>

            </div>
          </div>
        </div>
        <div className="card ctf"
         style={{backgroundColor: "#1d3557",
          color: "#ffddd2"
         }}>
          <h1>Capture The Flag</h1>
          <div className="rules-reg">
            <div className="rules">
            <h2>Rules</h2>
            <ul>
              <li>Capture the Flag features two main challenges: AI Bingo and the Data Hunt Challenge.</li>
              <li>Participants compete in teams of two.</li>
            </ul>
            </div>
            <div className="rounds">
              <h2>Rounds</h2>
              <h3>AI Bingo</h3>
                <ul>
                  <li>Teams will participate in a fun and educational game of AI Bingo.</li>
                  <li>Each team will receive a bingo card with AI-related terms and must recognize terms based on clues provided by the host.</li>
                  <li>This round will shortlist some teams to advance to the next round.</li>
                </ul>

                <h3>Data Hunt</h3>
                <ul>
                  <li>Teams will tackle tasks at separate data stations, solving one task per station.</li>
                  <li>The first team to collect 5 flags will be declared the winner of this round.</li>
                </ul>

            </div>
          </div>
         </div>
      </section>

      <section className='footer'>
        <div className="venue">
          <div className="location">
          <h2>Venue</h2>
          <h3>St. Joseph's Institute of Technology, <br /> Semmancheri, Chennai, <br /> 600 119</h3>
          </div>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.587710835929!2d80.2158546758562!3d12.869884617098613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525bbb618d3ea9%3A0x90b3767be093efaa!2sSt.Joseph&#39;s%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1723520210253!5m2!1sen!2sin"
              width="300"
              height="300"
              style={{ border: 0, borderRadius: "25px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="social">
          <h2>Social Connectionns</h2>
          <p>For more updates follow our social handles!</p>
          <img src={insta} alt="" onClick={instagram}/>
          <hr />
          <p>
          FOR ANY FURTHER CLARIFICATION CONTACT: 88384 11849, 82201 55466</p>
        </div>
      </section>

    </div>
  );
}

export default App;
