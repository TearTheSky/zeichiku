function pressEnterKey(){
    if( window.event.keyCode == 13 ){
          addSubject();
    }
}
function addSubject(){
    register = document.getElementById('register');
    talkingNow = document.getElementById('talkingNow');
    window.alert("お題を登録します：" + register.value);

    newSubjectSelectButtonPlace = document.createElement("div");
    newSubjectSelectButtonPlaceId = "part-of-" + register.value;
    newSubjectSelectButtonPlace.setAttribute('id', newSubjectSelectButtonPlaceId);
    document.getElementById('subjectList').appendChild(newSubjectSelectButtonPlace);

    newSubjectSelectButton = document.createElement("input");
    newSubjectSelectButton.setAttribute('type', 'radio');
    newSubjectSelectButton.setAttribute('name', 'registeredSubjects');
    newSubjectSelectButton.value = register.value;
    document.getElementById(newSubjectSelectButtonPlaceId).appendChild(newSubjectSelectButton);

    newSubjectTitle = document.createTextNode(register.value);
    document.getElementById(newSubjectSelectButtonPlaceId).appendChild(newSubjectTitle);
    newLineBrake = document.createElement("br");
    document.getElementById(newSubjectSelectButtonPlaceId).appendChild(newLineBrake);
    register.value = '';
}

function decideSubject(){
    talkingNow = document.getElementById('talkingNow');
    element = document.getElementById('subjectList');

    if (element.registeredSubjects === undefined){
        window.alert("お題はまだ選択されていないようです。\n登録しましたか？");
        return;
    } else {
        radioNodeList = element.registeredSubjects;
        choseSubject = radioNodeList.value;
    }

    if ( choseSubject === "" ) {
        window.alert("お題はまだ選択されていないようです。\n登録しましたか？");
        return;
    } else {
    	// aには選択状態の値が代入されている
        talkingNow.innerHTML = choseSubject;
        choseSubjectParentId = 'part-of-' + choseSubject
        choseSubjectParent = document.getElementById(choseSubjectParentId);
        choseSubjectParent.parentNode.removeChild(choseSubjectParent);
    }

}

function finishSubject(){
    talkingNow = document.getElementById('talkingNow');

    newFinishedSubject = document.createElement("p");
    newFinishedSubject.innerHTML = talkingNow.innerHTML
    document.getElementById('finishedSubjectList').appendChild(newFinishedSubject);
    talkingNow.innerHTML='';
}
