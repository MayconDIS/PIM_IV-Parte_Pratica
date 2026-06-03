using System;
using NexTI_API.Models;

namespace NexTI_API.Services
{
    public class Sm2Engine : ISm2Engine
    {
        public void Calcular(ProgressoFlashcard progresso, int qualidade)
        {
            if (qualidade >= 3)
            {
                if (progresso.Repeticoes == 0) progresso.IntervaloDias = 1;
                else if (progresso.Repeticoes == 1) progresso.IntervaloDias = 6;
                else progresso.IntervaloDias = progresso.IntervaloDias * progresso.FatorFacilidade;
                
                progresso.Repeticoes++;
                progresso.FatorFacilidade = progresso.FatorFacilidade + (0.1 - (5 - qualidade) * 0.1);
            }
            else
            {
                progresso.Repeticoes = 0;
                progresso.IntervaloDias = 1;
                progresso.FatorFacilidade = Math.Max(1.3, progresso.FatorFacilidade - 0.2);
            }

            progresso.DataProximaRevisao = DateTime.UtcNow.Date.AddDays((int)progresso.IntervaloDias);
        }
    }
}
