using Microsoft.AspNetCore.Http;
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
    public class DataSourceController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<DataSource> Get()
        {
            /*var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            })
            .ToArray();*/

            List<DataSource> list = new List<DataSource>();
            list.Add(new DataSource
            { 
                Id = 1,
                Name = "LIMS",
                Description = "Лабораторная система"
            });
            list.Add(new DataSource
            {
                Id = 2,
                Name = "SAP",
                Description = "Система управления предприятием"
            });
            list.Add(new DataSource
            {
                Id = 3,
                Name = "Historian",
                Description = "Исторические технологические данные"
            });
            list.Add(new DataSource
            {
                Id = 4,
                Name = "InPrms",
                Description = "Вводимые параметры (ручной ввод)"
            });

            return list.ToArray();
        }
    }
}
