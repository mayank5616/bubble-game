var bubble=document.querySelector('#bottom')
var timerElm=document.querySelector('#pnts')
var clickElm=document.querySelector('#pnts1')
var scoreElm=document.querySelector('#pnts2')
                                                        //    variables
timer=60
var rnnm=0;
temp=``
score=0
                                                       //    function
function initialize(){
    for(i=0;i<72;i++){
        temp=temp+`<div class="bubble">
        <h4>${Math.floor(Math.random()*10)}</h4>
    </div>`
    }
    document.querySelector('#bottom').innerHTML=temp
}
function setTimer(){
    setInterval(function(){
        if(timer<0){}
        else{
            timerElm.textContent=timer
            timer--
        }

    },1000)
}
function setRandom(){
    rnnm=Math.floor(Math.random()*10)
    clickElm.textContent=rnnm
}
function setScore(){
    score=score+10
    scoreElm.textContent=score

}
function clickEvent(){
    bubble.addEventListener('click',function(dets){
        bubbleNumber=Number(dets.target.textContent)
        temp=``
        initialize()
        if(rnnm===bubbleNumber){
            setScore()
            setRandom()
            

        }
    })

}
                                                         // callThefunction
initialize()
setTimer()
setRandom()
clickEvent()
