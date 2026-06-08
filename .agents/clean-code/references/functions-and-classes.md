# Clean Code: Functions and Classes

Princípios e heurísticas para escrever funções curtas e classes modulares de responsabilidade única.

---

## 1. Funções Limpas (Functions)

### Pequenas e Focadas
Funções devem ser o menor possível. Idealmente, raramente devem passar de 20 linhas de código. Cada nível de indentação dentro de uma função (como `if`, `while`, `for`) não deve ser maior do que 1 ou 2.

### Fazer Apenas Uma Coisa (Do One Thing)
Uma função deve fazer apenas uma única coisa, fazê-la bem, e fazê-la por completo. 
* Se uma função realiza passos em diferentes níveis de abstração (ex: valida entrada, executa query SQL e depois envia e-mail), ela está fazendo coisas demais e deve ser dividida.

### Um Nível de Abstração por Função
Não misture código de alto nível de negócio com detalhes de baixo nível (como manipulação de strings com regex ou operações matemáticas complexas) no mesmo escopo.

### Quantidade de Argumentos (Arguments)
* **Zero Argumentos (Niladic)**: Ideal.
* **Um Argumento (Monadic)**: Muito comum (ex: consultar um ID, verificar validade).
* **Dois Argumentos (Dyadic)**: Aceitável.
* **Três Argumentos (Triadic)**: Deve ser evitado se possível, ou agrupado em um objeto de transferência de dados (DTO/Parameter Object).

---

## 2. Classes Limpas (Classes)

### Coesão e Tamanho
Assim como as funções, as classes devem ser pequenas. No entanto, enquanto medimos funções por linhas de código, medimos classes por **responsabilidades**.

### Princípio da Responsabilidade Única (SRP)
Uma classe deve ter um, e apenas um, motivo para mudar.
* **Bad**: Uma classe `Usuario` que contém dados cadastrais, regras de cálculo de notas do SM-2 e métodos para ler e gravar diretamente arquivos de texto ou do banco.
* **Clean**: Divida em `Usuario` (entidade de dados), `Sm2Engine` (lógica de spaced-repetition) e `AppDbContext` (persistência).
