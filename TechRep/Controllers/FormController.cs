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
    public class FormController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<Form> Get()
        {
            /*var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            })
            .ToArray();*/

            List<Form> list = new List<Form>();
            list.Add(new Form
            {
                Id = 1,
                Name = "ОЦ_1",
                Description = "Технологический журнал ОЦ"
            });
            list.Add(new Form
            {
                Id = 2,
                Name = "СКЦ_1",
                Description = "Технологический журнал СКЦ"
            });
            list.Add(new Form
            {
                Id = 3,
                Name = "ВыщЦ_1",
                Description = "Технологический журнал ВыщЦ"
            });
            list.Add(new Form
            {
                Id = 4,
                Name = "ГМЦ_1",
                Description = "Технологический журнал ГМЦ"
            });

            return list.ToArray();
        }
    }
}
