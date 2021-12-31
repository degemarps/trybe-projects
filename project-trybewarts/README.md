### Termos de acordo

Ao iniciar este projeto, você concorda com as diretrizes do Código de Ética e Conduta e do Manual da Pessoa Estudante da Trybe.

---

# Boas vindas ao repositório do projeto Trybewarts Wizarding School! :mage:

Você já usa o GitHub diariamente para desenvolver os exercícios, certo? Agora, para desenvolver os projetos, você deverá seguir as instruções a seguir. Fique atento a cada passo, e se tiver qualquer dúvida, nos envie por _Slack_! #vqv 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir desse repositório, utilizando uma branch específica e um _Pull Request_ para colocar seus códigos.

---

# Habilidades

Neste projeto, verificamos se você é capaz de:

* Criar formulários em HTML;
* Utilizar CSS Flexbox para criar layouts flexíveis;
* Criar regras CSS específicas para serem aplicadas a dispositivos móveis;
* Construir páginas que alteram o seu layout de acordo com a orientação da tela;

---

## O que deverá ser desenvolvido

Neste projeto, você irá desenvolver uma página de formulário da Escola de Magia de Trybewarts, em que as pessoas estudantes poderão enviar seus feedbacks sobre ela. O tema desse projeto é baseado na obra 'Harry Potter', de J. K. Rowling, já que programar é o mais próximo que podemos chegar de algo **verdadeiramente mágico**! Mas não se preocupe se não tiver conhecimento sobre o universo da obra original, pois criamos nossa própria versão da Escola de Bruxaria e você terá todas as informações necessárias para a construção do projeto nesse **README**!

# Requisitos do projeto

**Dica:** Caso você faça o download de bibliotecas externas, utilize o diretório libs (a partir da raiz do projeto) para colocar os arquivos (*.css, *.js, etc...) baixados.

## Lista de requisitos obrigatórios:

### 1. Crie uma barra verde na parte superior da página

#### Observações técnicas:

* Esta barra deve possuir a classe `header`
* A classe `header` deve determinar que o elemento é um **flex container**
* A classe `header` deve possuir a propriedade `background-color: rgb(50, 167, 145)`

#### O que será verificado:

* Existe um elemento com a classe `header`
* O elemento possui a propriedade CSS `display: flex`
* O elemento possui a propriedade CSS `background-color: rgb(50, 167, 145)`

### 2. Adicione o logotipo da Trybewarts com a classe `trybewarts-header-logo` na barra superior

#### Observações técnicas:

* Deve existir um elemento img com a classe `trybewarts-header-logo`
* O atributo `src` do logotipo deve apontar para `images/trybewarts-header-logo.svg`

#### O que será verificado:

* Existe um elemento `img` com a classe `trybewarts-header-logo`
* O elemento possui o atributo `src` apontando para `images/trybewarts-header-logo.svg`

### 3. Acrescente um formulário de login no canto direito da barra superior contendo os inputs de email, senha e um botão de login

#### Observações técnicas:

* O formulário deve ter a classe `trybewarts-login`
* O input de **email** deverá ter o atributo `name` igual a **email** e o `placeholder` igual a **Email**
* O input de **senha** deverá ter o atributo `name` igual a **password** e o `placeholder` igual a **Senha**
* O botão deverá ter o texto **"Entrar"**
* O formulário deve ser um **flex container**
* O formulário deve estar a direita da logo
  * **Dica:** adicione a propriedade flex que faz os elementos terem o espaçamento máximo **entre eles** no **header**
* Ao preencher o formulário e clicar no botão, será validado que:
  * Caso o email seja **"tryber@teste.com"** e a senha seja **"123456"** será emitido um alerta contendo o texto **"Olá, Tryber!"** 
  * Em todos os outro casos deverá ser emitido um alerta contendo o texto **"Email ou senha inválidos."**

#### O que será verificado:

* Existe um elemento `form` com a classe `trybewarts-login`
* Existe um input com o atributo `name` igual a **email** e o `placeholder` igual a **Email**
* Existe um input com o atributo `name` igual a **password** e o `placeholder` igual a **Senha**
* Existe um botão com o texto **"Entrar"**
* O formulário possui a propriedade CSS `display: flex`
* O elemento `form` está à direita da logo
* Ao clicar no botão de login dispara um alert com o texto **"Email ou senha inválidos"**, no caso de erro de preenchimento dos dados
* Ao clicar no botão de login dispara um alert com o texto **"Olá, Tryber!"**, no caso de preenchimento correto dos dados.

