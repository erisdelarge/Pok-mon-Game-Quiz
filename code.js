const cap=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const spritesBaseUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
let gameMode="sprites";
// cn=0;
const createSprite=(lista,nome)=>{
  for(let s=0; s<lista.length;s++){
    let spriteName=lista[s].name;
    if(spriteName==nome){
      spriteN=lista[s].id;
      break;
    }
  }

    spriteUrl=spritesBaseUrl+spriteN+".png";
    // cn++;
    spriteImg="<img class='f-sprite-img' src='"+spriteUrl+"'>";
    // spriteImg="<canvas id='canvasId"+cn+"'></canvas>";
    // cutSpriteImg=trimCanvas(spriteImg)
    // return cutSpriteImg;
    return spriteImg
}

const createCards=(alphabet,listaCompleta,lunghezzaLettere)=>{
  for(let a=0;a<alphabet.length;a++){
    let card="<div class='col-auto my-1'><div class='card'><div class='card-header'>"+cap[a]+"<span id='letterCounterRemaining"+a+"' class='ms-3'>"+lunghezzaLettere[a]+"</span><span id='letterCounter"+a+"' class='ms-3' style='color:red;'><b>"+lunghezzaLettere[a]+"</b></span></div><ul class='list-group list-group-flush d-flex flex-row flex-wrap f-card-bg-"+a+"'>";
    alphabetSection=alphabet[a];
    for(let b=0;b<alphabetSection.length;b++){
      // flex-fill
      card+="<li class='list-group-item f-single-pmn' hidden id='list"+a+"item"+b+"'>"+createSprite(listaCompleta,alphabetSection[b])+"<span class='f-pokemon-name-span d-none'>"+alphabetSection[b]+"</span>"+"</li>";
    }
    card+="</ul></div></div>";
    $("#pokemonList").append(card);
  }
}

var pmnList="";
var completePokemonList=[];
var pokemonList=Array();var aList=Array();var bList=Array();var cList=Array();var dList=Array();var eList=Array();var fList=Array();var gList=Array();var hList=Array();var iList=Array();var jList=Array();var kList=Array();var lList=Array();var mList=Array();var nList=Array();var oList=Array();var pList=Array();var qList=Array();var rList=Array();var sList=Array();var tList=Array();var uList=Array();var vList=Array();var wList=Array();var xList=Array();var yList=Array();var zList=Array();
var alphabet=[];

