import { useEffect } from "react";

export const useWelcomeSpeech = (shouldSpeak: boolean = true) => {
  useEffect(() => {
    if (!shouldSpeak) return;

    // Check browser support for Web Speech API
    const SpeechSynthesisUtterance =
      window.SpeechSynthesisUtterance || (window as any).webkitSpeechSynthesisUtterance;

    if (!SpeechSynthesisUtterance) {
      console.warn("Speech Synthesis API not supported in this browser");
      return;
    }

    // Small delay to ensure page is fully ready
    const timeout = setTimeout(() => {
      const utterance = new SpeechSynthesisUtterance("Apka swagat hai anmol ke portfolio mai");

      // Set speech properties
      utterance.rate = 1; // Speed
      utterance.pitch = 1; // Pitch
      utterance.volume = 1; // Volume

      // Try to use Hindi voice if available
      const voices = window.speechSynthesis.getVoices();
      const hindiVoice = voices.find((voice) =>
        voice.lang.includes("hi") || voice.name.toLowerCase().includes("hindi")
      );

      if (hindiVoice) {
        utterance.voice = hindiVoice;
      }

      // Speak the text
      window.speechSynthesis.speak(utterance);
    }, 500);

    return () => clearTimeout(timeout);
  }, [shouldSpeak]);
};
