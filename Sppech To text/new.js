let speech=new SpeechSynthesisUtterance();
function king(){
 speech.text=document.querySelector('textarea').value;
window.speechSynthesis.speak(speech);
};

