﻿using Microsoft.EntityFrameworkCore;

namespace HospiTEC.Server.Data
{
    public class HospiTEC_DB_Context : DbContext
    {
        public DbSet<PACIENTE> paciente { get; set; }
        public DbSet<PERSONAL> personal { get; set; }
        public DbSet<ROL> rol { get; set; }
        public DbSet<SALON> salon { get; set; }
        public DbSet<CAMA> cama { get; set; }

        public HospiTEC_DB_Context(DbContextOptions options) : base(options)
        {
            
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<PACIENTE>().HasKey(p => p.email);
            modelBuilder.Entity<PERSONAL>().HasKey(p => p.email);
            modelBuilder.Entity<ROL>().HasKey(r => r.id_rol);
            modelBuilder.Entity<SALON>().HasKey(s => s.numero);
            modelBuilder.Entity<CAMA>().HasKey(c => c.numero);

            modelBuilder.Entity<ROL>()
                .HasOne(e => e.personal)
                .WithOne()
                .HasForeignKey<ROL>(e => e.email_personal)
                .IsRequired();

        }
    }
}
