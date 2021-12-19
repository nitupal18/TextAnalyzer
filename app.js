let charCount=document.getElementById('char'),
    wordCount=document.getElementById('word'),
    sentence=document.getElementById('sentences'),
    spaces=document.getElementById('spaces'),
    punctuation=document.getElementById('punctuations');
const textArea=document.querySelector('.text-entry textarea'),
      processBtn=document.getElementById('process-btn');
let UIValues=[charCount,wordCount,sentence,spaces,punctuation];
function init(){
    UIValues.forEach(value => value.innerHTML=0);
}
init();

processBtn.addEventListener('click',()=>{
    let text=textArea.value;
    charCount.innerHTML=text.length;
    wordCount.innerHTML=findWord(text);
    sentence.innerHTML=findSentences(text);
    spaces.innerHTML=text.split(" ").length-1;
    punctuation.innerHTML=findPunctuations(text);
});

function findWord(text){
    let tempText=text.replace(/[.,!%*;'"-()]/g,"");
    tempText=tempText.replace(/[\r]/g,"").split(/\n/);

    let templist=[];
    tempText.forEach(word => templist.push(word.split(" ")));
    function extract(arr){
        return arr.reduce((wordList,word)=>{
            return wordList.concat(Array.isArray(word)?extract(word):word);
        },[]);
    }
    let wordList =extract(templist);
    return wordList.filter(char=> char !='').length;

}

function findSentences(text){
    const regex = /[\w|\)][.?!](\s|$)/g;
    let senCount=text.match(regex);
    return senCount?senCount.length:0;
}

function findPunctuations(text){
    const regex=/[.,?;:!-'"(){}]/g;
    let puncCount=text.match(regex);
    return puncCount?puncCount.length:0;
}