// MIT http://rem.mit-license.org
function trimCanvas(id) {
    console.log("trim")
    var c= document.getElementById("canvasId151");
    var ctx = c.getContext('2d'),
    copy = document.createElement('canvas').getContext('2d'),
        pixels = ctx.getImageData(0, 0, c.width, c.height),
        l = pixels.data.length,
        i,
        bound = {
            top: null,
            left: null,
            right: null,
            bottom: null
        },
        x, y;
    
    // Iterate over every pixel to find the highest
    // and where it ends on every axis ()
    for (i = 0; i < l; i += 4) {
        if (pixels.data[i + 3] !== 0) {
            x = (i / 4) % c.width;
            y = ~~((i / 4) / c.width);

            if (bound.top === null) {
                bound.top = y;
            }

            if (bound.left === null) {
                bound.left = x;
            } else if (x < bound.left) {
                bound.left = x;
            }

            if (bound.right === null) {
                bound.right = x;
            } else if (bound.right < x) {
                bound.right = x;
            }

            if (bound.bottom === null) {
                bound.bottom = y;
            } else if (bound.bottom < y) {
                bound.bottom = y;
            }
        }
    }
    
    // Calculate the height and width of the content
    var trimHeight = bound.bottom - bound.top,
        trimWidth = bound.right - bound.left,
        trimmed = ctx.getImageData(bound.left, bound.top, trimWidth, trimHeight);

    copy.canvas.width = trimWidth;
    copy.canvas.height = trimHeight;
    copy.putImageData(trimmed, 0, 0);

    // Return trimmed canvas
    return copy.canvas;
}

function drawCanva(id) {
    const ctx = document.getElementById(id).getContext("2d");
    const img = new Image();
    img.onload = () => {
      ctx.drawImage(img, 0, 0);
    //   ctx.beginPath();
    //   ctx.moveTo(30, 96);
    //   ctx.lineTo(70, 66);
    //   ctx.lineTo(103, 76);
    //   ctx.lineTo(170, 15);
    //   ctx.stroke();
    };
    img.src = spritesBaseUrl+151+".png";
    img.crossOrigin = "Anonymous";
    
}




const checkName=(inputName)=>{
    let name=inputName.value;
    console.log(name);

}

const letters={
    a:0,b:1,c:2,d:3,e:4,f:5,g:6,h:7,i:8,j:9,k:10,l:11,m:12,n:13,o:14,p:15,q:16,r:17,s:18,t:19,u:20,v:21,w:22,x:23,y:24,z:25}

let unlockedPokemons=[];

let timerStarted=false;
// let allSectionsCompleted=false;

let sectionsToComplete=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
console.log('start -> sectionsToComplete:');
console.log(sectionsToComplete);
const clearSection=(l)=>{
    const idx=sectionsToComplete.indexOf(l);
    sectionsToComplete.splice(idx,1);
    console.log('sectionsToComplete:');
    console.log(sectionsToComplete);

    if(sectionsToComplete.length<=0){
        stopTimer();
        alert("You Won!");
        const inputName=document.getElementById("enterPmnName");
        $(inputName).attr("disabled",true);
    }
}

