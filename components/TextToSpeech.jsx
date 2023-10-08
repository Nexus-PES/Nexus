"use client";
import React, { useState, useEffect } from "react";
import { BsStopFill } from "react-icons/bs";
import { BiPause } from "react-icons/bi";
import {
	PiSpeakerSimpleNoneLight,
	PiSpeakerSimpleNoneFill,
} from "react-icons/pi";

const TextToSpeech = ({ text }) => {
  const [isPaused, setIsPaused] = useState(false);
  const [utterance, setUtterance] = useState(null);
  const [voice, setVoice] = useState(null);
//   const [pitch, setPitch] = useState(1);
//   const [rate, setRate] = useState(1);
//   const [volume, setVolume] = useState(1);

  useEffect(() => {
    const synth = window.speechSynthesis;
    const u = new SpeechSynthesisUtterance(text);
    setUtterance(u);

    // Add an event listener to the speechSynthesis object to listen for the voiceschanged event
    synth.addEventListener("voiceschanged", () => {
      const voices = synth.getVoices();
      setVoice(voices[4]);
    });

    return () => {
      synth.cancel();
      synth.removeEventListener("voiceschanged", () => {
        setVoice(null);
      });
    };
  }, [text]);

  const handlePlay = () => {
    const synth = window.speechSynthesis;

    if (isPaused) {
      synth.resume();
    } else {
      utterance.voice = voice;
      utterance.pitch = 0.9;
      utterance.rate = 1;
      utterance.volume = 1;
      synth.speak(utterance);
    }

    setIsPaused(false);
  };

  const handlePause = () => {
    const synth = window.speechSynthesis;
    setIsPaused(true);
    synth.pause();
  };

  const handleStop = () => {
    const synth = window.speechSynthesis;
    setIsPaused(false);
    synth.cancel();
  };

//   const handleVoiceChange = (event) => {
//     const voices = window.speechSynthesis.getVoices();
//     setVoice(voices.find((v) => v.name === event.target.value));
//   };

//   const handlePitchChange = (event) => {
//     setPitch(parseFloat(event.target.value));
//   };

//   const handleRateChange = (event) => {
//     setRate(parseFloat(event.target.value));
//   };

//   const handleVolumeChange = (event) => {
//     setVolume(parseFloat(event.target.value));
//   };

  return (
    <>
      {/* <label>
        Voice:
        <select value={voice?.name} onChange={handleVoiceChange}>
          {window.speechSynthesis.getVoices().map((voice) => (
            <option key={voice.name} value={voice.name}>
              {voice.name}
            </option>
          ))}
        </select>
      </label>

      <br /> */}

      {/* <label>
        Pitch:
        <input
          type="range"
          min="0.5"
          max="2"
          step="0.1"
          value={pitch}
          onChange={handlePitchChange}
        />
      </label>

      <br /> */}

      {/* <label>
        Speed:
        <input
          type="range"
          min="0.5"
          max="2"
          step="0.1"
          value={rate}
          onChange={handleRateChange}
        />
      </label>
      <br /> */}

      {/* <label>
        Volume:
        <input
        className="accent-slate-800"
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={handleVolumeChange}
        />
      </label>

      <br /> */}

      <button onClick={handlePlay}>{isPaused ? <PiSpeakerSimpleNoneLight/> : <PiSpeakerSimpleNoneFill />}</button>
      <button onClick={handlePause}><BiPause /></button>
      <button onClick={handleStop}><BsStopFill /></button>
    </>
  );
};

export default TextToSpeech;
