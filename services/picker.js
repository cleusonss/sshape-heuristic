require("dotenv").config();

const { log } = console;

// Corredores 6

exports.pick = async (order) => {
  // 1. Recebe uma ordem = lista de produtos
  // 2. Ordena a Ordem
  order = order.sort(compare);

  //3. Busca o Primeiro Corredor
  let i = order[0].aisle;

  // 4. Caminha no Primeiro Corredor até o final
  let sshape = order.filter((item) => item.aisle == i);

  // 5. Decide voltar pelo final do proximo corredor
  let reverse = true;

  //6. Caminha pelos proximos corredores
  for (i = i + 1; i <= 6; i++) {
    // 7. Busca as posiçõess dos corredores
    let aisle = order.filter((item) => item.aisle === i);

    if (aisle) {
      // 8. Caminha no próximo corredor do final para o inicio
      if (reverse) {
        aisle = aisle.reverse();
        sshape = sshape.concat(aisle);
        reverse = false;
      }
      // 9. Caminha no próximo corredor do inicio par ao final
      else {
        sshape = sshape.concat(aisle);
        reverse = true;
      }
    }
  }

  // Retorna a sequencia que o operador deve percorrer.
  return sshape;
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
