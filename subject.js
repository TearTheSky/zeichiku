function pressEnterKey(){
    if( window.event.keyCode == 13 ){
          addSubject();
    }
}
function addSubject(){
    register = document.getElementById('register');
    if (register.value ==+ ""){
        return
    } else {
        talkingNow = document.getElementById('talkingNow');
    }
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

    // <br> の追加
    register.value = '';
}

function decideSubject(){
    talkingNow = document.getElementById('talkingNow');
    element = document.getElementById('subjectForm');

    var radioButtons = document.getElementsByName("registeredSubjects");
    if(radioButtons.length === 0){
        window.alert("話題が1個も登録されていません");
        return;
    }

    if(talkingNow.innerHTML){
        window.alert("選択中の話題を先に終わらせてください");
        return;
    }

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
        choseSubjectParentId = 'li-id-of-' + choseSubject;
        choseSubjectParent = document.getElementById(choseSubjectParentId);
        choseSubjectParent.parentNode.removeChild(choseSubjectParent);
    }

}

function randamChooseSubject(){
    talkingNow = document.getElementById('talkingNow');
    existSubjects = [];
    var radioButtons = document.getElementsByName("registeredSubjects");

    if(radioButtons.length === 0){
        window.alert("話題が1個も登録されていません");
        return;
    }

    if(talkingNow.innerHTML){
        window.alert("選択中の話題を先に終わらせてください");
        return;
    }

    for (var i=0; i < radioButtons.length; i++) {
        existSubjects.push(radioButtons[i].value);
    }
    choseSubject = existSubjects[ Math.floor( Math.random() * existSubjects.length ) ];
    window.alert('選ばれたのは ' + choseSubject + ' でした');
    // 選ばれた話題を登録
    talkingNow.innerHTML = choseSubject;
    choseSubjectParentId = 'li-id-of-' + choseSubject;
    choseSubjectParent = document.getElementById(choseSubjectParentId);
    choseSubjectParent.parentNode.removeChild(choseSubjectParent);
}

function finishSubject(){
    talkingNow = document.getElementById('talkingNow');
    newFinishedSubject = document.createElement("p");
    newFinishedSubject.innerHTML = talkingNow.innerHTML
    document.getElementById('finishedSubjectList').appendChild(newFinishedSubject);
    talkingNow.innerHTML='';
}
