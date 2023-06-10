// const mongoose = require('mongoose')

// module.exports = (req, res, next) => {

//     print("Connection testing ")
//     mongoose.connect("mongodb://127.0.0.1:27017/judo")
//     .then(() => {
//         console.log("Database connection established")
//     }).catch((err) => {
//         console.log("Database connection error")
//         console.log('Erro --> ')
//         console.log(err)
//     })
//     return next()
// }

// const mongoose = require('mongoose');

// module.exports = (req, res, next) => {
//     console.log("Connection testing");

//     // Conectar ao banco de dados padrão para executar a verificação
//     mongoose.connect("mongodb://127.0.0.1:27017")
//         .then(() => {
//             // Verificar se o banco de dados "judo" existe
//             const dbAdmin = mongoose.connection.db.admin();
//             dbAdmin.listDatabases()
//                 .then(result => {
//                     const databases = result.databases.map(db => db.name);
//                     if (databases.includes('judo')) {
//                         // O banco de dados "judo" já existe, apenas conectar a ele
//                         console.log("Database connection established");
//                         mongoose.connect("mongodb://127.0.0.1:27017/judo")
//                             .then(() => {
//                                 console.log("Connected to 'judo' database");
//                                 return next();
//                             })
//                             .catch((err) => {
//                                 console.log("Database connection error");
//                                 console.log('Error -->');
//                                 console.log(err);
//                                 return next(err);
//                             });
//                     } else {
//                         // O banco de dados "judo" não existe, criar e conectar a ele
//                         const db = mongoose.connection.useDb('judo');
//                         console.log("Created and connected to 'judo' database");
//                         return next();
//                     }
//                 })
//                 .catch((err) => {
//                     console.log("Error listing databases");
//                     console.log('Error -->');
//                     console.log(err);
//                     return next(err);
//                 });
//         })
//         .catch((err) => {
//             console.log("Database connection error");
//             console.log('Error -->');
//             console.log(err);
//             return next(err);
//         });
// };

const mongoose = require('mongoose');

module.exports = (req, res, next) => {
  console.log("Connection testing");

  // Conecta-se ao servidor do MongoDB
  mongoose.connect("mongodb://127.0.0.1:27017/admin")
    .then(() => {
      console.log("Admin database connection established");

      // Verifica se o banco de dados "judo" existe
      return mongoose.connection.db.listCollections({ name: 'judo' }).toArray();
    })
    .then((collections) => {
      if (collections.length > 0) {
        // O banco de dados "judo" já existe, apenas conecta a ele
        return mongoose.connect("mongodb://127.0.0.1:27017/judo");
      } else {
        // O banco de dados "judo" não existe, cria-o e conecta a ele
        return mongoose.connection.db.createCollection('judo')
          .then(() => {
            console.log("Database 'judo' created");
            return mongoose.connect("mongodb://127.0.0.1:27017/judo");
          });
      }
    })
    .then(() => {
      console.log("Database connection established");
      return next();
    })
    .catch((err) => {
      console.log("Database connection error");
      console.log('Erro --> ');
      console.log(err);
    });
};

