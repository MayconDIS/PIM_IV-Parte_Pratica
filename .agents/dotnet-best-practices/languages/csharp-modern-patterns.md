# .NET: C# Modern Patterns (C# 12+)

Padrões modernos de sintaxe aplicados ao C# 12 e .NET Core para reduzir verbosidade e simplificar o código.

---

## 1. File-scoped Namespaces
Use namespaces em nível de arquivo para economizar espaço de indentação e melhorar a clareza horizontal do arquivo.
* **Bad**:
  ```csharp
  namespace NexTI.Backend.Services
  {
      public class Sm2Engine { ... }
  }
  ```
* **Clean**:
  ```csharp
  namespace NexTI.Backend.Services; // Fim da declaração com ponto e vírgula

  public class Sm2Engine { ... }
  ```

---

## 2. Primary Constructors (Construtores Primários)
Use construtores primários em classes e records para declarar parâmetros de construtor diretamente na assinatura da classe. Isso elimina a necessidade de declarar propriedades privadas e fazer atribuições manuais redundantes no construtor.
```csharp
// RECOMENDADO
public class CardsEndpoints(ISm2Engine sm2Engine, AppDbContext dbContext)
{
    // As variáveis 'sm2Engine' e 'dbContext' estão disponíveis em toda a classe
}
```

---

## 3. Pattern Matching (Correspondência de Padrões)
Prefira o uso de pattern matching do C# para tornar validações condicionais muito mais claras e expressivas.
```csharp
// Exemplo com expressões switch
string description = difficulty switch
{
    0 or 1 => "Fácil",
    2 => "Médio",
    _ => "Difícil"
};
```
