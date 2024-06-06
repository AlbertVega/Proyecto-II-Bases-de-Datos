namespace HospiTEC.Server.Data
{
    public class PACIENTE
    {
        public required string nombre { get; set; }
        public required string apellido1 { get; set; }
        public required string apellido2 { get; set; }
        public DateOnly fecha_nacimiento { get; set; }
        public required string email { get; set; }
        public required byte[] p_password { get; set; }
        public int cedula { get; set; }
        public int telefono { get; set; }
        public required string provincia { get; set; }
        public required string canton { get; set; }
        public required string distrito { get; set; }
        public string patologias { get; set; }
        public string tratamientos { get; set; }
    }
}