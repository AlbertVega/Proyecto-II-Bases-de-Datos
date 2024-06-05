using Microsoft.EntityFrameworkCore;
using System.Reflection.Metadata;

namespace HospiTEC.Server.Data
{
    public class HospiTEC_DB_Context : DbContext
    {
        public DbSet<PACIENTE> paciente { get; set; }
        public DbSet<HISTORIAL> historial { get; set; }
        public DbSet<PROCEDIMIENTO> procedimiento { get; set; }

        public HospiTEC_DB_Context(DbContextOptions options) : base(options)
        {
            
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<PACIENTE>().HasKey(p => p.email);
            modelBuilder.Entity<HISTORIAL>().HasKey(h => h.id_historial);
            modelBuilder.Entity<PROCEDIMIENTO>().HasKey(p => p.id_reserva_fk);

            modelBuilder.Entity<HISTORIAL>()
            .HasOne(e => e.proc)
            .WithOne()
            .HasForeignKey<HISTORIAL>(e => e.nombre_procedimiento)
            .IsRequired();
        }
    }
}
