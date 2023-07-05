const jokeText=document.querySelector(".joke"),
speakerBtn=document.querySelector(".speaker"),
copyBtn=document.querySelector(".copy"),
twitterBtn=document.querySelector(".twitter"),
jokeBtn=document.querySelector(".jokebtn")
synth=speechSynthesis;


function randomJoke() {
    fetch("https://v2.jokeapi.dev/joke/Any?type=single").
    then(response=>response.json()).
    then(result=>{
        jokeText.innerHTML=result.joke;
    })
}

speakerBtn.addEventListener("click",()=>{
    let utterance=new SpeechSynthesisUtterance(`${jokeText.innerHTML}`)
    synth.speak(utterance);
});

copyBtn.addEventListener("click",()=>{
    navigator.clipboard.writeText(jokeText.innerHTML);
});

twitterBtn.addEventListener("click",()=>{
    let tweetUrl=`https://twitter.com/intent/tweet?url=${jokeText.innerHTML}`;
    window.open(tweetUrl,"_blank");
});

jokeBtn.addEventListener("click",randomJoke);