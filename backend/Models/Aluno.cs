using System;

namespace NexTI_API.Models
{
    public class Aluno : Usuario
    {
        public void EstudarFlashCard()
        {
            Console.WriteLine("Sessão de flashcards iniciada pelo Aluno.");
        }
    }
}
