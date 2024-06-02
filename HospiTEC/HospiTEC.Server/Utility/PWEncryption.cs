using System.Security.Cryptography;
using System.Text;

namespace HospiTEC.Server.Utility
{
    public static class PWEncryption
    {
        /*
         * SHA256Encoding
         * Entradas: string PW
         * Salidas: byte[]
         * Este Metodo recibe un string y lo convierte en un arreglo de bytes encriptado con SHA256
         */
        public static byte[] SHA256Encoding(string PW)
        {
            using (SHA256 sHA256 = SHA256.Create())
            {
                byte[] result = sHA256.ComputeHash(Encoding.UTF8.GetBytes(PW));

                StringBuilder sb = new StringBuilder();
                for (int i = 0; i < result.Length; i++)
                {
                    sb.Append(result[i].ToString("x2"));
                }

                return result;
            }
        }
    }
}
