console.log("pergi restoran");
orderMakanan(true)
  .then(function (response) {
    return console.log(response);
  })
  .catch(function (error) {
    return console.log(error);
  });

console.log("sembang");
console.log("main phone");

// try {
//   let order = orderMakanan(true);
//   console.log(order);
// } catch (error) {
//   console.log(error);
// }

async function orderMakanan(bahan) {
  return new Promise(function (resolve, reject) {
    if (bahan) {
      setTimeout(() => {
        resolve("makanan siap");
      }, 1000);
    } else {
      reject("tak boleh masak");
    }
  });
}

fetchDefintion()
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

async function fetchDefintion() {
  let response = await fetch(
    "https://api.dictionaryapi.dev/api/v2/entries/en/huhuhu"
  );
  if (!response.ok) throw new Error(response.json());
  let data = await response.json();
  console.log(data);
  return data;
}
