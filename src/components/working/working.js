import * as React from 'react';
import './working.css'
const Working = () => {
    return (
        <>
        
            <h1 className='heading'>Introduction</h1>
            <p className='para'>Our Wellness & Longevity Estimator helps individuals understand how their lifestyle choices and health factors impact their overall well-being and estimated lifespan. Using a Machine Learning model, we analyze various inputs like age, habits, and health conditions to provide a personalized wellness score and longevity estimate.
            </p>

            <h1 className='heading'>Steps to Use the Estimator</h1>
            <ul className='workinglist'>
                <li>Enter Your Details: Provide basic information such as age, exercise habits, diet, and medical history.</li>
                <li>Processing by Our ML Model: Your data is analyzed based on trained datasets.</li>
                <li>Personalized Insights: Get a wellness score and estimated longevity range.</li>
                <li>Health Improvement Tips: Receive suggestions to improve long-term health based on your input.</li>
            </ul>

            <h1 className='heading'>Technology Stack Used</h1>
            <ul className='workinglist'>
                <li>Frontend: React (for an interactive user interface)</li>
                <li>Backend: Flask / FastAPI (for processing user inputs)</li>
                <li>Machine Learning Model: Trained on real-world datasets related to health and longevity</li>
                <li>API Calls: Axios is used to send and receive data from the backend</li>
            </ul>
            <h1 className='heading'>Data & Sources</h1>
            <p className='para'>Our predictions are based on publicly available health datasets, research on longevity factors, and machine learning techniques. While this tool provides helpful insights,<strong className='strongdata'> it is not a medical diagnosis tool.</strong></p>
            
          <footer className='workingfooter'>

          </footer>
        </>
    );
}

export default Working;