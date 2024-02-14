document.getElementById("home-btn").addEventListener('click', function(){
    document.getElementById("home-screen").classList.add("hidden");
    document.getElementById("playground-screen").classList.remove("hidden");
})

document.addEventListener("keyup", function(event){
    if(event.key === "Enter"){
        document.getElementById("home-screen").classList.add("hidden");
        document.getElementById("playground-screen").classList.remove("hidden"); 
    }
})

function getRandomNumber(){
    const alphabets = "abcdefghijklmnopqrstuvwxyz"
    const alphabetsSlice = alphabets.split("");

    const indexNumber = Math.floor(Math.random() * alphabetsSlice.length);

    return alphabetsSlice[indexNumber];
}

    document.addEventListener("keyup", function(event){
       console.log(event.key) ;
    })