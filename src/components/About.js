import React from 'react';
import { Card, Row, Col } from 'antd';
import '../styles/About.css';
import pic from '../images/profile-about.png'

const { Meta } = Card;

const About = () => (
  <div>
    <h1 className="text-center mb-4">About Me</h1>
    <div>
    <Row justify="center" align="middle" className="about-section">
      <Col xs={24} md={12} className="image-column">
        <img alt="example" src={pic} className="about-image" />
      </Col>
      <Col xs={24} md={12} className="text-column">
        <div className="about-text">
          <p>
            Registered as a Frontend Developer, now pursuing my passion for education,
            I am a Computer Engineering graduate from TIIT, Kolkata. I have interest in React JS, HTML, CSS, & C programming as well as Python.
            Technology excites me and I am always in awe of the change it drives in the world. Certain skills that I 
            have worked with include React JS, HTML, CSS, My-SQL, Node JS, MongoDB, Firebase & Python. And what I might lack in skills I make up 
            for with my determination to learn.
            Outside of tech, I am a tea lover, spend time with friends and love to watch movies.
          </p>
          <ul className="about-info mt-4 px-md-0 px-2 no-bullets">
            <li className="d-flex"><span id='list'>Profile:</span> <span>Fresher</span></li>
            <li className="d-flex"><span id='list'>Domain:</span> <span>FullStack Web Development</span></li>
            <li className="d-flex"><span id='list'>Education:</span> <span>Masters of Computer Application</span></li>
            <li className="d-flex"><span id='list'>Language:</span> <span>English, Bengali &amp; Hindi</span></li>
            <li className="d-flex"><span id='list'>Other Skills:</span> <span>MS Word, MS Excel, MS Powerpoint, Git &amp; WordPress</span></li>
            <li className="d-flex"><span id='list'>Interest:</span> <span>Listening Songs, Watching Movies &amp; Playing Video Games</span></li>
          </ul>

        </div>
      </Col>
    </Row>
  </div>

    <div className="text-center">
      <h1 className="big-4">Education</h1>
      <div className="underline"></div>
    </div>
<br/>
    <Row justify="center" gutter={[24, 24]} align="middle" style={{ display: 'flex', justifyContent: 'center' }}>
      <Col xs={24} md={12} style={{ display: 'flex', justifyContent: 'center', paddingLeft: '1%' }}>
        <Card
          hoverable
          style={{ fontSize: '18px', padding: '20px', width: '100%' }}
          className="project-card custom-card no-zoom"
        >
          <Meta
            title={<span className="white-text">Masters of Computer Application (2023-2024)</span>}
            description={
              <div>
                <span className="white-text">Techno International Newtown</span>
                <br />
                <span className="white-text">Percentage: 75.2%</span>
              </div>
            }
          />
        </Card>
      </Col>
      <Col xs={24} md={12} style={{ display: 'flex', justifyContent: 'center', paddingLeft: '2%'}}>
        <Card
          hoverable
          style={{ fontSize: '18px', padding: '20px', width: '100%' }}
          className="project-card custom-card no-zoom"
        >
          <Meta
            title={<span className="white-text">Bachelors of Computer Application (2019-2023)</span>}
            description={
              <div>
                <span className="white-text">Techno India Institute of Technology</span>
                <br />
                <span className="white-text">Percentage: 93.8%</span>
              </div>
            }
          />
        </Card>
      </Col>
    </Row>
<br/>
    <Row justify="center" gutter={[24, 24]} align="middle" style={{ display: 'flex', justifyContent: 'center' }}>
      <Col xs={24} md={12} style={{ display: 'flex', justifyContent: 'center', paddingLeft: '1%' }}>
        <Card
          hoverable
          style={{ fontSize: '18px', padding: '20px', width: '100%' }}
          className="project-card custom-card no-zoom"
        >
          <Meta
            title={<span className="white-text">Higher Secondary Education (2017-2019)</span>}
            description={
              <div>
                <span className="white-text">Bally Jora Aswatthatala Vidyalaya</span>
                <br />
                <span className="white-text">Percentage: 53%</span>
              </div>
            }
          />
        </Card>
      </Col>
      <Col xs={24} md={12} style={{ display: 'flex', justifyContent: 'center', paddingLeft: '2%'}}>
        <Card
          hoverable
          style={{ fontSize: '18px', padding: '20px', width: '100%' }}
          className="project-card custom-card no-zoom"
        >
          <Meta
            title={<span className="white-text">Secondary Education (2005-2017)</span>}
            description={
              <div>
                <span className="white-text">Uttarpara Childrens's Own Home</span>
                <br />
                <span className="white-text">Percentage: 63%</span>
              </div>
            }
          />
        </Card>
      </Col>
    </Row>
  </div>
);

export default About;
