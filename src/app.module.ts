import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './entity/task.entity'; // Asegúrate de que la ruta al archivo de entidad sea correcta

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', // tipo de base de datos
      host: 'localhost', // host de la base de datos, usa el nombre del servicio si usas docker-compose
      port: 5432, // puerto por defecto de PostgreSQL
      username: 'postgres', // usuario de la base de datos
      password: '123', // la contraseña que configuraste para el usuario de PostgreSQL
      database: 'burger-jose', // el nombre de tu base de datos
      entities: [Task], // las entidades que TypeORM usará para crear las tablas
      synchronize: true, // en desarrollo puede estar en true para sincronizar el esquema de la base de datos, pero debe estar en false en producción
    }),
    // ... otros módulos
  ],
  // ... controladores y proveedores
})
export class AppModule {}
