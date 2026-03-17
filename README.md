# RestaurArt - Plataforma de Restauração Digital de Fotografias

Uma Landing Page moderna, emocional e totalmente responsiva desenvolvida para um serviço profissional de restauração de fotos antigas e danificadas.

## 🌟 Sobre o Projeto

A ideia principal desta Landing Page é atrair e converter clientes que procuram resgatar a qualidade e a cor das suas memórias em antigas fotografias. O design foi projetado com uma paleta "premium" (com o fundo noturno do `slate-950` e detalhes ricos em tons de "ouro" luxuoso `gold-500` e âmbares), gerando logo o impacto inicial emocional devido.

O projeto apresenta desde as motivações aos processos ("Como Funciona"), benefícios, pacotes de preços de entrada e depoimentos.

## 🚀 Tecnologias e Ferramentas Utilizadas

Este projeto engloba stack modernas de desenvolvimento front-end para garantir performance e efeitos bonitos de usabilidade.

- **[React](https://react.dev/) + [Vite](https://vitejs.dev/)** - Core do ecossistema e ferramentas de compilação super rápidas.
- **[Tailwind CSS (v3)](https://v3.tailwindcss.com/)** - Framework CSS Utility-First utilizado em toda a estilização, com cores e sistema de design facilmente escaláveis.
- **[Framer Motion](https://www.framer.com/motion/)** - Motor avançado de animações e micro-interações do React. Usado para todos os "Scroll Reveals" pela página.
- **[Lucide React](https://lucide.dev/)** - Biblioteca de ícones versáteis e consistentes no formato SVG.

## 🛠 Funcionalidades e Seções Construídas

1. **Hero Animado:** Headline arrebatadora e botão Call-To-Action focado para contato no WhatsApp, rodeado por uma suave presença mágica luminosa via efeitos de desfoque radial construídos em CSS.
2. **Componente 'Slider Antes/Depois':** Um widget visual programado do zero para demonstrar com facilidade a diferença notável do estado de foto danificada versus restaurada do serviço em funcionamento.
3. **Seção de Como Funciona:** Disposição interativa e limpa de três passos de submissão do serviço.
4. **Galeria de Portfólio Gráfico:** Um impressionante "Scroll Gallery" configurado em layout de colunas para destacar os belíssimos trabalhos executados.
5. **Planos e Preços:** Pacotes detalhados com destaques para impulsionar a taxa de compras dos visitantes, integrados automaticamente ao envio de intenções de compra diretamente no telemóvel dos interessados, no WhatsApp.
6. **Contatos de Rodapé:** Ligações imediatas a páginas Instagram ou cliente de E-mail para dar o máximo de escolha livre aos contatos dos Utilizadores.

## 💻 Como Rodar o Projeto na Sua Máquina

**Pré-requisitos:** Você deve possuir o [Node.js](https://nodejs.org/) previamente instalado.

**1. Abra o Terminal e navegue até à pasta do projeto:**

```bash
cd "c:\Users\seu_nome\OneDrive\Documentos\Meus apps\Projetos\photo-restoration"
```

*(Ou navegue pelo seu IDE visualmente)*

**2. Instale as dependências essenciais do pacote Node:**

```bash
npm install
```

**3. Corra o servidor de visualização local do Vite:**

```bash
npm run dev
```

Abra em seguida o seu navegador e introduza a hiperligação `http://localhost:5173/` fornecida pela consola para ver o projeto a saltar à vida e começar a fazer alterações.

## 🗂 Estrutura Importante de Pastas

*   `src/components/` - Inclui botões, layouts centrais genéricos de secção reutilizáveis globalmente, e sistemas soltos como o comparador Antes/Depois de fotos.
*   `src/sections/` - Partes completas individuais da Landing Page (Hero, Galeria, Footers...).
*   `src/assets/` - Imagens fundamentais do site em local e ícones em SVG fixos.
*   `tailwind.config.js` - Ficheiro base central de configurações de sistema de temas visuais (é lá que cores "gold" exclusivas e fontes personalizadas foram definidos para injeção nativa em classes globais Tailwind).

---
*Construído com ❤️ e focado em reavivar histórias e conexões familiares intemporais usando o topo da magia Frontend moderna.*
