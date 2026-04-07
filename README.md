Documentação Técnica: Landing Page Institucional
Projeto: Desenvolvimento Front-end - Landing Page
Empresa: Wayzen Result (Consultoria em Processos, Tecnologia e BPO)
Preparado para: Kelly Amaral e Felipe Kogati
Data: Abril de 2026

1. Visão Geral do Projeto
Este documento detalha a estrutura, tecnologias e funcionamento da Landing Page desenvolvida para a Wayzen Result. O projeto consiste em uma página única (Single Page Application - SPA) focada em conversão, apresentação institucional e detalhamento de serviços.

A interface foi projetada para ser totalmente responsiva (Mobile First adaptado), performática e de fácil manutenção, utilizando tecnologias web nativas sem dependência de frameworks pesados.

2. Tecnologias Utilizadas
HTML5: Marcação semântica para acessibilidade e melhor indexação (SEO).

CSS3: Estilização pura, utilizando Custom Properties (Variáveis) para padronização de cores, Flexbox e CSS Grid para criação de layouts dinâmicos.

JavaScript (ES6+): Código "Vanilla" (puro) para interações de interface, animações baseadas em rolagem e observação de elementos, garantindo alta performance.

Tipografia: Fontes 'Sora' (para títulos) e 'Inter' (para parágrafos), importadas via Google Fonts.

3. Estrutura de Arquivos
Para o perfeito funcionamento do site no servidor, os arquivos estão organizados na seguinte estrutura de diretórios:

Plaintext
/wayzen-site
│
├── index.html          # Arquivo principal de marcação (HTML)
├── css/
│   └── style.css       # Folha de estilos central
├── js/
│   └── main.js         # Lógica de interações e animações
└── imagens/            # Diretório de mídia
    ├── banner.png
    ├── img2.png
    ├── img3.png
    ├── img4.png
    ├── img5.png
    └── img6.png
4. Arquitetura do Código
4.1. HTML (Estrutura de Seções)
A página está dividida em seções modulares e autossuficientes:

<nav id="navbar">: Cabeçalho com logo e botão de "Entre em Contato" (Call to Action principal).

.hero: Primeira dobra de alto impacto com proposta de valor e fundo em imagem.

#essence: Seção institucional "Sobre Nós".

#pillars: Grid de cards detalhando a abordagem metodológica.

#services: Listagem dos serviços principais (Consultoria, Outsourcing e BPO).

#stats: Indicadores de sucesso animados (Contadores).

.presence: Seção de atuação geográfica e mapa.

footer: Rodapé com logo, ícones de redes sociais (SVG in-line para carregamento instantâneo) e informações de direitos autorais.

4.2. CSS (Estilos e Responsividade)
Variáveis Globais (:root): Todas as cores da marca estão definidas no topo do arquivo. Para alterar o esquema de cores globalmente, basta modificar os valores hexadecimais nesta seção.

Animações (.fade-in): Classes utilitárias criadas para ocultar elementos inicialmente e transicioná-los suavemente na tela (opacidade e eixo Y) quando ativadas pelo JavaScript.

Media Queries: O layout quebra graciosamente em 900px (Tablets) e 600px (Smartphones), transformando grids multicolunas em layouts de coluna única para facilitar a leitura.

4.3. JavaScript (Interatividade)
O arquivo main.js controla três eventos principais através da API nativa do navegador para garantir performance livre de engasgos (jank-free):

Scroll do Navbar: Detecta quando a tela é rolada mais de 20px e aplica uma sombra e cor de fundo sólida ao menu para garantir a legibilidade sobre textos claros.

Intersection Observer (Fade): Monitora quando as seções entram na área visível da tela do usuário e adiciona a classe .visible para disparar as animações do CSS.

Contadores Numéricos: Monitora a seção #stats. Quando visível, inicia um loop de tempo (setInterval) que incrementa os números de 0 até o alvo (+30, +40, +60) de forma fluida.

5. Guia de Manutenção e Atualização
Como alterar as cores principais?
Abra o arquivo css/style.css, vá até as primeiras linhas (:root) e modifique os códigos Hexadecimais. Exemplo:

CSS
:root {
  --blue-dark: #NOVA_COR;
  --blue-mid: #NOVA_COR;
}
Como alterar as imagens?
Substitua as imagens dentro da pasta imagens/ garantindo que possuam o mesmo nome de arquivo referenciado no HTML (ex: img2.png), ou altere o caminho diretamente na tag <img> no arquivo index.html. É altamente recomendável otimizar o peso das imagens antes do upload para não impactar o tempo de carregamento da página.

Como atualizar os links das Redes Sociais?
No final do arquivo index.html, localize o bloco <div class="footer-social">. Modifique o atributo href="#" para o link real da empresa:

HTML
<a href="https://instagram.com/wayzenresult" class="social-icon" title="Instagram">...</a>
6. Implantação (Deployment)
O projeto é estático (Front-end puro) e encontra-se atualmente hospedado e em produção na plataforma Vercel, que oferece integração contínua (CI/CD) com o repositório e garante alta velocidade de carregamento global através de sua CDN.

7. Links Importantes
🌐 Site em Produção (Live Demo): https://projeto-integrador-iiib.vercel.app

💻 Repositório de Código (GitHub): https://github.com/vitorkogati07/projeto-integrador-IIIB
