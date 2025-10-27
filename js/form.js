
//class contato

class contato {
    constructor(nome, email, telefone, tipo, mensagem) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.tipo = tipo;
        this.mensagem = mensagem;
    }

}

function Post(form) {

    let data = new contato(
        form.elements.namedItem("nome").value,
        form.elements.namedItem("email").value,
        form.elements.namedItem("telefone").value,
        form.elements.namedItem("tipo").value,
        form.elements.namedItem("mensagem").value);

    console.log("Dados do formulário:", data);

    alert(`Obrigado, ${data.nome}! Sua mensagem de ${data.tipo} foi enviada com sucesso.`);

    form.reset();
}

// Habilita/Desabilita o botão Enviar com base no checkbox de aceite
function bloquear(el) {
    const enviarBtn = document.getElementById('enviarBtn');
    if (!enviarBtn) return;

    const checked = !!(el && el.checked);
    enviarBtn.disabled = !checked;
    enviarBtn.style.opacity = checked ? '1' : '0.5';
    enviarBtn.style.cursor = checked ? 'pointer' : 'not-allowed';
}

// Inicializa estado do botão quando a página carrega
document.addEventListener('DOMContentLoaded', function () {
    const check1 = document.getElementById('check1');
    const enviarBtn = document.getElementById('enviarBtn');

    if (enviarBtn) {
        // botão começa desabilitado por padrão
        enviarBtn.disabled = true;
        enviarBtn.style.opacity = '0.5';
        enviarBtn.style.cursor = 'not-allowed';
    }

    if (check1) {
        // sincroniza estado inicial caso o checkbox tenha sido preservado
        bloquear(check1);
        // garante que mudanças no checkbox atualizem o botão
        check1.addEventListener('change', function () { bloquear(check1); });
    }
});
