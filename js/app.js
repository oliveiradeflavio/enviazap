
$('#celular').mask('(00) 00000-0000');

function enviar_mensagem(){

    let celular  = document.getElementById('celular');
    let mensagem = document.getElementById('mensagem');
    let btn_enviar = document.getElementById('btn-enviar');
    

    if(celular.value.length < 15 || celular.value == ''){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor, digite um celular válido!',
        });
        btn_enviar.disabled = true;
        return false;
    }else {
        btn_enviar.disabled = false;
    }

    btn_enviar.addEventListener('click', function(){
        celular = celular.value.replace(/\D/g, '');
        let url = 'https://api.whatsapp.com/send?phone=55'+celular+'&text='+mensagem.value;
        window.open(url);
    });    
}

function limpaCampos(){
    document.getElementById('celular').value = '';
    document.getElementById('mensagem').value = '';
    document.getElementById('btn-enviar').disabled = true;
}
