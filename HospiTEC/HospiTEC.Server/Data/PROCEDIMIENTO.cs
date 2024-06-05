using System.Reflection.Metadata;

namespace HospiTEC.Server.Data
{
    public class PROCEDIMIENTO
    {
        public string nombre { get; set; }
        public int dias_recuperacion { get; set; }
        public int id_reserva_fk { get; set; }
    }
}
