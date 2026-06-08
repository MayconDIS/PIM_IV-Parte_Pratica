# .NET: SOLID Principles and Clean Architecture

Diretrizes arquiteturais para estruturação de sistemas C# robustos baseados em acoplamento fraco e alta coesão.

---

## 1. Princípios SOLID no .NET

### S (Single Responsibility Principle - Responsabilidade Única)
Cada classe ou serviço deve ter apenas um motivo para mudar. No contexto de Minimal APIs, evite inflar o arquivo de entrada `Program.cs`. Mapeie seus endpoints em métodos de extensão separados (ex: `EndpointExtensions.cs`) e isole a lógica matemática de negócios em serviços dedicados (como o algoritmo SM-2 em um `ISm2Engine` em `backend/Services/`).

### O (Open/Closed Principle - Aberto/Fechado)
O código deve ser aberto para extensão, mas fechado para modificação. Use abstrações e polimorfismo. Se precisar de novos tipos de recompensa ou novos algoritmos, crie novas classes que implementam a mesma interface em vez de editar ifs/switches complexos na classe existente.

### L (Liskov Substitution Principle - Substituição de Liskov)
Subclasses devem poder substituir suas classes base sem quebrar o comportamento esperado do sistema. Garanta que classes que implementam interfaces não lancem `NotImplementedException` para métodos fundamentais da interface.

### I (Interface Segregation Principle - Segregação de Interfaces)
Interfaces pequenas e focadas são melhores que interfaces monolíticas. Se um serviço precisa apenas calcular a próxima revisão, implemente `ISm2Engine` contendo apenas os cálculos matemáticos específicos, em vez de um serviço genérico de cartões que engloba CRUD e persistência.

### D (Dependency Inversion Principle - Inversão de Dependências)
Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações.
* **Bad**: `private readonly Sm2Engine _engine = new Sm2Engine();`
* **Clean**: Dependa de `ISm2Engine` injetado pelo construtor.
