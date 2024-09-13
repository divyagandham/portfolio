import React, { useEffect, useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import './pushToTalk.css'; // Import your CSS file
import { Input,Flex } from "@chakra-ui/react";

const Dictaphone = () => {
    const { transcript, listening, browserSupportsSpeechRecognition, resetTranscript } = useSpeechRecognition();
    const [isListening, setIsListening] = useState(false);
    const [messages, setMessages] = useState([]); // To store separate messages

    useEffect(() => {
        if (!browserSupportsSpeechRecognition) {
            console.warn("Browser doesn't support speech recognition.");
        }
    }, [browserSupportsSpeechRecognition]);

    const startListening = () => {
        SpeechRecognition.startListening();
        setIsListening(true);
    };

    const stopListening = () => {
        SpeechRecognition.stopListening();
        setIsListening(false);

        if (transcript) {
            // Add the current transcript to the messages array
            setMessages(prevMessages => [...prevMessages, transcript]);
            // Send the transcript to the ChatBubble component
            // onSendTranscript(transcript);
        }

        // Reset transcript to ensure the next speech is captured as a new message
        resetTranscript();
    };

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }

    return (
        <Flex className="flex mt-3">
            {/* <p> {listening ? 'on' : 'off'}</p> */}
           {/* <Input  placeholder="Enable Push To Push To Talk..."  style={{color:'white'}}></Input> */}
            <button
                onMouseDown={startListening}
                onMouseUp={stopListening}
                onTouchStart={startListening}
                onTouchEnd={stopListening}
                className={`mic-button ${listening ? 'glow' : ''}`} // Add glow class when listening
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
                    />
                </svg>
            </button>
            {/* <div>
                <h3>Recorded Messages:</h3>
                <ul>
                    {messages.map((msg, index) => (
                        <li key={index}>{msg}</li>
                    ))}
                </ul>
            </div> */}
        </Flex>
    );
};

export default Dictaphone;
