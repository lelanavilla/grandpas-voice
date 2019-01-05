
//DOM load event
// window.addEventListener("DOMContentLoaded",	() =>{
  // return sayName();
// });
  //Speak button click event listener
// function sayName(){
  // let cButton = button.addEventListener('click',
  // throttle(()=>{
    //stop current speech if active
    // speechSynthesis.cancel();
    //create new speech utterance
    // const speech = new SpeechSynthesisUtterance();
    //set text to be spoken
  //   var caregiverButton = document.getElementsByTagName(button).getAttribute("name");
  //   if(caregiverButton.value === "Ida"){
  //     speech.text = "Ida"
  //   }else if(button.name.value === "Toni"){
  //     speech.text = "Toni" 
  // }
  // else if(button.name.value === "Odette"){
  //   speech.text = "Odette"
  // }
  // else if(button.value === "Robert"){
  //   speech.text = "Robert"
  // }
  // else if(button.value === "lelana"){
  //   speech.text = "lelana"
  // }
  // else if(button.value === "Andrea"){
    // speech.text = "Andrea"
  // }
  // else if(button.value === "Stephanie"){
  //   speech.text = "Stephanie"
  // }
  // else if(button.value === "Bernadette"){
  //   speech.text = "Bernadette"
  // }else {
  //   speech.text ="Try again Grandpa";
  // }

//check if custom voice was setInterval(() => {
  
//  if (voice) {
  //Set voice
  // speech.voice = voice
  //set speech rate;
  // speech.rate = 1.4;
  //set telephony
  // speechSynthesis.speak(speech);
  //Speech synthesis voices ready event listener
	// speechSynthesis.addEventListener('voiceschanged', () => {

		//Get array of all possible voices
		// const voices = speechSynthesis.getVoices();

		//Get Google voice or use default
		// voice = voices.find(voice => voice.name === 'Google US English Male') || voices[0];

	// });
//  }
// }))


    
    //    $(document).ready(
    //   //speak on click of button
    //   $(function(){
    //     if ('speechSynthesis' in window) {
    //       speechSynthesis.onvoiceschanged = function() {
    //         var $voicelist = $('#voices');
      
    //         if($voicelist.find('option').length == 0) {
    //           speechSynthesis.getVoices().forEach(function(voice, index) {
    //             var $option = $('<option>')
    //             .val(index)
    //             .html(voice.name + (voice.default ? ' (default)' :''));
      
    //             $voicelist.append($option);
    //           });
      
    //           $voicelist.material_select();
    //         }
    //       },
      
    //       $('.speakName').click(function(){
    //         var name = $(button).val();
    //         var msg = new SpeechSynthesisUtterance();
    //         var voices = window.speechSynthesis.getVoices();
    //         msg.voice = voices[$('#voices').val()];      
    //       speechSynthesis.speak(SpeechSynthesisUtterance(''));
    //         msg.rate = $('#rate').val() / 10;
    //         msg.pitch = $('#pitch').val();
    //         msg.text = button.value;
      
    //         speechSynthesis.speak(name);
          
    //     }),

  
    // $('.speakTask').click(function(){
    //     var actionWords = $('.task').val();
    //     var msg = new SpeechSynthesisUtterance();
    //     var voices = window.speechSynthesis.getVoices();
    //     msg.voice = voices[$('#voices').val()];
    //     msg.rate = $('#rate').val() / 10;
    //     msg.pitch = $('#pitch').val();
    //     msg.text = actionWords;
  
    //     speechSynthesis.speak(msg);
    // }

// function talk(name, task){
//       var onclick = function(e) {
//             document.getElementById(buttonId()).value;
//             speechSynthesis.speak(SpeechSynthesisUtterance(who()));
//     }
     
//         }
//         function buttonId(id, e){
// var id = function(e){
// var name= document.getElementsByClassName('caregivers');
// if(caregivers)
// }
//         }

//         const handleTaskClick = (e) =>{
//             let div = event.target.value;
//             SpeechSynthesisUtterance(div.button.value);
//         } 