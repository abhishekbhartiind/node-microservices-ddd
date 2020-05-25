import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import path from 'path';

import { ListModule } from './list/list.module';
import { FindModule } from './find/find.module';
import { CreateModule } from './create/create.module';
import { DeleteModule } from './delete/delete.module';
import { UpdateModule } from './update/create.module';

const modules = [
  ListModule,
  FindModule,
  CreateModule,
  DeleteModule,
  UpdateModule,
];

@Module({
  imports: [
    ...modules,
    GraphQLModule.forRoot({
      autoSchemaFile: path.join(process.cwd(), 'src/schema.gql'),
    }),
  ],
})
export class AppModule {}
