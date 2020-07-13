
var ul = document.getElementsByTagName('ul');
var quizBox = document.getElementsByTagName('question');
var opt1 = document.getElementsByTagName('opt1');
var opt2 = document.getElementsByTagName('opt2');
var opt3 = document.getElementsByTagName('opt3');
var opt4 = document.getElementsByTagName('opt4');
var btn = document.getElementsByTagName('button');
var scoreCard = document.getElementsByTagName('scoreCard');



   var app = {

   	questions:[
   	
   	{q:'1. What is the capital of Maroc?', options:['Rabat', 'Agadir', 'Casablanca', 'Alger'], answer:1},
   	{q:'2. What is the capital of Algeria?', options:['Oran', 'Annaba', 'Alger', 'Tunis'], answer:3},
   	{q:'3. What is the capital of Tunisia?', options:['Tripoli', 'Kairouan', 'Tunis', 'Mahdia'], answer:3},
   	{q:'4. What is the capital of Libya?', options:['Benghazi', 'Tripoli', 'Malta', 'Njamina'], answer:2},
   	{q:'5. What is the capital of Egypt?', options:['Giza', 'Cairo', 'Khartoum', 'Alexandria'], answer:2},
   	{q:'6. What is the capital of Palestine?', options:['Gaza', 'Cairo', 'Ramallah', 'Amman'], answer:3},
   	{q:'7. What is the capital of Israel?', options:['Suez', 'Galilee', 'Yafa', 'Tel Aviv'], answer:4},
   	{q:'8. What is the capital of Lebanon?', options:['Sayda', 'Cairo', 'Beirut', 'Tripoli'], answer:3},
   	{q:'9. What is the capital of Syria?', options:['Beirut', 'Cairo', 'Damascus', 'Rabat'], answer:3},
   	{q:'10. What is the capital of Cyprus?', options:['Nicosia', 'Athens', 'Sicily', 'Malta'], answer:1},
   	{q:'11. What is the capital of Turkey?', options:['Istanbul', 'Ankara', 'Azmir', 'Nicosia'], answer:2},
   	{q:'12. What is the capital of Greece?', options:['Rome', 'Istanbul', 'Malta', 'Athens'], answer:4},
   	{q:'13. What is the capital of Albania?', options:['Zagreb', 'Nicosia', 'Tirana', 'Valletta'], answer:3},
   	{q:'14. What is the capital of Montenegro?', options:['Podgorica', 'Ljubljana', 'Tirana', 'Azmir'], answer:1},
   	{q:'15. What is the capital of Croatia?', options:['Sarajevo', 'Ljubljana', 'Zagreb', 'Podgorica'], answer:3},
   	{q:'16. What is the capital of Slovenia?', options:['Tirana', 'Podgorica', 'Zagreb', 'Ljubljana'], answer:4},
   	{q:'17. What is the capital of Malta?', options:['Sicily', 'Tripoli', 'Nicosia', 'Valletta'], answer:4},
   	{q:'18. What is the capital of Italy?', options:['Rome', 'Turin', 'Milan', 'Naples'], answer:1},
   	{q:'19. What is the capital of France?', options:['Lyon', 'Paris', 'Madrid', 'London'], answer:2},
   	{q:'20. What is the capital of Spain?', options:['Barcelone', 'Lisbon', 'Madrid', 'Rome'], answer:3},
  ],

  index:0,


    loadQuestions: function(questionIndex){
    	
   	if(this.index<= this.questions.length - 1){
    	question.innerHTML= this.index +1+ ". " + this.questions[this.index].q;
    	opt1.innerHTML= this.questions[this.index].options[0];
    	opt2.innerHTML= this.questions[this.index].options[1];
    	opt3.innerHTML= this.questions[this.index].options[2];
    	opt4.innerHTML= this.questions[this.index].options[3];
    	this.scoreCard();
    	  
    }
      else{
      	question.innerHTML = "Quiz Over ....!!!";
      	opt1.style.display = "none";
      	opt2.style.display = "none";
      	opt3.style.display = "none";
      	opt4.style.display = "none";
      	btn.style.display = "none";
      }
  },

    
    nextQuestions: function () {
   	this.index++;
   	this.load();
   	
   },

    check : function(element) {
   	var id = element.id.split(' ');
   	if(id[id.length - 1] == this.questions[this.index].answer){
   		this.score++;
   		element.className = "true";
   		element.innerHTML = "true";
   		this.scoreCard();
   	}
   	else{
   		element.className = "false";
   		element.innerHTML = "false";
   	}
   	
   },

   notClickAble:function(){
   	for (var i = 0; i<ul.children.length; i++){
   		ul.children[i].style.pointerEvents="auto";
   		
   	   }
   	},

   	clickAble:function(){
   		for (var i = 0;i<ul.children.length; i++){
   			ul.children[i].style.pointerEvents="auto";
   			ul.children[i].className='';
   		} 
   		
   	},
   

   score:0;
    scoreCon : function(){
   	scoreCon.innerHTML =  this.score +"/" + this.questions.length ;
   }
}

window.onload = app.load();

function button(ele){
	app.check(ele);
	app.notClickAble();

}
function next(){
	app.next();
	app.clickAble();
}


