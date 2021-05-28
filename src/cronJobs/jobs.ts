import { getConnection } from 'typeorm';
import { CronJob } from 'cron';
import { VehiclesFileEntity } from '../modules/vehicles-file/vehicles-file.entity';

const fs = require('fs');

// '00 00 * * *'
export function deleteFiles() {
  const job = new CronJob('00 00 * * *', async () => {
    const query = 'select * from vehicles_file';
    const data = await getConnection().query(query);
    if (data.length > 0) {
      data.forEach(item => {
        let cadena = item.url.split('web');
        cadena = cadena[1].substring(1);
        try {
          if (fs.existsSync(cadena)) {
            fs.unlink(cadena, async (err) => {
              if (!err) {
                await getConnection()
                  .createQueryBuilder()
                  .delete()
                  .from(VehiclesFileEntity)
                  .execute();
              }
            });
          }
        } catch (err) {
          console.error(err);
        }
      });
    }

  }, null, true, 'America/Bogota');
  job.start();
}
