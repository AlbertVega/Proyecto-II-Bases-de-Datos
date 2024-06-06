using Microsoft.EntityFrameworkCore;

namespace HospiTEC.Server.Data
{
    public class CamaDataClass
    {
        private readonly HospiTEC_DB_Context _context;

        public CamaDataClass(HospiTEC_DB_Context context)
        {
            _context = context;
        }

        public async Task<bool> StoreCama(CAMA cama_Dto)
        {
            try
            {
                _context.cama.Add(cama_Dto);
                await _context.SaveChangesAsync();
                return true;
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public async Task<bool> updateCama(CAMA cama_Dto)
        {
            try
            {
                _context.cama.Update(cama_Dto);
                await _context.SaveChangesAsync();
                return true;
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public async Task<bool> deleteCama(CAMA cama_Dto)
        {
            try
            {
                _context.cama.Remove(cama_Dto);
                await _context.SaveChangesAsync();
                return true;
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public async Task<List<CAMA>> GetCamas()
        {
            try
            {
                return await _context.cama.ToListAsync();
            }
            catch (Exception e)
            {
                throw e;
            }
        }
    }
}
