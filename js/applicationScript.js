/*
 * Copyright (c) 2015 Advanced Community Information Systems (ACIS) Group, Chair
 * of Computer Science 5 (Databases & Information Systems), RWTH Aachen
 * University, Germany All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this
 * list of conditions and the following disclaimer.
 * 
 * Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 * 
 * Neither the name of the ACIS Group nor the names of its contributors may be
 * used to endorse or promote products derived from this software without
 * specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */

var client;

var init = function() { 
    window.counter = 0;
  
  var iwcCallback = function(intent) {
    // define your reactions on incoming iwc events here 
    console.log(intent);

  };

  client = new Las2peerWidgetLibrary("http://cloud10.dbis.rwth-aachen.de:8086/videoquiz", iwcCallback);

  $('#button_sasha').on('click', function() {
    //start parameter initiation
    window.counter +=1; 
    //end parameter initiation
    loadQuiz();
  })


}

// loadQuiz
var loadQuiz = function(){

//start variable declaration

//end variable declaration

  client.sendRequest("GET", "videoquiz/getQuiz/"+ window.counter, "", "", {}, false,
  function(data, type) {
     
        if(Object.keys(data).length > 0){
    
    	    $('#radio_1').parent().contents().last()[0].textContent=data.answerA;
    
    	    $('#radio_2').parent().contents().last()[0].textContent=data.answerB;
    
    	    $('#radio_3').parent().contents().last()[0].textContent=data.answerC;
    
    	    $('#radio_4').parent().contents().last()[0].textContent=data.answerD;
    
    	    $('#iframe_1').attr('src',data.videolink);
    	
        	    $("#span_1").text(data.question);
    
        }else{
     
           $("#span_1").text("Quiz completed thank you!");
     
           $('label').hide();
    
            $('button').hide();
     
       }  
console.log(data);
  },
  function(error) {
    console.log(error);
  });

  //Additional own javascript

}


$(document).ready(function() {
  init(); 

});
