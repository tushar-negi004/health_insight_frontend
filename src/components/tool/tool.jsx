import { useState,useEffect } from 'react';
import { Alert } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './tool.css';
import Paper from '@mui/material/Paper';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import axios from 'axios';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';



const Tool = () => {

  const [showAlert1, setShowAlert1] = useState(true);
  const [showAlert2, setShowAlert2] = useState(true);
  const [incompleteAlert, setIncompleteAlert] = useState(false);
  const [inputAge, setInputAge] = useState('');
  const [humanLimits, setHumanLimits] = useState(false);
  const [wrongInput, setWrongInput] = useState(false);
  const [isTeen, setIsTeen] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [stars,setStars] = useState(0);
  const [isLoading,setIsLoading] = useState(false);

  const handleage = (e) => {
    setInputAge(e.target.value);
  }

  const [inputGender, setInputGender] = useState("0");
  const handlegender = (e) => {
    setInputGender(e.target.value);
  }

  const [inputHeight, setInputHeight] = useState('');

  const handleheight = (e) => {
    setInputHeight(e.target.value);
  }
  const [inputWeight, setInputWeight] = useState('');

  const handleweight = (e) => {
    setInputWeight(e.target.value);
  }
  const [inputDrinking, setInputDrinking] = useState('');
  const handledrinking = (e) => {
    setInputDrinking(e.target.value);
  }

  const [inputSmoking, setInputSmoking] = useState('');
  const handlesmoking = (e) => {
    setInputSmoking(e.target.value);
  }
  const [inputExercise, setInputExercise] = useState("0");
  const handleExercise = (e) => {
    setInputExercise(e.target.value);
  }
  const [inputChronic, setInputChronic] = useState("0");
  const handlechronic = (e) => {
    setInputChronic(e.target.value);
  }
  const [inputHealthCare, setInputHealthCare] = useState("0");
  const handlehealthcare = (e) => {
    setInputHealthCare(e.target.value);
  }
  const [inputDiet, setInputDiet] = useState(0);
  const handlediet = (e) => {
    setInputDiet(e.target.value);
  }
  const [healthScore, setHealthScore] = useState(0);

 

  useEffect(() => {
    setShowResult(false); 
  }, [inputAge, inputHeight, inputWeight, inputDrinking, inputSmoking, inputGender, inputExercise, inputChronic, inputHealthCare, inputDiet]);
  



  const senddata = async () => {
    setIsLoading(true);
    setShowResult(false);
    setIncompleteAlert(false);
    setWrongInput(false);

    if ([inputAge, inputHeight, inputWeight, inputDrinking, inputSmoking].some(val => val.trim() === '') ) {
      setIncompleteAlert(true);
  }
  else {
        if (
          Number.isInteger(Number(inputAge)) &&
          !isNaN(Number(inputHeight)) && // Allows decimals too
          !isNaN(Number(inputWeight)) && // Allows decimals too
          Number.isInteger(Number(inputDrinking)) &&
          Number.isInteger(Number(inputSmoking)) &&
          Number(inputAge) > 0
        ){          
            if (Number(inputAge) > 13 && Number(inputAge) < 20) {
                
              
                if ((Number(inputHeight) < 3 && Number(inputHeight) >= 0.5) && (Number(inputWeight) < 300  && Number(inputWeight) > 10)&& Number(inputDrinking) <= 30 && Number(inputSmoking) <= 100) {
                    try {

                      const height = parseFloat(inputHeight);
                      const weight = parseFloat(inputWeight);
                      const BMI = weight / (height * height);

                        let response = await axios.post("https://health-insight-backend.onrender.com/predict", {
                            "sex": Number(inputGender),
                            "BMI": BMI,
                            "cigars_weekly": Number(inputSmoking),
                            "drinks_weekly": Number(inputDrinking),
                            "exercise": Number(inputExercise),
                            "chronic_disease": Number(inputChronic),
                            "diet_quality": Number(inputDiet),
                            "healthcare": Number(inputHealthCare),
                            "current_age": Number(inputAge),
                        });

                        setHealthScore(response.data.health_score);
                        console.log(healthScore);
                        setStars(Number(10 * response.data.health_score / 80));
                        setShowResult(true);
                        setIsLoading(false);
                        
                    } catch (error) {
                      setIsLoading(false);
                        console.log(error);
                        
                    }
                  
                } else {
                    
                    setHumanLimits(true); 

                }
            } else {
                
                setIsTeen(true);
            }
        } else {
            
            setWrongInput(true);
        }
    }
};


  return (
    <>

    <div style={{ opacity: isLoading ? 0.5 : 1, transition: "opacity 0.3s ease-in-out" }}>
      <Dialog open={incompleteAlert}>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <strong>All the fields are mandatory to fill</strong>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => {setIncompleteAlert(false);setIsLoading(false);}} autoFocus>
            okay.
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={humanLimits}>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <strong>Entered values exceed human limits. Please enter realistic values.</strong>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => {setHumanLimits(false);setIsLoading(false);}} autoFocus>
            okay.
          </Button>
        </DialogActions>
      </Dialog>


      <Dialog open={isTeen}>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <strong>
              The predictor is currently designed for teens and is being developed for a wider audience
            </strong>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => {setIsTeen(false);setIsLoading(false);}} autoFocus>
            okay.
          </Button>
        </DialogActions>
      </Dialog>


     

      <Dialog open={wrongInput}>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <strong>Some of the inputs are incorrect. Please enter valid data.</strong>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => {setWrongInput(false);setIsLoading(false);}} autoFocus>
            okay.
          </Button>
        </DialogActions>
      </Dialog>

      {showAlert1 && (
        <Alert variant="danger" onClose={() => setShowAlert1(false)} dismissible>
          <Alert.Heading>Important Notice!</Alert.Heading>
          <p>
            The health score provided by this tool is only a prediction based on the input data.
            It is <strong>not</strong> a medical diagnosis or an accurate measure of your health.
            Please consult a healthcare professional for any serious health concerns.
          </p>
        </Alert>
      )}

      {showAlert2 && (
        <Alert variant="info" onClose={() => setShowAlert2(false)} dismissible>
          <p>This tool is currently intended for teen users only.</p>
        </Alert>
      )}

      <Box className='maincontainer'
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1
          },
        }}
      >
        <Paper elevation={24}
          style={{
            width: '80vw',
            height: '100%',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column'
          }}>

          <div className='form-heading'>
            <h4>All the fields are mandatory</h4>
          </div>
          <div className='for-grid-1'>
            <Container>
              <Row className='first-two-rows'>
                <Col className="all-columns">
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Enter your age"
                    className="mb-3"
                    style={{ width: "100%" }}>
                    <Form.Control value={inputAge} onChange={handleage} type="text" />
                  </FloatingLabel>
                </Col>
                <Col className="all-columns">
                  <Form.Select size="lg" style={{ width: "100%" }} value={inputGender} onChange={handlegender}>
                    <option disabled hidden>Gender</option>
                    <option value="0">Male</option>
                    <option value="1">Female</option>
                  </Form.Select>
                </Col>
              </Row>
              <Row className='first-two-rows'>
                <Col className="all-columns">
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Weight (in kg)"
                    className="mb-3"
                    style={{ width: "100%" }}>
                    <Form.Control value={inputWeight} onChange={handleweight} type="text" />
                  </FloatingLabel>
                </Col>
                <Col className="all-columns">
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Height (in meters)"
                    className="mb-3"
                  >
                    <Form.Control value={inputHeight} onChange={handleheight} type="text" />
                  </FloatingLabel>
                </Col>
              </Row>
            </Container>
          </div>
          <div className='for-grid-2'>
            <Container>
              <Row className="last-two-rows">
                <Col className="all-columns">
                  <FloatingLabel
                    controlId="floatingInput"
                    className="mb-3"
                    style={{ width: "100%" }}>
                    <Form.Control value={inputDrinking} onChange={handledrinking} type="text" /><Form.Text muted>
                      Alcoholic drinks per week
                    </Form.Text>
                  </FloatingLabel>
                </Col>
                <Col className="all-columns">  max-height: 50%;
                  <FloatingLabel
                    controlId="floatingInput"
                    className="mb-3"
                    style={{ width: "100%" }}>
                    <Form.Control value={inputSmoking} onChange={handlesmoking} type="text" /><Form.Text muted>
                      Cigarettes smoked per week.
                    </Form.Text>
                  </FloatingLabel>
                </Col>
                <Col className="all-columns">
                  <Form.Select value={inputExercise} onChange={handleExercise} size="lg" style={{ width: "100%" }}
                    label="Exercise Level">
                    <option value="0">Barely</option>
                    <option value="1">Regular</option>
                    <option value="2">Enthusiast</option>
                  </Form.Select>
                  <FloatingLabel>
                    <Form.Text muted>
                      Exercise Level
                    </Form.Text>
                  </FloatingLabel>
                </Col>
              </Row>
              <Row className="last-two-rows">
                <Col className="all-columns">
                  <Form.Select value={inputChronic} onChange={handlechronic} size="lg" style={{ width: "100%" }}>
                    <option value="0">No</option>
                    <option value="1">yes</option>
                  </Form.Select>
                  <FloatingLabel>
                    <Form.Text muted>
                      Any Chronic Disease
                    </Form.Text>
                  </FloatingLabel>
                </Col>
                <Col className="all-columns">
                  <Form.Select value={inputHealthCare} onChange={handlehealthcare} size="lg" style={{ width: "100%" }}>
                    <option value="0">Poor</option>
                    <option value="1">Good</option>
                  </Form.Select>
                  <FloatingLabel>
                    <Form.Text muted>
                      Health Care Access
                    </Form.Text>
                  </FloatingLabel>
                </Col>
                <Col className="all-columns">
                  <Form.Select value={inputDiet} onChange={handlediet} size="lg" style={{ width: "100%" }}>
                    <option value="0">Poor</option>
                    <option value="1">Balanced</option>
                    <option value="2">Good</option>
                    <option value="3">Best</option>
                  </Form.Select>
                  <FloatingLabel>
                    <Form.Text muted>
                      Diet Quality
                    </Form.Text>
                  </FloatingLabel>
                </Col>
              </Row>
            </Container>
          </div>
          <div className='submit-data-button'>
            <Button as="input" type="submit" value="Submit" onClick={senddata}/>
          </div>
        </Paper>
      </Box>
{showResult && (
      <div style={{ height: '30vh' }}>
  <Box className='maincontainer'
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
      '& > :not(style)': { m: 1 },
    }}
  >
    <Paper elevation={24}
      style={{
        width: '80vw',
        height: '100%',
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div className='stars-heading'>
        <h4>Your Predicted Health Score</h4>
      </div>

      <Box sx={{ display: "flex", alignItems: "center", mt: 2, flexDirection: 'column' }} >
        <div className='star-rating'>
          <Rating
            // value={Number(10 * healthScore / 80)}
            value = {stars}  
            max={10}
            readOnly
            precision={0.5}
            icon={<StarIcon style={{ color: "#FFD700", fontSize: "clamp(1.2rem, 2vw, 2rem)" }} />}
            emptyIcon={<StarIcon style={{ opacity: 0.7, color: "whitesmoke", fontSize: "clamp(1.2rem, 2vw, 2rem)", stroke: "#FFD700" }} />}
          />
        </div>
      </Box>

      <div className="disclaimer-points">
        {[
          "The health score provided is an approximation and should not be considered as a definitive measure of your health.",
          "This prediction is based on the information you provided and may not fully represent your individual health status.",
          "The score is generated from general data and should not be used as a replacement for professional medical advice or consultation.",
          "Health predictions are subject to change and should be considered as a guide. For accurate health assessments, please consult a healthcare provider."
        ].map((text, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "8px",
              marginBottom: "8px"
            }}
          >
            <InfoOutlinedIcon
              style={{
                fontSize: "clamp(12px, 1.8vw, 16px)",
                color: "gray",
                marginTop: "4px"
              }}
            />
            <p style={{ fontSize: "clamp(12px, 1.2vw, 14px)", margin: 0 }}>
              {text}
            </p>
          </div>
        ))}
      </div>


    </Paper>
  </Box>
</div>

)}

</div>
    </>
  );
};

export default Tool;
