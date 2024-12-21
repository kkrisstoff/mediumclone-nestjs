import { DataSource, DataSourceOptions } from 'typeorm';
import ormSeedConfig from '@app/ormseedconfig';

export default new DataSource(ormSeedConfig as DataSourceOptions);
