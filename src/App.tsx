import "./App.css"

function App() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#projetos">Projetos</a></li>
            <li><a href="#habilidades">Habilidades</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>
      </header>

      <main>

        <section id="home" className="section-container">
          <div className="profile-content">
            <h1>Olá, eu sou o Raul Gonçalves Mazzone</h1>
            <p>Desenvolvedor focado em soluções criativas</p>
            <div className="social-links"></div>
          </div>
        </section>

        <section id="sobre" className="section-container">
          <h2>Sobre Mim</h2>

          <p>
            Olá! Meu nome é Raul, nasci em 2009 e sou natural de Peruíbe.
            Atualmente, estou no 3º ano da Etec de Peruíbe.
          </p>

          <ul className="lista">
            <li>Conhecimento em HTML e CSS</li>
            <li>Uso de Git</li>
            <li>Busca constante por aprendizado</li>
          </ul>
        </section>

        <section id="projetos" className="section-container">
          <h2>Meus Projetos</h2>

          <div className="projetos">

            <div className="projeto">
              <h2>Site da Turma de Desenvolvimento de Sistemas (2024–2026)</h2>
              <p>
                Site desenvolvido para organizar e disponibilizar atividades, conteúdos e materiais
                produzidos pela turma de Desenvolvimento de Sistemas ao longo do curso. O projeto
                tem como objetivo centralizar informações acadêmicas e facilitar o acesso aos
                trabalhos realizados durante o período letivo.
              </p>
              <a href="https://halls499.github.io/1DS/">Ver Projeto</a>
            </div>

            <div className="projeto">
              <h2>QuizMania</h2>
              <p>
                Aplicação web de quiz interativo com perguntas de diversas categorias,
                como ciência, história, tecnologia, esportes e entretenimento. O projeto
                foi desenvolvido para explorar lógica de programação, manipulação de
                eventos e criação de interfaces dinâmicas utilizando JavaScript.
              </p>
              <a href="https://halls499.github.io/quiz/">Ver Projeto</a>
            </div>

            <div className="projeto">
              <h2>Site para Gráfica</h2>
              <p>
                Site institucional desenvolvido para a empresa Ideal Design Gráfica,
                com o objetivo de apresentar seus serviços, fortalecer sua presença
                digital e facilitar o contato com clientes interessados nos produtos
                oferecidos pela empresa.
              </p>
              <a href="https://halls499.github.io/Site-ideal/">Ver Projeto</a>
            </div>

            <div className="projeto">
              <h2>Aplicativo Mobile de Desenho</h2>
              <p>
                Aplicativo mobile que permite ao usuário criar desenhos digitais,
                selecionar cores, ajustar o tamanho do pincel e salvar as criações
                como imagem. O projeto foi desenvolvido com foco na construção de
                interfaces interativas para dispositivos móveis.
              </p>
              <a href="https://halls499.github.io/Aplictivo-de-desenho/">Ver Projeto</a>
            </div>

            <div className="projeto">
              <h2>Página com Manipulação de DOM (AppendChild)</h2>
              <p>
                Projeto desenvolvido em parceria com outro aluno com foco no estudo
                de manipulação do DOM em JavaScript. A aplicação permite criar listas
                dinâmicas e mover elementos entre elas utilizando métodos como appendChild.
              </p>
              <a href="https://halls499.github.io/AppendChild/">Ver Projeto</a>
            </div>

            <div className="projeto">
              <h2>Aplicativo de Controle de Hidratação</h2>
              <p>
                Aplicativo mobile criado para auxiliar usuários no acompanhamento
                da ingestão diária de água. A aplicação incentiva hábitos saudáveis
                por meio de um controle simples e intuitivo do consumo de líquidos.
              </p>
              <a href="https://halls499.github.io/App-Hidramente/">Ver Projeto</a>
            </div>

            <div className="projeto">
              <h2>Calculadora</h2>
              <p>
                Calculadora responsiva desenvolvida para dispositivos móveis e
                computadores. O projeto foi um dos primeiros trabalhos realizados
                na área de desenvolvimento e teve como objetivo aplicar conceitos
                básicos de lógica de programação e manipulação de interface.
              </p>
              <a href="https://halls499.github.io/Calculadora-PAM/">Ver Projeto</a>
            </div>

            <div className="projeto">
              <h2>Página para Cálculo de Média Escolar</h2>
              <p>
                Aplicação web desenvolvida para calcular automaticamente a média
                de um aluno com base nas notas informadas, indicando sua aprovação
                ou reprovação. O projeto utiliza lógica condicional e interação
                com o usuário para apresentar os resultados.
              </p>
              <a href="https://halls499.github.io/mediaAluno/">Ver Projeto</a>
            </div>

            <div className="projeto">
              <h2>Site para Gerar Cores</h2>
              <p>
                Aplicação web desenvolvida para gerar cores de três formas diferentes, sendo elas:
                Aleatoriamente, onde o usuário clica num botão e o site gera uma cor aleatória; por digitação,
                onde o usuário digita a cor que ele quer, podendo ser "fogo", "verde limão", entre outras opções;
                e através de sliders, onde o usuário desliza um botão para definir a cor que ele quer, além de 
                sempre mostrar o código RGB e HEX das cores nas três opções.
              </p>
              <a href="https://halls499.github.io/mediaAluno/">Ver Projeto</a>
            </div>

          </div>
        </section>

        <section id="habilidades" className="section-container">

          <h2>Habilidades</h2>

          <p className="txt">
            Aqui você verá algumas habilidades minhas, meus estudos, as ferramentas que eu utilizo e muito mais
          </p>

          {/* FACILIDADE */}

          <h3>Linguagens que tenho facilidade</h3>

          <div className="habilidades-container">

            <div className="habilidade">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
              <p>HTML</p>
            </div>

            <div className="habilidade">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
              <p>CSS</p>
            </div>

            <div className="habilidade">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
              <p>JavaScript</p>
            </div>

            <div className="habilidade">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
              <p>MySQL</p>
            </div>

          </div>

          {/* DIFICULDADE */}

          <h3>Linguagens que tenho dificuldade</h3>

          <div className="habilidades-container">

            <div className="habilidade">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
              <p>React</p>
            </div>

            <div className="habilidade">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" />
              <p>C#</p>
            </div>

          </div>

          {/* ESTUDANDO */}

          <h3>Linguagens que estou estudando</h3>

          <div className="habilidades-container">

            <div className="habilidade">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
              <p>React</p>
            </div>

            <div className="habilidade">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" />
              <p>C#</p>
            </div>

          </div>

          {/* PRETENDO ESTUDAR */}

          <h3>Linguagens que pretendo estudar</h3>

          <div className="habilidades-container">

            <div className="habilidade">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
              <p>Python</p>
            </div>

            <div className="habilidade">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
              <p>Java</p>
            </div>

            <div className="habilidade">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" />
              <p>C++</p>
            </div>

            <div className="habilidade">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" />
              <p>PHP</p>
            </div>

          </div>

          {/* FERRAMENTAS */}

          <h3>Ferramentas que utilizo</h3>

          <div className="habilidades-container">

            <div className="habilidade">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />
              <p>VS Code</p>
            </div>

            <div className="habilidade">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
              <p>GitHub</p>
            </div>

            <div className="habilidade">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
              <p>MySQL Workbench</p>
            </div>

          </div>

        </section>

        <section id="contato" className="section-container">

          <h2>Contato</h2>

          <p>Se quiser entrar em contato comigo, utilize um dos meios abaixo:</p>

          <div className="contato-links">

            <a
              href="https://instagram.com/halls.raulzito"
              className="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram fa-2x"></i> Instagram
            </a>

            <a
              href="https://github.com/halls499"
              className="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github fa-2x"></i> GitHub
            </a>

          </div>

        </section>

      </main>

      <footer>
        <p>&copy; 2026 Halls499 - Desenvolvido com foco e café.</p>
      </footer>
    </>
  )
}

export default App