let formSection = document.querySelector('#form');

let mostrarForm = function () {
    formSection.innerHTML = `
    <div class="mb-3">
    <label for="emailInput" class="form-label">Endereço de Email</label>
    <input type="email" class="form-control" id="emailInput" placeholder="nome@exemplo.com">
    </div>
    <div class="mb-3">
    <label for="pswdInput" class="form-label">Senha</label>
    <input type="password" class="form-control" id="pswdInput" placeholder="Senha"></textarea>
    </div>
    <div class="mb-3" id="btnDiv">
    <button type="button" class="btn btn-success" id="enviar">Enviar</button>
    <button type="button" class="btn btn-danger" id="cancelar">Cancelar</button>
    </div>`;

    rmButton.setAttribute("hidden",true);

    let btnCancelar = document.querySelector("#cancelar");
    btnCancelar.addEventListener("click", voltarAtras);

    let btnEnviar = document.querySelector("#enviar");
    btnEnviar.addEventListener("click", enviar);
}

let voltarAtras = function () {
    formSection.innerHTML = ``;
    rmButton.removeAttribute("hidden");
}

let enviar = function () {
    let btnDiv = document.querySelector("#btnDiv");
    let mensagem = document.createElement("div");
    mensagem.classList.add("alert","alert-success","alert-dismissible","mt-5");
    mensagem.setAttribute("role", "alert");
    mensagem.setAttribute("id", "mensagem");
    mensagem.innerHTML = `<strong style="display: block;">Legal! Dados enviados!</strong> Clique no (X) dessa mensagem para voltar atrás.
    <button type="button" class="btn-close" id="fechar" data-bs-dismiss="alert" aria-label="Close"></button>`;
    btnDiv.insertAdjacentElement('beforebegin',mensagem);
    btnDiv.remove();   
    let btnFechar = document.querySelector("#fechar");
    btnFechar.addEventListener("click", voltarAtras);
}

let rmButton = document.querySelector("#doit");
rmButton.addEventListener("click", mostrarForm);
