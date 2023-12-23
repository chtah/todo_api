# TODO-API

API Made with Node.js + PrismaORM
Use PostgresSQL as Database

# How to use

1.clone this git<br>
2.open terminal run command `pnpm i`<br>
3.create postgres database, open docker and run command `docker run -p 5432:5432 --name=todo-db -e POSTGRES_PASSWORD=todo postgres:15`<br>
4.migrate model in api to database, run command `npx prisma migrate dev` then Enter a name of migration as you want<br>
5.start api run command `pnpm start`
