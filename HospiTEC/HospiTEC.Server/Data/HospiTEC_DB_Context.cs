using Microsoft.EntityFrameworkCore;

namespace HospiTEC.Server.Data
{
    public class HospiTEC_DB_Context : DbContext
    {
        public DbSet<PACIENTE> paciente { get; set; }
        public DbSet<PERSONAL> personal { get; set; }

        public HospiTEC_DB_Context(DbContextOptions options) : base(options)
        {
            
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<PACIENTE>().HasKey(p => p.correo);
            modelBuilder.Entity<PERSONAL>().HasKey(P => P.correo);
        }
    }
}
