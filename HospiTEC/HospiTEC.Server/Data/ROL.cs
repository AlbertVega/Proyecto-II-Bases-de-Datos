namespace HospiTEC.Server.Data
{
    public class ROL
    {
        public int id_rol { get; set; }
        public string nombre { get; set; }
        public string email_personal { get; set; }
        public PERSONAL personal { get; set; } = null!;
    }
}
