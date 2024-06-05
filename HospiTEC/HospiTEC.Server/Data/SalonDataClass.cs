using Microsoft.EntityFrameworkCore;

namespace HospiTEC.Server.Data
{
    public class SalonDataClass
    {
        private readonly HospiTEC_DB_Context _context;

        public SalonDataClass(HospiTEC_DB_Context context)
        {
            _context = context;
        }

        public async Task<bool> StoreSalon(SALON salon_Dto)
        {
            try
            {
                _context.salon.Add(salon_Dto);
                await _context.SaveChangesAsync();
                return true;
            }
            catch (Exception e)
            {
                throw e;
            }
        }

       public async Task<List<SALON>> getSalon()
        {
            try
            {
                return await _context.salon.ToListAsync();
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public async Task<bool> UpdateSalon(SALON salon_Dto)
        {
            try
            {
                _context.salon.Update(salon_Dto);
                await _context.SaveChangesAsync();
                return true;
            }
            catch (Exception e)
            {
                throw e;
            }
        }
    }
}
