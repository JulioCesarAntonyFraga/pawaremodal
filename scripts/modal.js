var input_name = document.getElementById('input_name')
var input_email = document.getElementById('input_email')

var name_error = document.getElementById('name_error')
var email_error = document.getElementById('email_error')

var btn_submit = document.getElementById('btn_submit')

var msg = document.getElementById('msg')
var msg_error = document.getElementById('msg_error')

function send(){


    if(input_name.value == ''){

        name_error.style.color = 'red'
        name_error.style.fontSize = '14px'
        name_error.innerHTML = 'Por favor, preencha o seu nome antes de enviar'

    }
    else{

        name_error.innerHTML = ''

    }
    if(input_email.value == ''){

        email_error.style.color = 'red'
        email_error.style.fontSize = '14px'
        email_error.innerHTML = 'Por favor, preencha o seu email antes de enviar'

    }
    else{

        email_error.innerHTML = ''

    }
    if(msg.value == ''){

        msg_error.style.color = 'red'
        msg_error.style.fontSize = '14px'
        msg_error.innerHTML = 'Por favor, insira sua mensagem antes de enviar'

    }
    else{

        msg_error.innerHTML = ''

    }
    if(input_name.value != '' && input_email.value != '' && msg.value != ''){

        btn_submit.type = "submit"

    }

}