// import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophoneLines, faMicrophoneLinesSlash, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import { useState } from 'react';

const Dictaphone = () => {
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    const[mic, setMic] = useState(listening);
    const toggleMic = () => {
        listening ? SpeechRecognition.stopListening() : SpeechRecognition.startListening({ continuous: true });
        setMic(!mic);
    }

    function sendText() {
        resetTranscript();
        console.log(transcript);
    }

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }

    return (
        <div className='text-to-speech'>
            <div className="text">
                <div className="transcript">
                    <input
                        type="text"
                        className='transcript-text'
                        placeholder='Speak into the mic'
                        value={transcript}
                        readOnly={true}
                    />
                    <div
                        className="send-button"
                        title='Send'
                        onClick={() => {sendText()}}
                    >
                        <FontAwesomeIcon
                            icon={faPaperPlane}
                        />
                    </div>
                </div>
                <div className='reset-button'>
                    <p onClick={resetTranscript}>Clear</p>
                </div>
            </div>
            <div
                className="mic-icon"
                onClick={() => toggleMic()}
                title='Toggle microphone'
                >
                <FontAwesomeIcon
                    icon={mic ? faMicrophoneLinesSlash : faMicrophoneLines}
                    className={mic ? `mic-on` : `mic-off`}
                />
            </div>
        </div>
    );
}

export default Dictaphone