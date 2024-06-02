using HospiTEC.Server.Models;
using HospiTEC.Server.Utility;

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
                    numero = patient_Dto.numeroTel,
                    provincia = patient_Dto.provincia,
                    canton = patient_Dto.canton,
                    distrito = patient_Dto.distrito,
                    fecha_nacimiento = fecha_nacimiento,
                    correo = patient_Dto.email,
                    p_password = pw
                };

                _context.paciente.Add(patient);
                await _context.SaveChangesAsync();
                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }
    }
}

