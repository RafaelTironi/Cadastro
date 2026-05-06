
document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const campos = [
            "inputNome", "inputCpf", "inputNasc", "inputTel", "inputEmail",
            "inputEndereco", "inputCity", "inputState", "inputZip",
            "inputCurso", "inputMatricula", "inputSenha", "inputConfirmarSenha"
        ];

        for (let i = 0; i < campos.length; i++) {
            let campo = document.getElementById(campos[i]);

            if (!campo || campo.value.trim() === "" || campo.value === "Selecione Seu Estado") {
                alert("Preencha todos os campos!");
                return;
            }
        }

        const senha = document.getElementById("inputSenha").value;
        const confirmar = document.getElementById("inputConfirmarSenha").value;

        if (senha !== confirmar) {
            alert("As senhas não coincidem!");
            return;
        }

        alert("Aluno cadastrado com sucesso!");
        form.reset();
    });

});