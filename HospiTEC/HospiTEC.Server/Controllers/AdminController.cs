using HospiTEC.Server.Data;
using HospiTEC.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HospiTEC.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private readonly HospiTEC_DB_Context _context;
        private PersonalDataClass _personalDataClass;

        public AdminController(HospiTEC_DB_Context context)
        {
            _context = context;
            _personalDataClass = new PersonalDataClass(context);
        }

        [HttpPost("register")]
        public async Task<IActionResult> setPersonal([FromBody] Employee_dto employee_obj)
        {
            var response = new ResponseApi<Employee_dto>();

            try
            {
                response.value = employee_obj;
                response.status = await _personalDataClass.StoreEmployee(employee_obj);
                response.message = response.status ? "Register successful" : "Register failed";

            }
            catch (Exception e)
            {
                response.status = false;
                response.message = e.Message;
            }

            return Ok(response);
        }

        [HttpPost("login")]
        public async Task<IActionResult> LogAdmin([FromBody] Login Admin)
        {
            var response = new ResponseApi<Login>();

            try
            {
                response.value = Admin;
                response.status = await _personalDataClass.ValidateAdminLogin(Admin);
                response.message = response.status ? "login successful" : "login failed";

            }
            catch (Exception e)
            {
                response.status = false;
                response.message = e.Message;
            }

            return Ok(response);
        }

        [HttpGet("personal")]
        public async Task<IActionResult> getPersonal()
        {
            var response = new ResponseApi<List<EmployeeRol_dto>>();

            try
            {
                response.status = true;
                response.value = await _personalDataClass.getPersonal();
            }
            catch (Exception e)
            {
                response.status = false;
                response.message = e.Message;
            }

            return Ok(response);
        }

        [HttpPost("delete")]
        public async Task<IActionResult> deletePersonal([FromBody]DeleteEmployee_dto employee)
        {
            var response = new ResponseApi<string>();

            try
            {
                response.status = await _personalDataClass.deletePersonal(employee);
                response.message = response.status ? "Delete successful" : "Delete failed";
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