const unlockPokemon=(thisInput)=>{
    const inputName=document.getElementById("enterPmnName");
    if(thisInput=="nidoran"){
        for(let i=0;i<pokemonList.length;i++){
            let numberOfNidoran=0;
            if(pokemonList[i]=="nidoran♀"||pokemonList[i]=="nidoran♂"){
                numberOfNidoran++;
                console.log("name correct!");
                console.log(thisInput);
                pokemonList.splice(i,1);
                unlockedPokemons.push(thisInput);
                localStorage.setItem("unlockedPokemons",JSON.stringify(unlockedPokemons));
                if(!timerStarted){
                    startTimer();
                }
                $(".f-single-pmn").each(function(){
                    if($(this).text()=="nidoran♀"||$(this).text()=="nidoran♂"){
                        $(this).removeAttr("hidden")
                        this.style.color = "black";
                        this.scrollIntoView();
                        let primaLettera=$(this).text().charAt(0)
                        let primaLet=letters[primaLettera]
                        let counterString=$("#letterCounterRemaining"+primaLet).text()
                        console.log("num "+counterString)
                        let counterNumber = parseInt(counterString)
                        counterNumber--;
                        $("#letterCounterRemaining"+primaLet).text(counterNumber)
                        if(counterNumber==0){
                            console.log("section complete!!")
                            $("#letterCounter"+primaLet).css("color","green");
                            clearSection(primaLettera);
                        }

                    }
                });
                inputName.value="";
                if(numberOfNidoran==2){
                    break;
                }
            }
        }

    }else{
        for(let i=0;i<pokemonList.length;i++){
            if(thisInput==pokemonList[i]){
                console.log("name correct!");
                console.log(thisInput);
                pokemonList.splice(i,1);
                unlockedPokemons.push(thisInput);
                localStorage.setItem("unlockedPokemons",JSON.stringify(unlockedPokemons));
                if(!timerStarted){
                    startTimer();
                }
                $(".f-single-pmn").each(function(){
                    if($(this).text()==thisInput){
                        $(this).removeAttr("hidden")
                        this.style.color = "black";
                        this.scrollIntoView();
                        let primaLettera=$(this).text().charAt(0)
                        console.log(primaLettera+" - "+letters[primaLettera])
                        let primaLet=letters[primaLettera]
                        let counterString=$("#letterCounterRemaining"+primaLet).text()
                        console.log("num "+counterString)
                        let counterNumber = parseInt(counterString)
                        counterNumber--;
                        $("#letterCounterRemaining"+primaLet).text(counterNumber)
                        if(counterNumber==0){
                            console.log("section complete!!")
                            $("#letterCounter"+primaLet).css("color","green");
                            clearSection(primaLettera);
                        }
                        // trimCanvas("canvas")
                    }
                });
                inputName.value="";
                break;
            }
        }
    }
   
}

const searchForLocalStorage=()=>{
    const local = localStorage.getItem("unlockedPokemons");
    const localHrs = localStorage.getItem("hrs");
    const localMins = localStorage.getItem("mins");
    const localSecs = localStorage.getItem("secs");
    if(local!=""){
        let localPokemons=JSON.parse(local);
        $("#presavesModal").fadeIn();
        $("#confirmPresaves").on("click",()=>{
            localPokemons.forEach(e => {
                unlockPokemon(e);    
            });    
            if(localSecs!=""&&localSecs!=0&&localSecs!=null&&localSecs!=undefined){
                displayTime(localSecs,"secs");
                secs_t=parseInt(localSecs);
            }
            if(localMins!=""&&localMins!=0&&localMins!=null&&localMins!=undefined){
                displayTime(localMins,"mins");
                min_t=parseInt(localMins);
            }
            if(localHrs!=""&&localHrs!=0&&localHrs!=null&&localHrs!=undefined){
                displayTime(localHrs,"hrs");
                hr_t=parseInt(localHrs);
            }
            $("#presavesModal").fadeOut();
        })
        $("#denyPresaves").on("click",()=>{
            localStorage.setItem("unlockedPokemons","");
            localStorage.setItem("hrs","");
            localStorage.setItem("mins","");
            localStorage.setItem("secs","");
            $("#presavesModal").fadeOut();
        })
        // if (window.confirm('Existing save detected. Load the save or start a new game?'))
        // {
        // }else{
        // }
    }

}
let hr_t=0;
let min_t=0;
let secs_t=0;
const displayTime=(t,d)=>{
    let html=t;
    if(t<=9){
        html=`0${t}`;
    }
    $(`#timer .${d}`).html(html);
    localStorage.setItem(d,t);
}
let myTimer;
const stopTimer=()=>{
    clearInterval(myTimer);
}
const startTimer=()=>{
    timerStarted=true;
    myTimer=setInterval(
        ()=>{
            secs_t++;
            if(secs_t>=60){
                secs_t=0;
                displayTime(secs_t,"secs");
                min_t++;
                if(min_t>=60){
                    min_t=0;
                    displayTime(min_t,"mins");
                    hr_t++;
                    displayTime(hr_t,"hrs");
                }else{
                    displayTime(min_t,"mins");
                }
            }else{
                displayTime(secs_t,"secs");
            }
        },1000
    )

}

