import { EntityManager, XofttionEntityManager } from '@xofttion/clean-architecture';
import { QueryRunner } from 'typeorm';
import { TypeormEntityDataSource } from './entity-datasource';

export interface TypeormEntityManager extends EntityManager {
  setRunner(runner: QueryRunner): void;
}

export class XofttionTypeormEntityManager
  extends XofttionEntityManager
  implements TypeormEntityManager
{
  constructor(private typeormDataSource: TypeormEntityDataSource) {
    super(typeormDataSource);
  }

  public setRunner(runner: QueryRunner): void {
    this.typeormDataSource.setRunner(runner);
  }
}
