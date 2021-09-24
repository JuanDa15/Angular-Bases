const mongoose = require('mongoose');

const dbConnection = async()=>{

  try{

    await mongoose.connect('mongodb+srv://admin:1111@clusterpruebas.dtx6l.mongodb.net/test' ,{
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log('BD Online');
    
  }catch(error){
    console.log(error);
    throw new('Error al inicializar la bd');
  }
}

module.exports = {
  dbConnection
}