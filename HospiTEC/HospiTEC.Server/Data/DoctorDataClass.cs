using HospiTEC.Server.Models;
using Microsoft.EntityFrameworkCore;

namespace HospiTEC.Server.Data
{
    public class DoctorDataClass
    {
        private readonly HospiTEC_DB_Context _context;

        public DoctorDataClass(HospiTEC_DB_Context context)
        {
            _context = context;
        }

        public async Task<bool> ValidateDoctorLogin(DoctorLogin personal)
        {
            try
            {
                byte[] PW = PWEncryption.SHA256Encoding(personal.password);
                PERSONAL login = await _context.personal.Where(p => p.correo == personal.email && p.p_password == PW)
                    .FirstOrDefaultAsync();

                await _context.SaveChangesAsync();
                Console.WriteLine(login);

                if (login == null)
                {
                    return false;
                }
                return true;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return false;
            }
        }
    }
}
