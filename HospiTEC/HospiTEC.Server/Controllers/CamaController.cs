using HospiTEC.Server.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HospiTEC.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CamaController : ControllerBase
    {
        private readonly HospiTEC_DB_Context _context;
        private CamaDataClass _camaDataClass;

        public CamaController(HospiTEC_DB_Context context)
        {
            _context = context;
            _camaDataClass = new CamaDataClass(context);
        }

        [HttpPost("register")]
        public async Task<IActionResult> setBed([FromBody] CAMA bed_obj)
        {
            var response = new ResponseApi<CAMA>();

            try
            {
                response.value = bed_obj;
                response.status = await _camaDataClass.StoreCama(bed_obj);
                response.message = response.status ? "Register successful" : "Register failed";

            }
            catch (Exception e)
            {
                response.status = false;
                response.message = e.Message;
            }

            return Ok(response);
        }

        [HttpPost("update")]
        public async Task<IActionResult> updateBed([FromBody] CAMA bed_obj)
        {
            var response = new ResponseApi<CAMA>();

            try
            {
                response.value = bed_obj;
                response.status = await _camaDataClass.updateCama(bed_obj);
                response.message = response.status ? "Update successful" : "Update failed";

            }
            catch (Exception e)
            {
                response.status = false;
                response.message = e.Message;
            }

            return Ok(response);
        }

        [HttpGet("camas")]
        public async Task<IActionResult> getCamas()
        {
            var response = new ResponseApi<List<CAMA>>();

            try
            {
                response.value = await _camaDataClass.GetCamas();
                response.status = response.value != null;
                response.message = response.status ? "Camas found" : "Camas not found";
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
