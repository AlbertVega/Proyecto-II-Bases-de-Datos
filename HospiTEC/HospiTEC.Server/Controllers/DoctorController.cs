using HospiTEC.Server.Data;
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

        public DoctorController(HospiTEC_DB_Context context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> getDoctores()
        {
            var response = new ResponseApi<List<DOCTOR>>();

            try
            {
                response.status = true;
                response.value = _context.doctor
                .Select(d => new DOCTOR
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
    }
}
