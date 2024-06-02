using HospiTEC.Server.Data;
using HospiTEC.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HospiTEC.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PatientController : ControllerBase
    {
        private readonly HospiTEC_DB_Context _context;
        private PatientDataClass _patientDataClass;
        public PatientController(HospiTEC_DB_Context context)
        {
            _context = context;
            _patientDataClass = new PatientDataClass(_context);
        }

        [HttpGet]
        public async Task<IActionResult> getPatient()
        {
            var response = new ResponseApi<List<PACIENTE>>();

            try
            {
                response.status = true;
                response.value = _context.paciente
                .Select(d => new PACIENTE
                {
                    nombre = d.nombre,
                    apellido1 = d.apellido1,
                    apellido2 = d.apellido2,
                    fecha_nacimiento = d.fecha_nacimiento,
                    correo = d.correo,
                    p_password = d.p_password,
                    cedula = d.cedula,
                    numero = d.numero,
                    provincia = d.provincia,
                    canton = d.canton,
                    distrito = d.distrito
                }).ToList();
            }
            catch (Exception e)
            {
                response.status = false;
                response.message = e.Message;
            }

            return Ok(response);
        }

        [HttpPost]
        public async Task<IActionResult> setPatient([FromBody] Patient_dto patient_obj)
        {
            var response = new ResponseApi<Patient_dto>();

            try
            {
                response.status = true;
                response.value = patient_obj;
                await _patientDataClass.StorePatient(patient_obj);
            }
            catch (Exception e)
            {
                response.status = false;
                response.message = e.Message;
            }

            return Ok(response);
        }
    }
}