### 4. Crie um título com o texto `Trybewarts` centralizado dentro do `Header`

#### Observações técnicas:

* Deve existir um elemento `<h1>` com o **id** `trybewarts-header-title` e com o texto **"Trybewarts"**
* O título deverá estar centralizado na barra verde
  * O header deve ter exatamente três elementos filhos
  * O filho do meio deve ser o título

#### O que será verificado:

* Existe um elemento `h1` com o id `trybewarts-header-title` e com o texto `Trybewarts`
* O elemento com a classe `header` deve possuir exatos `3` elementos filhos
* O filho do meio do elemento com a classe `header` deve ser o título h1 `Trybewarts`

### 5. Adicione um formulário no corpo da página

#### Observações técnicas:

* Deve existir um formulário com o id `evaluation-form`
* O formulário deve estar inserido dentro de uma tag `main`
* Tanto o formulário quanto o `main` devem ser flex containers
* O formulário deve ter uma largura de 675px

#### O que será verificado:

* Existe um elemento `form` com o id `evaluation-form`
* O elemento `form` está dentro da tag `main`
* O elemento `main` e o `form` possuem a propriedade CSS `display: flex`
* O elemento `form` possui a propriedade CSS `width: 675px`

### 6. Faça com que o eixo principal do formulário seja vertical

#### Observações técnicas:

* Mude o eixo principal do formulário com id `evaluation-form` para vertical

#### O que será verificado:

* O elemento `evaluation-form` possui a propriedade CSS `flex-direction: column`

### 7. Adicione a logo da Trybewarts no lado direito da página

#### Observações técnicas:

* Crie um elemento `img` com o id `trybewarts-forms-logo`
* O atributo `src` deve apontar para `images/trybewarts-colored.svg`
* A imagem deve possuir o estilo css `height` de `500px`

#### O que será verificado:

* Existe um elemento `img` com o id `trybewarts-forms-logo`
* O elemento possui o atributo `src` apontando para `images/trybewarts-colored.svg`
* A imagem possui o estilo css `height` igual a `500px`

### 8. Acrescente ao formulário com id `evaluation-form` os inputs de `nome, sobrenome e email`

#### Observações técnicas:

* Deverá haver um input com o id **input-name** e placeholder **Nome**
* Deverá haver um input com o id **input-lastname** e placeholder **Sobrenome**
* Deverá haver um input com o id **input-email** e placeholder **Email**

#### O que será verificado:

* Existe um input com o id **input-name** e placeholder **Nome**
* Existe um input com o id **input-lastname** e placeholder **Sobrenome**
* Existe um input com o id **input-email** e placeholder **Email**

### 9. Acrescente ao formulário um select com o id `house` contendo as opções `Gitnória`, `Reactpuff`, `Corvinode` e `Pytherina`

#### Observações técnicas:

* Deverá conter a opção com `text` e `value` igual a `Gitnória` e com o `id` igual a `gitnoria-house`
* Deverá conter a opção com `text` e `value` igual a `Reactpuff` e com o `id` igual a `reactpuff-house`
* Deverá conter a opção com `text` e `value` igual a `Corvinode` e com o `id` igual a `corvinode-house`
* Deverá conter a opção com `text` e `value` igual a `Pytherina` e com o `id` igual a `pytherina-house`

#### O que será verificado:

* Existe um elemento `select` com o id `house`
* Existe um elemento `option` com `text` e `value` igual a `Gitnória` e com o `id` igual a `gitnoria-house`
* Existe um elemento `option` com `text` e `value` igual a `Reactpuff` e com o `id` igual a `reactpuff-house`
* Existe um elemento `option` com `text` e `value` igual a `Corvinode` e com o `id` igual a `corvinode-house`
* Existe um elemento `option` com `text` e `value` igual a `Pytherina` e com o `id` igual a `pytherina-house`

### 10. Posicione os campos de `Nome` e `Sobrenome` para que fiquem em linha

#### Observações técnicas:

* Os campos de `Nome` e `Sobrenome` devem estar lado a lado

#### O que será verificado:

* O campo de `Sobrenome` está à direita do campo de `Nome`

### 11. Posicione os campos de `Email` e `Casa` para que fiquem em linha

#### Observações técnicas:

* Os campos de `Email` e `Casa` devem estar lado a lado

#### O que será verificado:

* O campo de `Casa` está à direita do campo de `Email`

### 12. Acrescente ao formulário um campo de entrada para qual família a pessoa estudante se identifica

#### Observações técnicas:

