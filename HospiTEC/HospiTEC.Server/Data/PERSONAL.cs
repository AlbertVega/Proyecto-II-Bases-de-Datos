﻿namespace HospiTEC.Server.Data
{
    public class PERSONAL
    {
        public string nombre { get; set; }
        public string apellido1 { get; set; }
        public string apellido2 { get; set; }
        public DateOnly fecha_nacimiento { get; set; }
        public string email { get; set; }
        public byte[] p_password { get; set; }
        public int cedula { get; set; }
        public int telefono { get; set; }
        public string provincia { get; set; }
        public string canton { get; set; }
        public string distrito { get; set; }
        public DateOnly fecha_ingreso { get; set; }
    }
}