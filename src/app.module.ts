import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './database/sqlite.db',
      synchronize: true,
      logging: true,
      entities: [
        'dist/model/**/*.js',
      ],
    }),
  ],
})
export class AppModule {}
