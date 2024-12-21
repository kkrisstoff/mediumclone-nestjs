import { DataSource, DataSourceOptions } from 'typeorm';
import { ormconfig } from '@app/ormconfig';

export default new DataSource(ormconfig as DataSourceOptions);
