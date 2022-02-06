let mixedMessages2 = [

{
    deel1: 'Buffon',
    deel2: 'gestopt',
    deel3: 'met voetballen en hockeywedstrijden'
}

];

function phraseFactory(phrase){
    let phraseToArray = phrase.split(' ');
    let firstCharScnWord = phraseToArray[1][0];
    let strFirstPart;
    let strSecondPart;
    let strThirdPart;
    let strFinalThirdPart = '';
    if(firstCharScnWord == firstCharScnWord.toUpperCase()){
        strFirstPart = phraseToArray[0] + ' ' + phraseToArray[1];
        strSecondPart = phraseToArray[2];
        strThirdPart = phraseToArray.slice(3,phraseToArray.length);
        for(let i = 0; i < strThirdPart.length;i++){
            let thisPart = strThirdPart[i];
            strFinalThirdPart = strFinalThirdPart + ' ' + thisPart;
        }
        strFinalThirdPart = strFinalThirdPart.slice(1);
    } else if(firstCharScnWord == firstCharScnWord.toLowerCase()){
        strFirstPart = phraseToArray[0];
        strSecondPart = phraseToArray[1];
        strThirdPart = phraseToArray.slice(2,phraseToArray.length);
        for(let i = 0; i < strThirdPart.length;i++){
            let thisPart = strThirdPart[i];
            strFinalThirdPart = strFinalThirdPart + ' ' + thisPart;
        }
        strFinalThirdPart = strFinalThirdPart.slice(1);
    };
    let objToPush = {
        deel1: strFirstPart,
        deel2: strSecondPart,
        deel3: strFinalThirdPart
    };
    mixedMessages2.push(objToPush);
};

function randomlyPickMessageParts(){
    let messagePartOne;
    let messagePartTwo;
    let messagePartThree;
    for(let i = 0;i < 3;i++){
        let messageArray = Math.floor(Math.random()*mixedMessages2.length);
        if(i === 0){
            messagePartOne = mixedMessages2[messageArray].deel1;
        } else if(i === 1){
            messagePartTwo = mixedMessages2[messageArray].deel2;
        } else if(i === 2){
            messagePartThree = mixedMessages2[messageArray].deel3;
        };
    };
    return messagePartOne + ' ' + messagePartTwo + ' ' + messagePartThree;
}

phraseFactory('Ajax wint van Vd Sar met voetballen en paardrijden');
phraseFactory('Zlatan naar Feyenoord');
phraseFactory('Ajax koopt Luc Nilis');
phraseFactory('FC Utrecht naar China');
phraseFactory('Stanley Menzo gedagradeerd Duitsland');
phraseFactory('Richard Knopper stopt op 84-jarige leeftijd');
phraseFactory('Zidane verliest Cambuur Leeuwarden');
phraseFactory('Arne Slot wint Spakenburg');
console.log(randomlyPickMessageParts());



