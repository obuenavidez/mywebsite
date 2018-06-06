import React from "react";
//import {  Hero } from "../../components/Hero";
import {  Container } from "../../components/Grid";
import { Row, Col } from "../../components/Grid";
import Hero1 from "../../components/Hero1";
import { Link } from "react-router-dom";

//import { FormBtn } from "../../components/Form";


// import { Hero} from "../../components/Hero";
 
const Home = () => (
  <div>
    <Hero1 backgroundImage="/assets/images/ODB.NorthWestern.png">
      <center>
      <h1>Oscar D. Buenavidez Jr.</h1>
      <h3>"If you can THINK IT .... I CAN do it"</h3>
       <h3>obuenavidez@gmail.com | (773) 567-3930 | www.obuenavidez.com</h3> 

      
          
       </center>
       

    </Hero1>
    <Container style={{ marginTop: 60 }}>
      <Row>
        <Col size="md-8">
          <h1>Me in 100 words or Less ...</h1>
          
        </Col>
        <Col size="md-4">
          <h1>Quick Facts</h1>
        </Col>

      </Row>
      <Row>
        <Col size="md-8">
          <p>
          <hr/>
          
           SMART  Person, ( Specific , Measurable, Attainable , Realistic , Time Bound) , Goal Oriented, Dedicated, Taurus, Optimistic, Good Follower , Great Leader , I Listen More , Laugh my Heart Out, Admire Michael Jordan, Loves singing , loves nature, Sinatra, Stevie Wonder , Lionel Richie, Bread . watch Denzel Washington and Johnny Depps movies , Loves my Nanay so much , Family First Attitude , I dont rest til it done. Have a great faith above. React Addict :) <Link to="/aboutme"> > click here to know me more ...</Link>


          </p>
        </Col>
        <Col size="md-4">
        <p>
            <hr/>
            <ul>
              <li> Age  : <strong>41</strong> </li>   
              <li>Zodiac  : <strong>Taurus</strong></li>
              <li>Country of Birth  : <strong>Philippines</strong></li>
              <li>Yrs of Experience : <strong>Senior Level (10 + years)</strong></li>
              <li>Yrs in Chicago , IL USA : <strong>15</strong></li>
            </ul>
        </p>

        </Col>

      </Row>

      <Row>
        <Col size="md-4">
        <h2>Professional Thoughts !</h2>
        </Col>
        <Col size="md-4">
        <h2>How to reach me ? </h2>
        
        </Col>
        <Col size="md-4">
        <h2>Technical Expertise ;)</h2>
        </Col>

      </Row>
      <Row>
        <Col size="md-4">
          <p>
          Empathetic,user-focused developer with an unbridled passion for JavaScript and social justice. Excellent communicator who possesses a natural ability to build rapport with a diverse range of individuals. Serial  learner with exceptional research skills.

            <Link to="/projects"> > hope you find time to check my projects</Link>

          </p>
        </Col>
        <Col size="md-4">
        <hr/>
          <p>
          <center>
              www.obuenavidez.com<br/>
              obuenavidez@gmail.com<br/>
              773.567-3930<br/><br/><br/>
              <Link to="/sendmessage"> > drop me a msg here ...</Link>

        </center>


          </p>
        </Col>
        <Col size="md-4">
        <p>
        Javascript • <a>ECMAScript 2015</a> • React.js • <a>React Native</a> • React Router • <a>Redux</a> • Handlebars.js • <a>jQuery</a>• AJAX 
        •<a>HTML5</a> • CSS3 • <a>Responsive Design</a>• Node.js • <a>MySQL</a> • Sequelize 
        • <a>NoSQL</a> • Mongo • <a>Mongoose</a> • Express.js • <a>Webpack</a>• Firebase •<a>Auth0</a> • JSON •<a>Git</a> • Github • <a>Project Management</a> • Product Management
  
        </p>
        </Col>

      </Row>
      

       
    </Container>
  </div>
);

export default Home;
