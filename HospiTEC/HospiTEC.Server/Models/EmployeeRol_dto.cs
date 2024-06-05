namespace HospiTEC.Server.Models
{
    public class EmployeeRol_dto
    {
        public string email { get; set; }
        public string nombre { get; set; }
        public string apellido1 { get; set; }
        public string apellido2 { get; set; }
        public int cedula { get; set; }
        public int telefono { get; set; }
        public string provincia { get; set; }
        public string canton { get; set; }
        public string distrito { get; set; }
        public DateOnly fechaNacimiento { get; set; }
        public DateOnly fechaIngreso { get; set; }
        public string rol { get; set; }
    }
}
