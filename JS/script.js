$(document).ready(function () {

    $("#carrosel img:eq(0)").addClass("banner-ativo").show()

    setInterval(slide, 4000)

    function slide() {
        if ($(".banner-ativo").next().length) {
            $(".banner-ativo").removeClass("banner-ativo").hide().next().addClass("banner-ativo").show()
        } else {
            $(".banner-ativo").removeClass().hide()
            $("#carrosel img:eq(0)").addClass("banner-ativo").show()
        }
    }


    $("#barras").mouseover(function () {
        $("#menu").toggleClass("menu-ativo")
    })

    // --------- Exemplo da aula usando removeClass/addClass -----

    // if ($("#menu").hasClass("menu-ativo")) {
    //     $("#menu").removeClass("menu-ativo")
    // } else {
    //     $("#menu").addClass("menu-ativo")
    // }


    // -------- tentativa de menu-setas pelo exemplo da aula -----


    // $("#seta-produtos").click(function () {
    //     $("#produtos-links").toggleClass("menu-ativo")
    // })
    // $("#seta-noticiais").click(function () {
    //     $("#noticias-links").toggleClass("menu-ativo")
    // })
    // $("#seta-suporte").click(function () {
    //     $("#sup-links").toggleClass("menu-ativo")
    // })

    // -------- tentativa de menu-setas pelo stackoverflow -----

    // $('#seta-produtos').on('mouseover', function () {
    //     $('.produtos-link').show();
    // });

    // $('#seta-produtos').on('mouseout', function () {
    //     $('.produtos-link').hide();
    // });





})
// --------- fechamento do ready(function()) -------------------



// let menu = document.getElementById("menu");
// function mostrarMenu() {
//     if (menu.style.display != "none") {
//         menu.style.display = "none"
//     } else {
//         menu.style.display = "flex"
//     }
// }



// --AULA--- pegando o input de e-mail ----- sem app no projeto
// let email = document.getElementById("campo-email");

// function enviarEmail() {
//     let emailDigitado = email.value;
//     console.log(emailDigitado)
// }
// ------------------------------------------------------------


// ---AULA ---- Declaração de Array (objetos {}, propriedades "...:")
let listaProdutos = [
    {
        titulo: "Óculos de Realidade Virtual",
        valorInicial: "10.099,00",
        valorPromocional: "8.999,00",
        valorParcelado: "12x de 799,90"
    },
    {
        titulo: "PC gamer completo",
        valorInicial: "de R$ 11.099,00",
        valorPromocional: "por R$ 9.999,00",
        valorParcelado: "ou 12x de 859,90"
    },
    {
        titulo: "Óculos de Realidade Virtual",
        valorInicial: "de R$ 10.099,00",
        valorPromocional: "por R$ 8.999,00",
        valorParcelado: "ou 12x de 799,90"
    },
    {
        titulo: "Óculos de Realidade Virtual",
        valorInicial: "de R$ 10.099,00",
        valorPromocional: "por R$ 8.999,00",
        valorParcelado: "ou 12x de 799,90"
    },
    {
        titulo: "Óculos de Realidade Virtual",
        valorInicial: "de R$ 10.099,00",
        valorPromocional: "por R$ 8.999,00",
        valorParcelado: "ou 12x de 799,90"
    },
    {
        titulo: "Óculos de Realidade Virtual",
        valorInicial: "de R$ 10.099,00",
        valorPromocional: "por R$ 8.999,00",
        valorParcelado: "ou 12x de 799,90"
    },

]

// -----AULA ------ App array (dados) no HTML ---------
function renderizarProdutos() {
    let espaco = document.getElementById("promo-card")

    let template = "";

    for (let index = 0; index < listaProdutos.length; index++) {
        const produto = listaProdutos[index];

        template += `<div class="promo-card">
        <a href=""><img src="img/vr.png" alt="promo 1"></a>
        <h3> ${produto.titulo}</h3> <br>
        <h4>de R$ ${produto.valorInicial}<br>
            por R$ ${produto.valorPromocional}</h4> <br>
        <h5>ou ${produto.valorParcelado}</h5>
    </div>`
    }

    espaco.innerHTML = template;
}

