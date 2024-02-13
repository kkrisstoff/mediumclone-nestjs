import { DataSource, DataSourceOptions } from 'typeorm';
import { config } from '@app/ormconfig';

export default new DataSource(config as DataSourceOptions);
