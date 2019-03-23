function pressEnterKey(){
    if( window.event.keyCode == 13 ){
          addSubject();
    }
}
function addSubject(){
    register = document.getElementById('register');
    talkingNow = document.getElementById('talkingNow');
    window.alert("お題を登録します：" + register.value);

    //<li>タグを追加しここにラジオボタンを入れる
    newSubjectSelectButtonPlace = document.createElement("li");
    newSubjectSelectButtonPlaceId = "li-id-of-" + register.value;
    newSubjectSelectButtonPlace.setAttribute('id', newSubjectSelectButtonPlaceId);
    document.getElementById('subjectList').appendChild(newSubjectSelectButtonPlace);

    // <input>タグの追加
    newSubjectSelectButton = document.createElement("input");
    newSubjectSelectButtonId = "button-id-of-" + register.value;
    newSubjectSelectButton.setAttribute('type', 'radio');
    newSubjectSelectButton.setAttribute('id', newSubjectSelectButtonId);
    newSubjectSelectButton.setAttribute('class', 'radio-inline__input');
    newSubjectSelectButton.setAttribute('name', 'registeredSubjects');
    newSubjectSelectButton.value = register.value;
    document.getElementById(newSubjectSelectButtonPlaceId).appendChild(newSubjectSelectButton);

    // テキストの追加
    newSubjectSelectButtonLabel = document.createElement("label");
    newSubjectSelectButtonLabel.setAttribute('class', 'radio-inline__label');
    newSubjectSelectButtonLabel.setAttribute('for', newSubjectSelectButtonId);
    newSubjectSelectButtonLabel.value = register.value;
    newSubjectSelectButtonLabel.innerHTML = register.value;
    document.getElementById(newSubjectSelectButtonPlaceId).appendChild(newSubjectSelectButtonLabel);


    // ラベルのテキストを挿入
    //newSubjectSelectButtonLabel.innerHTML = register.value;

    // <br> の追加
    newLineBrake = document.createElement("br");
    document.getElementById(newSubjectSelectButtonPlaceId).appendChild(newLineBrake);
    register.value = '';
}

function decideSubject(){
    talkingNow = document.getElementById('talkingNow');
    element = document.getElementById('subjectForm');

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
        choseSubjectParentId = 'li-id-of-' + choseSubject
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
