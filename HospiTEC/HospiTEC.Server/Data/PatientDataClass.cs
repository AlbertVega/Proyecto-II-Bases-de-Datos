using HospiTEC.Server.Models;
using HospiTEC.Server.Utility;
using Microsoft.EntityFrameworkCore;
using System.Collections;

namespace HospiTEC.Server.Data
{
    public class PatientDataClass
    {
        private readonly HospiTEC_DB_Context _context;

        public PatientDataClass(HospiTEC_DB_Context context)
        {
            _context = context;
        }

        public async Task<bool> StorePatient(Patient_dto patient_Dto)
        {

            try
            {
                byte[] pw = PWEncryption.SHA256Encoding(patient_Dto.password);
                DateOnly fecha_nacimiento = DateOnly.FromDateTime(patient_Dto.nacimiento);

                var patient = new PACIENTE
                {
                    nombre = patient_Dto.nombre,
                    apellido1 = patient_Dto.apellido1,
                    apellido2 = patient_Dto.apellido2,
                    cedula = patient_Dto.cedula,
                    telefono = patient_Dto.numeroTel,
                    provincia = patient_Dto.provincia,
                    canton = patient_Dto.canton,
                    distrito = patient_Dto.distrito,
                    fecha_nacimiento = fecha_nacimiento,
                    email = patient_Dto.email,
                    p_password = pw,
                    patologias = patient_Dto.patologias,
                    tratamientos = patient_Dto.tratamientos
                };

                _context.paciente.Add(patient);
                await _context.SaveChangesAsync();
                return true;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return false;
            }
        }

        public async Task<bool> ValidatePatientLogin(Login patient)
        {
            try
            {
                byte[] PW = PWEncryption.SHA256Encoding(patient.password);
                PACIENTE login = await _context.paciente.Where(p => p.email == patient.email && p.p_password == PW)
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

