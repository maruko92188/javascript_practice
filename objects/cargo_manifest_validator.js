// https://www.freecodecamp.org/learn/javascript-v9/lab-cargo-manifest-validator/lab-cargo-manifest-validator

const manifest = {
  containerId: 1,
  destination: "Monterey, California, USA",
  weight: 831,
  unit: "lb",
  hazmat: false
};

let normalizeUnits = (manifest) => {
  const copiedManifest = {...manifest};
  if(manifest.unit === "lb") {
    copiedManifest.weight = manifest.weight * 0.45;
    copiedManifest.unit = "kg";
  };
  return copiedManifest;
};

let validateManifest = (manifest) => {
  const returnManifest = {};
  const containerId = manifest.containerId;
  const destination = manifest.destination;
  const weight = manifest.weight;
  const unit = manifest.unit;
  const hazmat = manifest.hazmat;

  if(containerId === undefined) {
    returnManifest.containerId = "Missing";
  } else if(!Number.isInteger(containerId) || containerId <= 0) {
    returnManifest.containerId = "Invalid";
  };

  if(destination === undefined) {
    returnManifest.destination = "Missing";
  } else if(!(typeof destination === "string") || destination.trim().length === 0) {
    returnManifest.destination = "Invalid";
  };

  if(weight === undefined) {
    returnManifest.weight = "Missing";
  } else if(Number.isNaN(weight) || weight <= 0) {
    returnManifest.weight = "Invalid";
  };

  if(unit === undefined) {
    returnManifest.unit = "Missing";
  } else if(unit !== "lb" && unit !== "kg") {
    returnManifest.unit = "Invalid";
  };

  if(hazmat === undefined) {
    returnManifest.hazmat = "Missing";
  } else if(!(typeof hazmat === "boolean")) {
    returnManifest.hazmat = "Invalid";
  }
  return returnManifest;
};

let processManifest = (manifest) => {
  if(Object.keys(validateManifest(manifest)).length === 0) {
    console.log(`Validation success: ${manifest.containerId}`);
    console.log(`Total weight: ${normalizeUnits(manifest).weight} kg`);
  } else {
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(validateManifest(manifest));
  };
};
