using HospiTEC.Server.Models;
using HospiTEC.Server.Utility;
using Microsoft.EntityFrameworkCore;

namespace HospiTEC.Server.Data
{
    public class PersonalDataClass
    {
        private readonly HospiTEC_DB_Context _context;

        public PersonalDataClass(HospiTEC_DB_Context context)
        {
            _context = context;
        }

        public async Task<bool> StoreEmployee(Employee_dto employee_Dto)
        {

            try
            {
                byte[] pw = PWEncryption.SHA256Encoding(employee_Dto.password);
                DateOnly fecha_nacimiento = DateOnly.FromDateTime(employee_Dto.nacimiento);
                DateOnly fecha_ingreso = DateOnly.FromDateTime(employee_Dto.fechaIngreso);

                var personal = new PERSONAL
                {
                    nombre = employee_Dto.nombre,
                    apellido1 = employee_Dto.apellido1,
                    apellido2 = employee_Dto.apellido2,
                    cedula = employee_Dto.cedula,
                    telefono = employee_Dto.numeroTel,
                    provincia = employee_Dto.provincia,
                    canton = employee_Dto.canton,
                    distrito = employee_Dto.distrito,
                    fecha_nacimiento = fecha_nacimiento,
                    email = employee_Dto.email,
                    p_password = pw,
                    fecha_ingreso = fecha_ingreso                
                };

                _context.personal.Add(personal);
                await _context.SaveChangesAsync();
                return true;
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public async Task<bool> ValidateAdminLogin(Login admin)
        {
            try
            {
                byte[] PW = PWEncryption.SHA256Encoding(admin.password);
              
                var consult = await _context.rol.FromSql($"SELECT R.nombre, R.email_personal, R.id_rol FROM (personal AS P JOIN rol AS R ON P.email = R.email_personal) WHERE {admin.email} = P.email")
                                                     .Where(p => p.nombre == "Administrativo")
                                                     .FirstOrDefaultAsync();

                var pw_consult = await _context.personal.Where(p => p.p_password == PW)
                                                        .FirstOrDefaultAsync();      
                await _context.SaveChangesAsync();
                Console.WriteLine(consult);

                if (consult != null && pw_consult != null)
                {
                    return true;
                }
                return false;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return false;
            }
        }
    }
}
