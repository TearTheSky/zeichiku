function pressEnterKey(){
    if( window.event.keyCode == 13 ){
          addSubject();
    }
}
function addSubject(){
    register = document.getElementById('register');
    talkingNow = document.getElementById('talkingNow');
    window.alert("お題を登録します：" + register.value);

    newSubjectSelectButton = document.createElement("input");
    newSubjectSelectButton.setAttribute('type', 'radio');
    newSubjectSelectButton.setAttribute('name', 'registeredSubjects');
    newSubjectSelectButton.value = register.value;
    document.getElementById('subjectList').appendChild(newSubjectSelectButton);

    newSubjectTitle = document.createTextNode(register.value);
    document.getElementById('subjectList').appendChild(newSubjectTitle);
    newLineBrake = document.createElement("br");
    document.getElementById('subjectList').appendChild(newLineBrake);
    register.value = '';
}

function decideSubject(){
    talkingNow = document.getElementById('talkingNow');

    var element = document.getElementById('subjectList');
    var radioNodeList = element.registeredSubjects;

    if (radioNodeList.value === undefined){

    } else {
        var choseSubject = radioNodeList.value;
    }

    if ( choseSubject === "" ) {
        window.alert("お題はまだ選択されていないようです。\n登録しましたか？");
        return;
    } else {
    	// aには選択状態の値が代入されている
        talkingNow.innerHTML = choseSubject;
    }

}

function finishSubject(){
    talkingNow = document.getElementById('talkingNow');

    newFinishedSubject = document.createElement("p");
    newFinishedSubject.innerHTML = talkingNow.innerHTML
    document.getElementById('finishedSubjectList').appendChild(newFinishedSubject);
    talkingNow.innerHTML='';
}
