namespace Angular2Demo.Models.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class FistCreate : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Employees",
                c => new
                    {
                        EmployeeId = c.Int(nullable: false, identity: true),
                        FistName = c.String(),
                        LastName = c.String(),
                        EmpCode = c.String(),
                        Position = c.String(),
                        Office = c.String(),
                    })
                .PrimaryKey(t => t.EmployeeId);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Employees");
        }
    }
}
