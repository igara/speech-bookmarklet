const voice = window.speechSynthesis.getVoices().find((voice) => {
  return voice.name === "Google　日本語";
});

const tweetElement = document.querySelector("section > div > div > div > div");
if (tweetElement) {
  const speechSynthesisUtterance = new SpeechSynthesisUtterance(tweetElement.textContent);
  speechSynthesisUtterance.voice = voice || speechSynthesis.getVoices()[0];
  window.speechSynthesis.speak(speechSynthesisUtterance);
}
