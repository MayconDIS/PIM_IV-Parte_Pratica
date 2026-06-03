using NexTI_API.Models;

namespace NexTI_API.Services
{
    public interface ISm2Engine
    {
        void Calcular(ProgressoFlashcard progresso, int qualidade);
    }
}
