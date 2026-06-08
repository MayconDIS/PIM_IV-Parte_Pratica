# Clean Code: C# Guidelines

Diretrizes específicas de Clean Code para o desenvolvimento de sistemas robustos em C# e .NET.

---

## 1. Padrões de Nomenclatura C#
* **PascalCase**: Classes, Interfaces (prefixadas com `I`, ex: `ISm2Engine`), Métodos, Propriedades e Namespaces.
* **camelCase**: Parâmetros de métodos e variáveis locais.
* **_camelCase** (prefixado com underline): Campos privados da classe (private fields).

---

## 2. Abstrações e SOLID
* **Interfaces**: Utilize interfaces para definir contratos de serviços. Injete a interface no construtor em vez de usar instâncias concretas (`new Service()`).
* **Primary Constructors**: Simplifique a injeção usando construtores primários do C# moderno.

```csharp
// RECOMENDADO: Acoplamento fraco via interface e construtor primário
public class CardsController(ICardService cardService)
{
    // Lógica usando cardService
}
```

---

## 3. Tratamento de Exceções Limpo
Evite blocos de `try-catch` excessivos que simplesmente capturam a exceção e relançam sem tratamento ou informação adicional. Prefira delegar o tratamento de erros para middlewares globais.
* **Bad**:
  ```csharp
  try {
      db.SaveChanges();
  } catch (Exception ex) {
      throw ex; // Destrói o stack trace original!
  }
  ```
* **Clean**:
  ```csharp
  // Apenas capture se for fazer algum tratamento específico
  try {
      db.SaveChanges();
  } catch (DbUpdateException ex) {
      logger.LogError("Erro de banco: {Message}", ex.Message);
      throw new DatabaseOperationException("Falha ao salvar cartão.", ex);
  }
  ```
