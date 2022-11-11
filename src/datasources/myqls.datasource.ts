import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'myqls',
  connector: 'mysql',
  url: '',
  host: 'localhost',
  port: 3307,
  user: 'root',
  password: '',
  database: 'ecommerce_db'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class MyqlsDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'myqls';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.myqls', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
