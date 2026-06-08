# Clean Code: Naming and Formatting Rules

Este guia detalha os padrões de nomenclatura e formatação baseados nos princípios descritos por Robert C. Martin (Uncle Bob).

---

## 1. Nomenclatura Significativa (Meaningful Names)

### Revelar Intenções
Os nomes de variáveis, funções e classes devem explicar o porquê de existirem, o que fazem e como são usados. Se um nome requer um comentário explicativo, ele falhou.
* **Inseguro/Ruim**: `int d; // tempo decorrido em dias`
* **Limpo/Bom**: `int elapsedTimeInDays;`

### Evitar Desinformação
Evite usar sufixos que sugiram tipos de coleções se elas não forem de fato desse tipo.
* **Inseguro/Ruim**: `var usuarioList = new Dictionary<int, Usuario>();`
* **Limpo/Bom**: `var usuariosPorId = new Dictionary<int, Usuario>();` ou `var usuariosAtivos = new List<Usuario>();`

### Fazer Distinções Claras
Evite nomes parecidos que dificultam a leitura rápida do código.
* **Inseguro/Ruim**: `UsuarioData` vs `UsuarioInfo` vs `Usuario`. O que difere entre eles?
* **Limpo/Bom**: `Usuario` (entidade), `UsuarioDto` (transferência de dados), `UsuarioConfiguration` (mapeamento do banco).

---

## 2. Formatação Limpa (Formatting)

### A Metáfora do Jornal (Newspaper Metaphor)
O código fonte de um arquivo deve ser legível como um artigo de jornal:
* **Topo**: Conceitos de alto nível, assinaturas principais e ponto de entrada do algoritmo.
* **Meio/Fim**: Detalhes de baixo nível, métodos privados e rotinas auxiliares.

### Densidade Vertical e Proximidade
* **Declaração de Variáveis**: Devem ser declaradas o mais próximo possível de onde serão utilizadas (especialmente variáveis locais dentro de funções curtas).
* **Funções Relacionadas**: Funções que se chamam devem ser mantidas verticalmente próximas umas das outras. A função chamadora deve ficar acima da chamada (Stepdown Rule).
