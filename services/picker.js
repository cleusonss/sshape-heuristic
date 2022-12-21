require("dotenv").config();

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
