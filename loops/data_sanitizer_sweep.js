// https://www.freecodecamp.org/learn/javascript-v9/lab-data-sanitizer-sweep/lab-data-sanitizer-sweep

function sanitizeLog(entry, disallowedCharacters) {
  let fixedEntry = entry;
  for (const char of disallowedCharacters) {
    // replaceAll()は置き換えが発生しなかった場合はそのままの文字列を返すので、includes()の判定はなくても同じ結果になる
    if (entry.includes(char)) {
      fixedEntry = fixedEntry.replaceAll(char, "#");
    }
  }
  return fixedEntry;
}

function cleanLogs(logs, disallowedCharacters) {
  let countSanitized = 0;
  let countInfo = 0;

  for (const log of logs) {
    if (log.includes("$")) {
      return "Sanitizing stopped. Failure Reason: Fatal character occurred.";
    } else if (log.startsWith("/")) {
      countInfo++;
    } else {
      sanitizeLog(log, disallowedCharacters);
      countSanitized++;
    }
  }
  return `Total Entry Count: ${logs.length}. Sanitized Entry Count: ${countSanitized}. Informational Entry Count: ${countInfo}. Finished sanitizing logs.`
}

// テスト用のデータ
let logs_1 = [
  "INFO: Server started on port 3000",
  "DEBUG: user=admin token=abc123 connected",
  "WARN: High memory usage detected at 87%"
];

let logs_2 = [
  "FATAL: System overload detected, shutting down",
  "DEBUG: token=def456$ refreshed for session",
  "ERROR: Null pointer exception in module auth"
];

let logs_3 = [
  "ERROR: Failed to connect to db, retry=3",
  "DEBUG: api_key=XYZ789 used in request",
  "/INFO: Cache cleared successfully",
  "WARN: Disk usage at 92%, threshold=90%",
  "/INFO: Disk usage stabilized"
];
