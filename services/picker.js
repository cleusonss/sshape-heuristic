require("dotenv").config();

const { log } = console;

// Corredores 6
//const order = [''] //Lista de Medicamentos

// cod: { type: Integer, default: null},
// name: { type: String, default: null},
// quantity: { type: Integer, default: null},
// aisle: { type: Integer, default: null},
// location: { type: String, default: null}

exports.pick = async (order) => {
  // 1. Recebe uma ordem = lista de produtos
  // 2. Ordena a Ordem
   order = order.sort(compare);


  //order.forEach( item => console.log ("aisle: ", item.aisle));

  // Busca todas as Posicoes

  // Busca o primeiro corredor

  // Entra no corredor e caminha atgé o final

  // Retorna pelo final do corredor seguinte

  // Retorn para ponto inicial

  return order;
};

const getLocation = (items) => {
  let locations = [];
  items.forEach((item) =>
    locations.push({ aisle: item.aisle, location: item.location })
  );
  return locations;
};

const first = (items) => {
  /* Array é vazio */
  if (items.length === 0) {
    log(" error: No items found");
    return null;
  }

  /* Array contem somente um item */
  if (items.length == 1) {
    return items[0];
  }

  /* Array comtem varios items */
  let first = null;
  for (item of items) {
    if (!first) {
      first = item;
    } else {
      if (item.aisle < first.aisle && item.location > first.location) {
        first = item;
      }
    }
  }
  return first;
};

const next = (items) => {
  let item = items[0];
  for (let i = 1; i < items.length; i++) {
    item = minor(retorno, items[i]);
  }
  return item;
};

const minor = (a, b) => {
  if (b.aisle < a.aisle) {
    return b;
  } else {
    if (a.aisle === b.aisle && b.location < a.location) {
      return b;
    }
  }
  return a;
};

const compare = (a, b) => {
  if (a.aisle < b.aisle) {
    return -1;
  } else {
    if (a.aisle === b.aisle && a.location < b.location) {
      return -1;
    }
  }
  return 0;
};
