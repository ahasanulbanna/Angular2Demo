using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;

namespace Angular2Demo.Models
{
    public class Angular2DemoContext : DbContext
    {
        public Angular2DemoContext() : base("Angular2DemoContext")
        {

        }
        public DbSet<Employee> Employees { get; set; }
    }
}
