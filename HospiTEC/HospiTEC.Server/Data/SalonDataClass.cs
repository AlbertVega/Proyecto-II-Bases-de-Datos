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
    }
}
