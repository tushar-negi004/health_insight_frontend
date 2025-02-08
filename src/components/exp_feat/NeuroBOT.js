import * as React from 'react';
import { useState } from 'react';
import { Box, TextField, InputAdornment, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';
import './chatStyle.css';  // Optional: For additional styles
import { useTheme } from "@mui/material/styles";



const NeuroBOT = () => {

  
  const theme = useTheme();

  const [inputValue, setInputValue] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  const [messages, setMessages] = useState([]);  // Initialize as an empty array



  
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const pressed = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      send();
    }
  }
  const send = async () => {
    setIsDisabled(true);
    setIsVisible(false);
    setInputValue('');
    if (!inputValue.trim()) return; // Don't send empty input

    try {
      // Add user's question to the message list immediately
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: 'user', text: inputValue },
      ]);

      // Send the prompt to the backend (Flask)
      const response = await axios.post('https://health-insight-backend.onrender.com/generate', { prompt: inputValue });

      // Add bot's response to the message list
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: 'bot', text: response.data.generatedText },
      ]);

      // Clear the input field after sending
    
      setIsDisabled(false);
    } catch (error) {
      console.log(error);
    }
  };


  const [isVisible, setIsVisible] = useState(true);

  return (
<>



    <div className='temp-div'>
      {isVisible && <div><h1 className='greeting-heading'>How may I assist you?</h1></div>}
    </div>


    <Box
      sx={{
        
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        bgcolor: 'background.paper',
        p: 2,
        [theme.breakpoints.down("sm")]: {
          mb:"4vh",
        }
      }}
      
    >
      {/* Chat messages container */}

      
      <div className="chat-container">

        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.type === 'user' ? 'user-message' : 'bot-message'}`}
          >

            
            <p>{message.text}</p>
          </div>

        )

        )}
      </div>


      {/* Input field with send button */}
      <TextField 
        
        onKeyDown={pressed}
        
        value={inputValue}
        onChange={handleChange}
        fullWidth
        variant="outlined"
        placeholder="Type a message..."
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'black',
              borderRadius: 12,
            
            },
          },
        }}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton className='icon-button' onClick={send} disabled={isDisabled}>
                  <SendIcon />
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
      />
    </Box>
  
    </>
  );
};

export default NeuroBOT;
