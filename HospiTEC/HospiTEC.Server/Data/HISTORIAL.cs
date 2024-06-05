using System.Reflection.Metadata;

namespace HospiTEC.Server.Data
{
    public class HISTORIAL
    {
        public string nombre_procedimiento { get; set; }
        public PROCEDIMIENTO proc { get; set; } = null!;
        public int id_historial { get; set; }
        public string tratamiento { get; set; }
        public DateOnly fecha_procedimiento { get; set; }
        public string personal_email { get; set; }
        public string paciente_email { get; set; }
    }
}
