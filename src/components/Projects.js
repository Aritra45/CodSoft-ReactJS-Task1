import React from 'react';
import { Card, Row, Col } from 'antd';
import proj1Img from '../images/proj_1.png';
import proj2Img from '../images/proj_2.jpg';
import proj3Img from '../images/proj_3.png';
import '../styles/Project.css'; 

const { Meta } = Card;

const Projects = () => (
  <div className="projects">
    <h2 className="text-center mb-4">Projects</h2>
    <Row gutter={16}>
      <Col span={8}>
        <a href="https://github.com/Aritra45/EV-Charging-Station-App" target="_blank" rel="noopener noreferrer" className="project-link">
          <Card
            hoverable
            style={{ width: '100%' }}
            cover={<img alt="example" src={proj1Img} className="project-image" />}
            className="project-card"
          >
            <Meta
              title={<span className="white-text">EV Charging Station Finder App</span>}
              description={<span className="white-text">EV Charging Station Finder App project is to provide electric vehicle users with a user-friendly platform to easily locate nearby charging stations.</span>}
            />
          </Card>
        </a>
      </Col>
      <Col span={8}>
        <a href="https://github.com/Aritra45/POS-System" target="_blank" rel="noopener noreferrer" className="project-link">
          <Card
            hoverable
            style={{ width: '100%' }}
            cover={<img alt="example" src={proj2Img} className="project-image" />}
            className="project-card"
          >
            <Meta
              title={<span className="white-text">Retail Management System</span>}
              description={<span className="white-text">Having a system that can change product price on market demands. Searing operation for product availability can be done. Actions over every product. Bill the customer’s orders. System should support multi-user environment from multiple systems.</span>}
            />
          </Card>
        </a>
      </Col>
      <Col span={8}>
        <a href="https://github.com/Aritra45/JARVIS-AI-Assistant" target="_blank" rel="noopener noreferrer" className="project-link">
          <Card
            hoverable
            style={{ width: '100%' }}
            cover={<img alt="example" src={proj3Img} className="project-image" />}
            className="project-card"
          >
            <Meta
              title={<span className="white-text">J.A.R.V.I.S (Just A Rather Very Intelligent System) AI Assistant</span>}
              description={<span className="white-text">Control all computer or laptop tasks with speech commands also it used as a calculator. It also search anything from google for us.</span>}
            />
          </Card>
        </a>
      </Col>
    </Row>
  </div>
);

export default Projects;
