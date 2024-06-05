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

        public async Task<List<EmployeeRol_dto>> getPersonal()
        {
            try
            {
                var query = from p in _context.personal
                            join r in _context.rol on p.email equals r.email_personal
                            select new EmployeeRol_dto
                            {
                                email = p.email,
                                password = PWEncryption.SHA256Decode(p.p_password),
                                nombre = p.nombre,
                                apellido1 = p.apellido1,
                                apellido2 = p.apellido2,
                                cedula = p.cedula,
                                telefono = p.telefono,
                                provincia = p.provincia,
                                canton = p.canton,
                                distrito = p.distrito,
                                fechaNacimiento = p.fecha_nacimiento.ToDateTime(TimeOnly.MinValue),
                                fechaIngreso = p.fecha_ingreso.ToDateTime(TimeOnly.MinValue),
                                rol = r.nombre
                            };

                return query.ToList();

            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public async Task<bool> deletePersonal(DeleteEmployee_dto employee)
        {
            try
            {
                var personal = await _context.personal.Where(p => p.email == employee.email)
                                                      .FirstOrDefaultAsync();

                var rol = await _context.rol.Where(r => r.email_personal == employee.email && r.nombre == employee.rol)
                                            .FirstOrDefaultAsync();

                if (personal != null && rol != null)
                {
                    _context.rol.Remove(rol);
                    _context.personal.Remove(personal);
                    await _context.SaveChangesAsync();
                    return true;
                }                
                return false;
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public async Task<bool> updatePersonal(EmployeeRol_dto employee)
        {
            try
            {
                byte[] pw = PWEncryption.SHA256Encoding(employee.password);
                var personal = await _context.personal.Where(p => p.email == employee.email)
                                                      .FirstOrDefaultAsync();

                var rol = await _context.rol.Where(r => r.email_personal == employee.email)
                                            .FirstOrDefaultAsync();

                if (personal != null && rol != null)
                {
                    personal.email = employee.email;
                    personal.p_password = pw;
                    personal.nombre = employee.nombre;
                    personal.apellido1 = employee.apellido1;
                    personal.apellido2 = employee.apellido2;
                    personal.cedula = employee.cedula;
                    personal.telefono = employee.telefono;
                    personal.provincia = employee.provincia;
                    personal.canton = employee.canton;
                    personal.distrito = employee.distrito;
                    personal.fecha_nacimiento = DateOnly.FromDateTime(employee.fechaNacimiento);
                    personal.fecha_ingreso = DateOnly.FromDateTime(employee.fechaIngreso);

                    rol.nombre = employee.rol;
                    rol.email_personal = employee.email;

                    await _context.SaveChangesAsync();
                    return true;
                }
                return false;
            }
            catch (Exception e)
            {
                throw e;
            }
        }
    }
}
