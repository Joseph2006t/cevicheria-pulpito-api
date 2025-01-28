import pg from 'pg';
const {Client}=pg;

const config={
    user:'db_pulpito_user',
    host: 'dpg-cu9c00a3esus73b2o46g-a.oregon-postgres.render.com',
    database: 'db_pulpito',
    password: 'KyTywqV8K0Z95OJn2NHZHFQP8VMcuJQd',
    port: 5432,
    ssl: {
        rejectUnauthorized: false,
    }
}
export async function Conectar(params){
    const client= new Client(config);
    try{
        await client.connect();
        console.log('Conexión exitosa');
    }catch(error){
        console.log('Error en la conexión');
    }
}

export async function ConsultaPlatos() {
    const cliente = new Client(config)
    try{
        await cliente.connect();
        const resultado = await cliente.query('SELECT * FROM platos');
        return resultado.rows;
    }
    catch(error){
        console.log(error)
    }
}