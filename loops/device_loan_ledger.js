// https://www.freecodecamp.org/learn/javascript-v9/lab-device-loan-ledger/lab-device-loan-ledger

// Dateとarray.sort()と使用しないこと

const equipmentLedger = {
  "1": { type: "PC", status: "CheckedOut", borrower: { name: "John Smith", email: "john@acme.org" }, dueDate: "11/30/2025" },
  "2": { type: "Laptop", status: "CheckedIn", borrower: { name: "", email: "" }, dueDate: "" },
  "3": { type: "Laptop", status: "CheckedOut", borrower: { name: "Jane Doe", email: "jane@acme.org" }, dueDate: "10/31/2025" },
  "4": { type: "iPad", status: "CheckedIn", borrower: { name: "", email: "" }, dueDate: "" }
};

// デバイスを貸出中にする
function checkoutDevice(ledger, assetTag, borrower) {
  // 台帳オブジェクトをコピー
  const updatedLedger = loadLedger(serializeLedger(ledger));

  // 該当するasserTagのデバイスがあるか
  if (!Object.hasOwn(updatedLedger, assetTag)) {
      return {
      ledger: updatedLedger,
      message: `Device ${assetTag} was not found in the ledger.`
    };
  }

  // 該当するデバイスが既に貸出中の場合
  if (updatedLedger[assetTag].status === "CheckedOut") {
    return {
      ledger: updatedLedger,
      message: `Device ${assetTag} is already checked out.`
    };
  }

  // 貸出人の名前とメールアドレスを登録して状態を貸出中にする
  // 本来は返却期限も設定するが、今回は要件に入れない
  updatedLedger[assetTag].borrower.name = borrower.name;
  updatedLedger[assetTag].borrower.email = borrower.email;
  updatedLedger[assetTag].status = "CheckedOut";
  return {
    ledger: updatedLedger,
    message: `Device ${assetTag} was borrowed by ${borrower.name}.`
  };
}

// デバイスを返却済みにする
function checkinDevice(ledger, assetTag) {
  const updatedLedger = loadLedger(serializeLedger(ledger));

  if (!Object.hasOwn(updatedLedger, assetTag)) {
      return {
      ledger: updatedLedger,
      message: `Device ${assetTag} was not found in the ledger.`
    };
  }

  updatedLedger[assetTag].borrower.name = "";
  updatedLedger[assetTag].borrower.email = "";
  updatedLedger[assetTag].dueDate = "";
  updatedLedger[assetTag].status = "CheckedIn";
  return {
    ledger: updatedLedger,
    message: `Device ${assetTag} is already checked in.`
  };
}

// 返却期限が過ぎているデバイスの一覧を出す
function listOverdueDevices(ledger, today) {
  const normalizedToday = normalizeDate(today);
  const overdueDevices = [];
  for (const assetTag in ledger) {
    const device = ledger[assetTag];

    if (device.status !== "CheckedOut") {
      continue;
    }

    const normalizedDueDate = normalizeDate(device.dueDate);
    
    if (normalizedDueDate < normalizedToday) {
      overdueDevices.push(device);
    }
  }

  // 返却期限で昇順に並び替える
  for (let i = 0; i < overdueDevices.length - 1; i++) {
    for (let j = 0; j < overdueDevices.length - i - 1; j++) {
      if (normalizeDate(overdueDevices[j].dueDate) > normalizeDate(overdueDevices[j + 1].dueDate)) {
        const temp = overdueDevices[j];
        overdueDevices[j] = overdueDevices[j + 1];
        overdueDevices[j + 1] = temp;
      }
    }
  }
  return overdueDevices;
}

// オブジェクトをJSON形式にする
function serializeLedger(ledger) {
  return JSON.stringify(ledger);
}

// JSONをオブジェクトにする
function loadLedger(json) {
  return JSON.parse(json);
}

// 日付を"20030302"のような形に正規化する
function normalizeDate(date) {
  const [month, day, year] = date.split("/");
  const paddedMonth = month.padStart(2, "0");
  const paddedDay = day.padStart(2, "0");

  return `${year}${paddedMonth}${paddedDay}`;
}
