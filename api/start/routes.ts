/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
import Database from '@ioc:Adonis/Lucid/Database'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.get('/data', async () => {
  try {
    return Database.from('data').select('*')
  } catch (error) {
    return error.message;
  }
  
})

Route.post('/insert', async ({request}) => {
  try {
    const data = request.only(["identification","modelo","factores","pruebamanejo","satisfaction"])
    if( !data.identification|| !data.modelo || !data.factores || !data.pruebamanejo || !data.satisfaction){
        return {error: "Faltan datos"}
    }
    const postId = await Database
    .table('data')
    .insert({
      identification: data.identification,
      modelo: data.modelo,
      factores: data.factores,
      pruebamanejo: data.pruebamanejo,
      satisfaction: data.satisfaction
    })
    .returning('id') // For PostgreSQL
    return postId
  } catch (error) {
    return { error : error.message }
  }
})


Route.put('/update', async ({request}) => {
  try {
    const data = request.only(["identification","modelo","factores","pruebamanejo","satisfaction"])
    if( !data.identification|| !data.modelo || !data.factores || !data.pruebamanejo || !data.satisfaction){
        return {error: "No hay datos"}
    }
  const updatedRowsCount = await Database
  .from('data')
  .where('identification', data.identification )
  .update({...data})
  .returning('identification') // For PostgreSQL
  return updatedRowsCount
  } catch (error) {
    return {error: error.message}
  }
})


Route.delete('/delete/:identification', async ({params}) => {
  try {
    const data = params.identification
    console.log(data)
    if( !data){
        return {error: "Falta la identificación"}
    }
    console.log(data)
    const deletedRowsCount = await Database
    .from('data')
    .where('identification', data)
    .delete()
    return deletedRowsCount
  } catch (error) {
    return { error: error.message}
  }
})

