using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TechRep.Models;

namespace TechRep.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MasterDataController : ControllerBase
    {
        [HttpGet("GetDepartments")]
        public IEnumerable<Department> GetGetDepartments()
        {
            List<Department> list = new List<Department>();
            list.Add(new Department
            {
                Id = 1,
                Name = "ОЦ",
                Description = "Обжиговый цех"
            });
            list.Add(new Department
            {
                Id = 2,
                Name = "СКЦ",
                Description = "Сернокислотный цех"
            });
            list.Add(new Department
            {
                Id = 3,
                Name = "ВыщЦ",
                Description = "Выщелачивательный цех"
            });
            list.Add(new Department
            {
                Id = 4,
                Name = "ГМЦ",
                Description = "Гидрометаллургический цех"
            });

            return list.ToArray();
        }
    }
}
