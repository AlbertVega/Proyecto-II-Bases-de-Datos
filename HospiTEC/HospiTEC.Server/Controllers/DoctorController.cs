using HospiTEC.Server.Data;
using HospiTEC.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HospiTEC.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DoctorController : ControllerBase
    {
        private readonly HospiTEC_DB_Context _context;
        private DoctorDataClass _doctorDataClass;

        public DoctorController(HospiTEC_DB_Context context)
        {
            _context = context;
            _doctorDataClass = new DoctorDataClass(context);
        }

        [HttpGet]
        public async Task<IActionResult> getDoctores()
        {
            var response = new ResponseApi<List<PERSONAL>>();

            try
            {
                response.status = true;
                response.value = _context.personal
                .Select(d => new PERSONAL
                {
                    nombre = d.nombre,
                    apellido1 = d.apellido1,
                    apellido2 = d.apellido2,
                    cedula = d.cedula,
                    fecha_nacimiento = d.fecha_nacimiento,
                    correo = d.correo,
                    telefono = d.telefono,
                }).ToList();
            }
            catch (Exception e)
            {
                response.status = false;
                response.message = e.Message;
            }

            return Ok(response);
        }

        [HttpPost("login")]
        public async Task<IActionResult> LogPatient([FromBody] DoctorLogin data)
        {
            var response = new ResponseApi<DoctorLogin>();

            try
            {
                response.value = data;
                response.status = await _doctorDataClass.ValidateDoctorLogin(data);
                response.message = response.status ? "Login successful" : "Login failed";
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
