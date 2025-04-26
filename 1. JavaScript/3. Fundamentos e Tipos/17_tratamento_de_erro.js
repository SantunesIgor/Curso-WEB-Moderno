function f(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e){
        throw{
            nome: e.name,
            msg: e.message,
            date: new Date
        }
    } finally {
        console.log('Final')
    }
}

const obj = { nome: 'Roberto' }
f(obj)