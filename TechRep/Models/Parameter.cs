using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TechRep.Models
{
    public class Parameter
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public string UOM { get; set; }

        public string Source { get; set; }

        public string Formula { get; set; }
    }
}
