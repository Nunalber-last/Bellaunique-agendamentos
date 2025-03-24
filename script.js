// Função para ajustar a exibição em telas pequenas
function ajustarResponsividade() {
    const larguraTela = window.innerWidth;

    // Ajustar o layout da seção "unhas-e-cilios" para dispositivos móveis
    const unhasECilios = document.querySelector('.unhas-e-cilios');
    if (larguraTela < 768) {
        unhasECilios.style.flexDirection = 'column';  // Exibe as seções em coluna
    } else {
        unhasECilios.style.flexDirection = 'row';  // Exibe as seções em linha
    }

    // Ajustar o tamanho da logo em telas pequenas
    const logo = document.querySelector('.logo');
    if (larguraTela < 768) {
        logo.style.width = '120px';  // Reduz o tamanho da logo em dispositivos móveis
        logo.style.height = '120px';
    } else if (larguraTela < 1024) {
        logo.style.width = '130px';
        logo.style.height = '130px';
    } else {
        logo.style.width = '150px';  // Logo em tamanho normal
        logo.style.height = '150px';
    }

    // Ajustar a largura dos links em telas pequenas
    const links = document.querySelectorAll('.link-item');
    links.forEach(link => {
        if (larguraTela < 768) {
            link.style.width = '100%';  // Links ocupam toda a largura da tela
        } else {
            link.style.width = '90%';  // Links ocupam 90% da largura em telas maiores
        }
    });

    // Ajustar a largura dos links de e-mail em telas pequenas
    const emailLinks = document.querySelectorAll('.link-email');
    emailLinks.forEach(link => {
        if (larguraTela < 768) {
            link.style.width = '100%';  // Links de e-mail ocupam toda a largura da tela
        } else {
            link.style.width = '90%';  // Links de e-mail ocupam 90% da largura em telas maiores
        }
    });
}

// Chama a função na inicialização
ajustarResponsividade();

// Chama a função toda vez que a tela for redimensionada
window.addEventListener('resize', ajustarResponsividade);

