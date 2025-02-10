import * as React from 'react';
import './working.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Working = () => {
    return (
        <>


            <div className='main-working-container'>
                <div className='working-content'></div>
                <h1 className='heading'>Introduction</h1>
                <p className='para'>Our Wellness & Longevity Estimator helps individuals understand how their lifestyle choices and health factors impact their overall well-being and estimated lifespan. Using a Machine Learning model, we analyze various inputs like age, habits, and health conditions to provide a personalized wellness score and longevity estimate.
                </p>
                <div className='working-content'></div>
                <h1 className='heading'>Steps to Use the Estimator</h1>
                <ol className='workinglist'>
                    <li>Enter Your Details: Provide basic information such as age, exercise habits, diet, and medical history.</li>
                    <li>Processing by Our ML Model: Your data is analyzed based on trained datasets.</li>
                    <li>Personalized Insights: Get a wellness score and estimated longevity range.</li>
                    <li>Health Improvement Tips: Receive suggestions to improve long-term health based on your input.</li>
                </ol>
                <div className='working-content'></div>
                <h1 className='heading'>Technology Stack Used</h1>
                <ol className='workinglist'>
                    <li>Frontend: React (for an interactive user interface)</li>
                    <li>Backend: Flask / FastAPI (for processing user inputs)</li>
                    <li>Machine Learning Model: Trained on real-world datasets related to health and longevity</li>
                    <li>API Calls: Axios is used to send and receive data from the backend</li>
                    <li>The Gemini API is utilized for developing NeuroBOT.</li>
                </ol>
                <div className='working-content'></div>
                <h1 className='heading'>Data & Sources</h1>
                <p className='para'>Our predictions are based on publicly available health datasets, research on longevity factors, and machine learning techniques. While this tool provides helpful insights,<strong className='strongdata'> it is not a medical diagnosis tool.</strong></p>
                <div className='working-content'></div>
</div>
<footer className="working-footer" style={{marginTop : "2vh"}}>
        <Container className='workinng-container'>
          <Row className='home-footer-content'>
            <Col md={4} className="footer-contact" style={{marginTop: "1vh"}}>
              <p>Stay connected
                <span className='git-logo'>
                  <a href="https://github.com/tushar-negi004">
                    <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"  alt = ' ' width="25" height="25" />
                  </a>

                </span>
                <span>
                  <a href="https://linkedin.com/in/tushar-negi004">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" width="25" height="25" alt='' />
                  </a>
                </span>
              </p>

            </Col>
          </Row>
        </Container>
      </footer>
        </>
    );
}

export default Working;