const setEnv=()=>{
     $("#instructionsModal").fadeIn();
     $("#instructionsModal .btn-close").on("click",()=>{
        $("#instructionsModal").fadeOut();
        searchForLocalStorage();
     });
    $("#displayGameMode").html(gameMode);
    // const inputName=$("#enterPmnName")
    const inputName=document.getElementById("enterPmnName");
    $(inputName).on("input",function(){
    // inputName.addEventListener("keyup",function(){
        console.log("clicked!");
        const cleanInput=inputName.value.toLowerCase();
        unlockPokemon(cleanInput);
        
    })

    const switchModeBtn=document.getElementById("switchMode");
    switchModeBtn.addEventListener("click",function(){
        console.log("switch mode");
        let newMode=switchGameMode();
        console.log(newMode);
        newMode=="sprites"?spritesViewMode():listViewMode();
        $("#displayGameMode").html(newMode);

    })

    const endSolutionBtn=document.getElementById("endSolutionBtn");
    endSolutionBtn.addEventListener("click",function(){
        console.log("go to solution");
        if (window.confirm('If you go to the solution, this game will end. Proceed?'))
            {
                // They clicked Yes

                $(".f-single-pmn").each(function(){
                    // if($(this).text()==cleanInput){
                        $(this).removeAttr("hidden")
                        this.style.color = "black";
                        // this.scrollIntoView();
                        let primaLettera=$(this).text().charAt(0)
                        console.log(primaLettera+" - "+letters[primaLettera])
                        let primaLet=letters[primaLettera]
                        let counterString=$("#letterCounterRemaining"+primaLet).text()
                        console.log("num "+counterString)
                        let counterNumber = parseInt(counterString)
                        counterNumber--;
                        $("#letterCounterRemaining"+primaLet).text(counterNumber)
                        if(counterNumber==0){
                            console.log("section complete!!")
                            $("#letterCounter"+primaLet).css("color","green");
                            clearSection(primaLettera);
                        }
                    // }
                });
                inputName.value="";
            }
            else
            {
                // They clicked no
            }
        

    })

    const resetBtn=document.getElementById("resetBtn");
    resetBtn.addEventListener("click",function(){
        console.log("reset");
        unlockedPokemons=[];
        pokemonList=pokemonListBackup;
        $(".f-single-pmn").each(function(){    
            $(this).attr("hidden",true)
            this.style.color = "transparent";
        });
        $(".total-letter-counter").css("color","red");
        $(".remaining-letter-counter").each(function(id,elem){
            console.log("this number");
            const nextElem=$(elem).next().html().replace("<b>","").replace("</b>","");
            console.log(nextElem);
            $(elem).html(nextElem);
        });
        stopTimer();
        $("#timer span").html("00");
        timerStarted=false;
        localStorage.setItem("secs","");
        localStorage.setItem("mins","");
        localStorage.setItem("hrs","");
        secs_t=0;
        min_t=0;
        hr_t=0;
        inputName.value="";
        $(inputName).attr("disabled",false);
        localStorage.setItem("unlockedPokemons","");
        sectionsToComplete=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
        console.log('sectionsToComplete:');
        console.log(sectionsToComplete);
    })
}

const switchGameMode=()=>{
    gameMode=gameMode=="sprites"?"list":"sprites";
    return gameMode;
}
const spritesViewMode=()=>{
    console.log("spritesViewMode");
    $(".f-pokemon-name-span").addClass("d-none"); 
    $(".list-group-flush").addClass("flex-row"); 
    $(".list-group-flush").removeClass("flex-column"); 
}
const listViewMode=()=>{
    console.log("listViewMode");
    $(".f-pokemon-name-span").removeClass("d-none"); 
    $(".list-group-flush").removeClass("flex-row"); 
    $(".list-group-flush").addClass("flex-column"); 
}

$(function(){
    setEnv();
    // $("canvas").each(function(){
        // let thisId=$(this).attr("id")
        // drawCanva(thisId)
        // let copyCanvas=trimCanvas(thisId)
    // })
    
})