* Crie um elemento com o id `label-family` e o texto **"Qual sua família?"** deverá ser criado
* Crie um `input` do tipo `radio` com o atributo `name` igual a **family** e `value` igual a **Frontend**
* Crie um `input` do tipo `radio` com o atributo `name` igual a **family** e `value` igual a **Backend**
* Crie um `input` do tipo `radio` com o atributo `name` igual a **family** e `value` igual a **FullStack**
* Posicione os radio buttons para ficar abaixo um do outro, na sequência **Frontend**, **Backend** e **Fullstack**
* Posicione os radio buttons abaixo do label

#### O que será verificado:

* Existe um elemento `label` com o `id` **label-family** que possui o conteúdo de texto `Qual sua família?`
* Existe um `input` do tipo `radio` com o atributo `name` igual a **family** e `value` igual a **Frontend**
* Existe um `input` do tipo `radio` com o atributo `name` igual a **family** e `value` igual a **Backend**
* Existe um `input` do tipo `radio` com o atributo `name` igual a **family** e `value` igual a **FullStack**
* Os inputs do tipo `radio` estão um abaixo do outro na sequência **Frontend**, **Backend** e **Fullstack**
* Os inputs do tipo `radio` estão abaixo do texto da label

### 13. Crie campos de entrada do tipo `checkbox` contendo seis opções

#### Observações técnicas:

* Crie um elemento com o `id` **label-content** e o texto **"Qual conteúdo você está com mais vontade de aprender?"**
* Crie um input do tipo `checkbox` com o value igual a **HoFs**
* Crie um input do tipo `checkbox` com o value igual a **Jest**
* Crie um input do tipo `checkbox` com o value igual a **Promises**
* Crie um input do tipo `checkbox` com o value igual a **React**
* Crie um input do tipo `checkbox` com o value igual a **SQL**
* Crie um input do tipo `checkbox` com o value igual a **Python**
* Posicione as checkboxes abaixo do label

#### O que será verificado:

* Existe um elemento `label` com o `id` **label-content** que possui um conteúdo de texto `Qual conteúdo você está com mais vontade de aprender?`
* Existe um `input` do tipo `checkbox` com o atributo value igual a **HoFs**
* Existe um `input` do tipo `checkbox` com o atributo value igual a **Jest**
* Existe um `input` do tipo `checkbox` com o atributo value igual a **Promises**
* Existe um `input` do tipo `checkbox` com o atributo value igual a **React**
* Existe um `input` do tipo `checkbox` com o atributo value igual a **SQL**
* Existe um `input` do tipo `checkbox` com o atributo value igual a **Python**
* Os elementos `checkbox` então posicionados abaixo da label

### 14. Crie campo de entrada para avaliar de 1 a 10 o nível de satisfação com a Trybewarts

#### Observações técnicas:

* Um elemento com o `id` **label-rate** e o texto **"Como você avalia a Trybewarts?"** deverá ser criado
* O campo deve ser formado por dez radio buttons, contendo as opções de 1 a 10
* Os radio buttons devem ter o atributo `value` com o valor de suas opções de 1 a 10.
* Os radio buttons devem ter o atributo `name` com o valor **"rate"**
* Posicione os radio buttons para ficar lado a lado
* Posicione os radio buttons à direita da label

#### O que será verificado:

* Existe um elemento `label` com o `id` **label-rate** que possui um conteúdo de texto `Como você avalia a Trybewarts?`
* Existem 10 `radio-buttons` com o atributo `name="rate"`
* Existem 10 `radio-buttons` contendo o atributo `value` de 1 a 10  
* Os `radio-buttons` estão à direita do texto da label

### 15. Crie uma textarea com o id `textarea` e uma label com a classe `textarea` contendo o número máximo de caracteres igual à 500

#### Observações técnicas:

* Uma label com a classe `textarea` e o texto **"Deixe seu comentário:"** deverá ser criado
* O campo `textarea` deverá ter o máximo de 500 caracteres

#### O que será verificado:

* Existe uma `label` com a classe `textarea` e o texto `Deixe seu comentário:`
* O elemento `textarea` possui um limite de 500 caracteres

### 16. Crie um campo de entrada do tipo `checkbox` com o id `agreement` para validar as informações

#### Observações técnicas:

* Um rótulo (label) com o id `label-infos` e o texto **"Você concorda com o uso das informações acima?"** deverá ser criado
* O campo deve ser formado por um checkbox
* O campo de 'checkbox' deve possuir o ID `agreement`
* Posicione a checkbox ao lado da label

#### O que será verificado:

