# Clean Code: Error Handling and Unit Testing

Boas práticas para o tratamento robusto de erros e a integridade de testes automatizados baseados em TDD.

---

## 1. Tratamento de Erros (Error Handling)

### Exceções em vez de Códigos de Retorno
Retornar códigos de erro ou booleanos de sucesso força o chamador a lidar com validações em cascata logo após a chamada de cada método, poluindo o fluxo lógico. Prefira disparar exceções específicas.
* **Bad**: `if (card.UpdateInfo() == -1) { ... }`
* **Clean**: `try { card.UpdateInfo(); } catch (CardDomainException ex) { ... }`

### Não Retorne nem Passe Null
* **Retorno de Null**: Retornar `null` obriga o consumidor do método a inserir verificações defensivas `if (obj != null)` repetidamente. Prefira retornar uma coleção vazia, um objeto padrão (Special Case Pattern) ou disparar uma exceção de não encontrado.
* **Passagem de Null**: Passar `null` para métodos gera vulnerabilidades de runtime (`NullReferenceException`). Evite assinar parâmetros opcionais que dependam de `null` se não houver forte justificativa.

---

## 2. Testes Unitários Limpos (Unit Testing)

### As Três Leis do TDD
1. Não escreva código de produção até escrever um teste unitário que falhe.
2. Não escreva mais sobre um teste do que o suficiente para falhar.
3. Não escreva mais código de produção do que o suficiente para passar no teste.

### Os Princípios F.I.R.S.T.
* **F (Fast)**: Os testes devem rodar rapidamente para que o desenvolvedor sinta-se incentivado a executá-los com frequência.
* **I (Independent)**: Um teste não deve depender do estado ou resultado de outro teste. Eles devem poder rodar de forma isolada ou em paralelo.
* **R (Repeatable)**: Os testes devem ser executáveis em qualquer ambiente (desenvolvimento, CI/CD, produção offline) sem falharem de forma intermitente.
* **S (Self-Validating)**: O resultado do teste deve ser estritamente booleano (Passa ou Falha), sem requerer a análise manual de logs pelo programador.
* **T (Timely)**: Testes unitários devem ser escritos no momento adequado — isto é, antes do código de produção correspondente (TDD).
