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
        newSubjectTitle =document.createTextNode(register.value);
        document.getElementById('subjectList').appendChild(newSubjectTitle);
        newLineBrake = document.createElement("br");
        document.getElementById('subjectList').appendChild(newLineBrake);
        // talkingNow.innerHTML = register.value;
        register.value='';
}

function decideSubject(){
    selectedSubject = document.getElementById('register');
    talkingNow = document.getElementById('talkingNow');
    talkingNow.innerHTML = register.value;
}