* Existe uma label com o id `label-infos` que possui o texto `Você concorda com o uso das informações acima?`
* Existe um input do tipo `checkbox` com o id `agreement`

### 17. Crie um botão de Enviar para submeter o formulário

#### Observações técnicas:

* Um botão do tipo `submit` deverá ser criado
* O botão deve possuir o ID `submit-btn`
* Deverá conter o texto **"Enviar"**

#### O que será verificado:

* Existe um botão do tipo `submit` com o id `submit-btn` e o texto `Enviar`

### 18. Faça com que o botão `Enviar` seja habilitado somente após a checkbox do requisito 16 ser selecionada

#### Observações técnicas:

* O botão deverá estar desabilitado caso a checkbox não esteja selecionada
* O botão deverá ser habilitado caso a checkbox seja selecionada

#### O que será verificado:

* O botão está inicialmente desabilitado
* O botão torna-se habilitado, ao marcar o campo com id `agreement`

### 19. Crie um rodapé no final da página

#### Observações técnicas:

* O rodapé deverá conter o texto **"Direitos reservados à Trybewarts©"**

#### O que será verificado:

* Existe um elemento `footer` deve possuir o texto `Direitos reservados à Trybewarts©`

## Lista de requisitos bônus:

### 20. Crie um contador com o ID `counter` contendo o número de caracteres disponíveis no textarea, variando de 500 até 0, que deverá ser atualizado a medida que algo for digitado na textarea

#### Observações técnicas:

* O contador deverá possuir o ID `counter`
* O contador inicialmente deve possuir o valor `500`
* O contador deverá decrementar a medida que algo for escrito no campo `textarea`
* O contador deverá incrementar a medida que algo for deletado no campo `textarea`
* O elemento `textarea` deverá possuir `id="textarea"`

#### O que será verificado:

* Existe um elemento com o id `counter`
* Existe um elemento com o id `textarea`
* O preenchimento do campo de `textarea` altera o número apresentado no elemento `#counter`

### 21. Faça com que ao clicar no botão `Enviar`, o conteúdo do formulário seja substituído pelas informações preenchidas

#### Observações técnicas:

* Todos os campos do formulário devem ser substituídos.
* Deve haver um campo com o formato "Nome: Alguem Aqui"
* Deve haver um campo com o formato "Email: email@mail.com"
* Deve haver um campo com o formato "Casa: Casa Escolhida"
* Deve haver um campo com o formato "Família: Família Escolhida"
* Deve haver um campo com o formato "Matérias: Matérias, Marcadas, Aqui"
* Deve haver um campo com o formato "Avaliação: NotaAqui"
* Deve haver um campo com o formato "Observações: Observações aqui"

#### O que será verificado:

* Os `inputs` tipo `checkbox` referentes à lista de conteúdo possuem `class="subject"`
* Ao clicar no botão de enviar, existe um texto no formato `Nome: -Nome- -Sobrenome-`
* Ao clicar no botão de enviar, existe um texto no formato `Email: -Email-`
* Ao clicar no botão de enviar, existe um texto no formato `Casa: -Casa-`
* Ao clicar no botão de enviar, existe um texto no formato `Família: -Família-`
* Ao clicar no botão de enviar, existe um texto no formato `Matérias: -Matérias Selecionadas-`
* Ao clicar no botão de enviar, existe um texto no formato `Avaliação: -Avaliação-`
* Ao clicar no botão de enviar, existe um texto no formato `Observações: -Observações-`

---

## Lista de requisitos não avaliativos:

Esses requisitos **não** são verificáveis pelo avaliador automático.

### 22. Preencha o arquivo feedback.md . Aproveite o espaço para deixar seus feedbacks sobre o projeto.

#### Observações técnicas:

* Utilize o arquivo feedback.md para deixar comentários e sugestões sobre o projeto! Para nós, é muito importante saber se vocês tiveram uma boa experiência e se foi praticar seus conhecimentos com o Trybewarts!

### 23. Realize o desenvolvimento da versão mobile do formulário Trybewarts.

#### Observações técnicas:

* Utilize media queries para inserir breakpoints para telas de diferentes tamanhos.
* Leve em conta a largura da tela e a experiência do usuário ao reorganizar o layout para dispositivos menores.
* Tente inserir um 'menu hambúrguer' na barra superior para lidar com o login usando javascript. Se não conseguir, tente criar uma página separada de login, uma prática muito comum.
* Deixe sua criatividade fluir! Preferimos não avaliar esse requisito justamente pra que você tenha liberdade para executar a responsividade da maneira que você achar mais agradável!
