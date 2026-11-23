// https://www.freecodecamp.org/learn/javascript-v9/lab-smart-pantry-restocker/lab-smart-pantry-restocker

const pantry = [
  { sku: "A10", name: "Tomatoes", qty: 4, expires: "2027-01-01", zone: "fridge" },
  { sku: "D43", name: "Pineapples", qty: 2, expires: "2020-01-01", zone: "general" }
];

const rawData = [
  "A10|Tomatoes|5|2027-01-01",
  "B21|Bananas|10|2027-01-01",
  "C32|Eggs|3|2027-01-01|fridge",
  "C32|Eggs|3|2027-01-01",
  "D43|Pineapples|0|2027-01-01",
  "E54|Peppers|-1|2027-01-01|fridge"
];

// rawDataをオブジェクトの配列に変換する
function parseShipment(rawData) {
  const result = [];
  for (let i = 0; i < rawData.length; i++) {
    // rawDataを"|"で区切って、オブジェクトのプロパティに分割代入
    const [sku, name, qty, expires, zone = "general"] = rawData[i].split("|")

    // skuが重複している場合はスキップする
    let isDuplicateSku = false;
    for (let j = 0; j < result.length; j++) {
      if (result[j].sku === sku) {
        isDuplicateSku = true;
        break;
      }
    }

    if (isDuplicateSku) {
      continue;
    }

    result.push({
      sku,
      name,
      qty: parseInt(qty),
      expires,
      zone
    })
  }
  return result;
}

// qtyおよびskuの有無によって、アクションを分類する
// shipmentはrawDataを解析したオブジェクトの配列
function planRestock(pantry, shipment) {
  const actions = [];
  for (let i = 0; i < shipment.length; i++) {
    const item = shipment[i];
    const plan = {type:"", item};

    if (shipment[i].qty <= 0) {
      plan.type = "discard";
    } else {
      let isInPantry = false;
      for (let j = 0; j < pantry.length; j++) {
        if (pantry[j].sku === item.sku) {
          isInPantry = true;
          break;
        }
      }
      
      if(isInPantry) {
        plan.type = "restock";
      } else {
        plan.type = "donate";
      }
    }
    actions.push(plan);
  }
  return actions;
}

function groupByZone(actions) {
  const group = {};
  for (let i = 0; i < actions.length; i++) {
    const action = actions[i];
    const zone = action.item.zone;

    // groupにzoneのプロパティがなければ[]で初期化する
    if (!Object.hasOwn(group, zone)) {
      group[zone] = [];
    }

    group[zone].push(action);
  }
  return group;
}

function clonePantry(pantry) {
  const cpiedPantry = JSON.parse(JSON.stringify(pantry));
  return cpiedPantry;
}

const copiedPantry = clonePantry(pantry);
const shipment = parseShipment(rawData);
const actions = planRestock(pantry, shipment);
console.log(groupByZone(actions));
