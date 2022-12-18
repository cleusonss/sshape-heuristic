require('dotenv').config();
require('./connection').connect();

const { log } = console;

// Corredores 6
//const order = [''] //Lista de Medicamentos


// cod: { type: Integer, default: null},
// name: { type: String, default: null},
// quantity: { type: Integer, default: null},
// aisle: { type: Integer, default: null},
// location: { type: String, default: null}





exports.pick = async (req, res, next) => {

    // Recebe uma Ordem

    // Busca todas as Posicoes

    // Busca o primeiro corredor

    // Entra no corredor e caminha até o final

    // Retorna pelo final do corredor seguinte

    // Retorn para ponto inicial


    for(let i=0; i<6; i++){
        log("você está no corredor: ", i+1);
    }
    return res.status(200).send(
        {
            "status": "success",
            "message": "Vamos programaar"
        }
    );
};