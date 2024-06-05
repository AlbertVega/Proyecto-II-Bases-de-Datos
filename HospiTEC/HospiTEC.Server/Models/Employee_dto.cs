namespace HospiTEC.Server.Models
{
    public class Employee_dto
    {
        public string nombre { get; set; }
        public string apellido1 { get; set; }
        public string apellido2 { get; set; }
        public int cedula { get; set; }
        public int numeroTel { get; set; }
        public string provincia { get; set; }
        public string canton { get; set; }
        public string distrito { get; set; }
        public DateTime nacimiento { get; set; }
        public string email { get; set; }
        public string password { get; set; }
        public DateTime fechaIngreso { get; set; }
    }
}