// $.ajax({
//     type: 'GET',
//       dataType:"json",
//       async: false,
//     url: 'https://pokeapi.co/api/v2/pokemon/?limit=1010',
//     success: function (data) {
//       pmnList= data;
//       console.log(pmnList);
//     }
// });
// $.getJSON("pokemonList.json", function(data) {
//   pmnList= data;
//   console.log(pmnList); // this will show the info it in firebug console
// });
pmnList=allPokemons;
console.log(pmnList);
//get name values from pokemon api 
console.log(pmnList);
results =pmnList.results;
console.log(results);
for(i=0;i<results.length;i++){
    pmn=results[i];
    console.log(pmn);
    pmnName=pmn.name; 
    pmnNumber=i+1;
    if(i>=983&&i<=994){pmnName=pmnName.replace("-"," ")} ;
    if(i>=1004&&i<=1009){pmnName=pmnName.replace("-"," ")} ;

    if(i==28){pmnName="nidoran♀"};
    if(i==31){pmnName="nidoran♂"};
    if(i==82){pmnName="farfetch'd"};if(i==121){pmnName="mr. mime"};if(i==385){pmnName="deoiys"};if(i==412){pmnName="wormadam"};if(i==438){pmnName="mime jr."};if(i==486){pmnName="giratina"};if(i==491){pmnName="shaymin"};if(i==549){pmnName="basculin"};if(i==554){pmnName="darmanitan"};if(i==640){pmnName="tornadus"};if(i==641){pmnName="thundurus"};if(i==644){pmnName="landorus"};if(i==646){pmnName="keldeo"};if(i==647){pmnName="meloetta"};if(i==668){pmnName="flabébé"};if(i==677){pmnName="meowstic"};if(i==680){pmnName="aegislash"};if(i==709){pmnName="pumpkaboo"};if(i==710){pmnName="gourgeist"};if(i==717){pmnName="zygarde"};if(i==740){pmnName="oricorio"};if(i==744){pmnName="lycanroc"};if(i==745){pmnName="wishiwashi"};if(i==771){pmnName="type: null"};if(i==773){pmnName="minior"};if(i==777){pmnName="mimikyu"};if(i==784){pmnName="tapu koko"};if(i==785){pmnName="tapu lele"};if(i==786){pmnName="tapu bulu"};if(i==787){pmnName="tapu fini"};if(i==848){pmnName="toitricity"};if(i==864){pmnName="sirfetch'd"};if(i==865){pmnName="mr. rime"};if(i==874){pmnName="eiscue"};if(i==875){pmnName="indeedee"};if(i==876){pmnName="morpeko"};if(i==891){pmnName="urshifu"};if(i==901){pmnName="basculegion"};if(i==904){pmnName="enamorus"};

    pokemonList.push(pmnName);
    let object={"id":pmnNumber,"name":pmnName}
    completePokemonList.push(object)
}
console.log(pokemonList);
console.log(completePokemonList);
// list="<ul>";
//substitute incorrect pokemon names
// for(x=0;x<pokemonList.length;x++){
//   if(x==28){pokemonList[x]="nidoran♀"};
//   if(x==31){pokemonList[x]="nidoran♂"};
//   if(x==82){pokemonList[x]="farfetch'd"};if(x==121){pokemonList[x]="mr. mime"};if(x==385){pokemonList[x]="deoxys"};if(x==412){pokemonList[x]="wormadam"};if(x==438){pokemonList[x]="mime jr."};if(x==486){pokemonList[x]="giratina"};if(x==491){pokemonList[x]="shaymin"};if(x==549){pokemonList[x]="basculin"};if(x==554){pokemonList[x]="darmanitan"};if(x==640){pokemonList[x]="tornadus"};if(x==641){pokemonList[x]="thundurus"};if(x==644){pokemonList[x]="landorus"};if(x==646){pokemonList[x]="keldeo"};if(x==647){pokemonList[x]="meloetta"};if(x==668){pokemonList[x]="flabébé"};if(x==677){pokemonList[x]="meowstic"};if(x==680){pokemonList[x]="aegislash"};if(x==709){pokemonList[x]="pumpkaboo"};if(x==710){pokemonList[x]="gourgeist"};if(x==717){pokemonList[x]="zygarde"};if(x==740){pokemonList[x]="oricorio"};if(x==744){pokemonList[x]="lycanroc"};if(x==745){pokemonList[x]="wishiwashi"};if(x==771){pokemonList[x]="type: null"};if(x==773){pokemonList[x]="minior"};if(x==777){pokemonList[x]="mimikyu"};if(x==784){pokemonList[x]="tapu koko"};if(x==785){pokemonList[x]="tapu lele"};if(x==786){pokemonList[x]="tapu bulu"};if(x==787){pokemonList[x]="tapu fini"};if(x==848){pokemonList[x]="toxtricity"};if(x==864){pokemonList[x]="sirfetch'd"};if(x==865){pokemonList[x]="mr. rime"};if(x==874){pokemonList[x]="eiscue"};if(x==875){pokemonList[x]="indeedee"};if(x==876){pokemonList[x]="morpeko"};if(x==891){pokemonList[x]="urshifu"};if(x==901){pokemonList[x]="basculegion"};if(x==904){pokemonList[x]="enamorus"};
//   // list+="<li>"+x+" "+pokemonList[x]+"</li>";
// }
// list+="</ul>";
//show pmn list elem in html
// $("#pokemonList").html(list);
const pokemonListBackup = [...pokemonList];
//create arrays with pokemons divided by alphabet

for(a=0;a<pokemonList.length;a++){
   var elem =pokemonList[a];
   var letter=elem.charAt(0);
   if (letter=="a"){aList.push(elem)}else if (letter=="b"){bList.push(elem)}else if (letter=="c"){cList.push(elem)}else if (letter=="d"){dList.push(elem)}else if (letter=="e"){eList.push(elem)}else if (letter=="f"){fList.push(elem)}else if (letter=="g"){gList.push(elem)}else if (letter=="h"){hList.push(elem)}else if (letter=="i"){iList.push(elem)}else if (letter=="j"){jList.push(elem)}else if (letter=="k"){kList.push(elem)}else if (letter=="l"){lList.push(elem)}else if (letter=="m"){mList.push(elem)}else if (letter=="n"){nList.push(elem)}else if (letter=="o"){oList.push(elem)}else if (letter=="p"){pList.push(elem)}else if (letter=="q"){qList.push(elem)}else if (letter=="r"){rList.push(elem)}else if (letter=="s"){sList.push(elem)}else if (letter=="t"){tList.push(elem)}else if (letter=="u"){uList.push(elem)}else if (letter=="v"){vList.push(elem)}else if (letter=="w"){wList.push(elem)}else if (letter=="x"){xList.push(elem)}else if (letter=="y"){yList.push(elem)}else if (letter=="z"){zList.push(elem)}
}
console.log(aList);console.log(bList);console.log(cList);console.log(dList);console.log(eList);console.log(fList);console.log(gList);console.log(hList);console.log(iList);console.log(jList);console.log(kList);console.log(lList);console.log(mList);console.log(nList);console.log(oList);console.log(pList);console.log(qList);console.log(rList);console.log(sList);console.log(tList);console.log(uList);console.log(vList);console.log(wList);console.log(xList);console.log(yList);console.log(zList);

alphabet.push(aList,bList,cList,dList,eList,fList,gList,hList,iList,jList,kList,lList,mList,nList,oList,pList,qList,rList,sList,tList,uList,vList,wList,xList,yList,zList)
console.log(alphabet)
var lettersLength=[];
for(let a=0;a<alphabet.length;a++){
let alphabetSublist=alphabet[a];
lettersLength.push(alphabetSublist.length)
}
createCards(alphabet,completePokemonList,lettersLength)
