using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TechRep.Models;

namespace TechRep.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ParameterController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<Parameter> Get()
        {
            List<Parameter> list = new List<Parameter>();
            list.Add(new Parameter
            {
                Id = 1,
                Name = "Zn товарный",
                Description = "Товарный цинк за месяц",
                Source = "InPrms.Zn"
            });
            list.Add(new Parameter
            {
                Id = 2,
                Name = "Zn в ОЭ",
                Description = "Цинк в отработанном электролите",
                Source = "LIMS.Sol_Zn"
            });
            list.Add(new Parameter
            {
                Id = 3,
                Name = "Раствор",
                Description = "Очищенный раствор",
                Source = "Hitorian.Solution"
            });

            return list.ToArray();
        }
    }
}
