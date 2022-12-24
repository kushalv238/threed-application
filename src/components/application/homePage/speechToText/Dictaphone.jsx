import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophoneLines, faMicrophoneLinesSlash, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import { useState } from 'react';

const Dictaphone = (props) => {
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

    const[message, setMessage] = useState('');

    if (!browserSupportsSpeechRecognition) {
        return (
            <div className='text-to-speech'>
                <div className="text">  
                    <div className="transcript">
                        <input
                            type="text"
                            className='transcript-text'
                            placeholder='Type a message...'
                            value={message}
                            onChange={(input)=>setMessage(input.target.value)}
                            autoFocus
                        />
                        <div
                            className="send-button"
                            title='Send'
                            onClick={() => {
                                setMessage('')
                                props.getMessage(message);
                            }}
                        >
                            <FontAwesomeIcon icon={faPaperPlane} />
                        </div>
                    </div>
                    <div className='reset-button'>
                        <p onClick={() => setMessage('')}>Clear</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className='text-to-speech'>
            <div className="text">
                <div className="transcript">
                    <input
                        type="text"
                        className='transcript-text'
                        placeholder='Speak into the mic...'
                        value={transcript}
                        readOnly={true}
                    />
                    <div
                        className="send-button"
                        title='Send'
                        onClick={() => {
                            SpeechRecognition.stopListening();
                            setMic(false);
                            resetTranscript();
                            props.getMessage(transcript);
                        }}
                    >
                        <FontAwesomeIcon
                            icon={faPaperPlane}
                        />
                    </div>
                </div>
                <div className='reset-button'>
                    <p
                        onClick={() => {
                            SpeechRecognition.stopListening();
                            setMic(false);
                            resetTranscript()
                        }}
                    >Clear</p>
                </div>
            </div>
            <div className="mic">
                <FontAwesomeIcon
                    icon={mic ? faMicrophoneLines : faMicrophoneLinesSlash}
                    className={`mic-icon ${mic ? 'mic-on' : 'mic-off'}`}
                    onClick={() => toggleMic()}
                    title='Toggle microphone'
                />
                <div className='mic-status'>
                    {
                        mic ? 'Listening...' : 'Mic off'
                    }
                </div>
            </div>
        </div>
    );
}

export default Dictaphone