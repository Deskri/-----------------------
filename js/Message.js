class Message {
  constructor(type, adress, length, time) {
    this.type = type;
    this.adress = adress;
    this.length = length;
    this.time = time;
  }
}

function compareByTime(a, b) {
  return a.time - b.time;
}

function getRandomNumberWithProbability(probabilities) {
  let cumulativeProbabilities = [];
  let sum = 0;
  for (let i = 0; i < probabilities.length; i++) {
    sum += probabilities[i];
    cumulativeProbabilities.push(sum);
  }

  let random = Math.random();

  let index = cumulativeProbabilities.findIndex((prob) => prob >= random);

  return index + 1;
}

function generateWeibullValues(count, a, b) {
  const random = d3.randomWeibull(a, b);
  const values = [];

  for (let i = 0; i < count; i++) {
    values.push(random());
  }

  return values;
}

let pType = [0.56, 0.13, 0.31];

let pAdress1 = [0.79, 0.04, 0.01, 0.11, 0.05];
let pAdress2 = [0.75, 0.01, 0.07, 0.11, 0.06];
let pAdress3 = [0.67, 0.16, 0.01, 0.14, 0.02];

let MIN = 9;
let MAX = 220;

let N = 100;

const Weibull = generateWeibullValues(100, 1, 0.4);

let arrayMessage = [];

for (let i = 0; i < N; i++) {
  let type = getRandomNumberWithProbability(pType);

  let adress = 0;
  switch (type) {
    case 1:
      adress = getRandomNumberWithProbability(pAdress1);
      break;
    case 2:
      adress = getRandomNumberWithProbability(pAdress2);
      break;
    case 3:
      adress = getRandomNumberWithProbability(pAdress3);
      break;
  }

  let length = Math.floor(Math.random() * (MAX - MIN + 1) + MIN);

  let time = Weibull[i];

  let _message = new Message(type, adress, length, time);

  arrayMessage.push(_message);
}

arrayMessage.sort(compareByTime);

for (let i = 0; i < arrayMessage.length; i++) {
  let body = document.getElementById("table-body-message");
  let row = document.createElement("tr");
  let colType = document.createElement("td");
  let colAdress = document.createElement("td");
  let colLength = document.createElement("td");
  let colTime = document.createElement("td");

  colType.innerHTML = arrayMessage[i].type;
  colAdress.innerHTML = arrayMessage[i].adress;
  colLength.innerHTML = arrayMessage[i].length;
  colTime.innerHTML = arrayMessage[i].time.toFixed(6);

  row.append(colType);
  row.append(colAdress);
  row.append(colLength);
  row.append(colTime);
  body.append(row);
}

for (let i = 0; i < pType.length; i++) {
  let name = i + 1;
  let count = arrayMessage.reduce(
    (acc, x) => (x.type === name ? (acc += 1) : acc),
    0
  );
  let pR = count / N;
  let pT = pType[i];

  let body = document.getElementById("table-body-request");
  let row = document.createElement("tr");
  let colName = document.createElement("td");
  let colCount = document.createElement("td");
  let colPR = document.createElement("td");
  let colPT = document.createElement("td");

  colName.innerHTML = name;
  colCount.innerHTML = count;
  colPR.innerHTML = pR.toFixed(2);
  colPT.innerHTML = pT.toFixed(2);

  row.append(colName);
  row.append(colCount);
  row.append(colPR);
  row.append(colPT);
  body.append(row);
}

for (let i = 0; i < pType.length; i++) {
  let name = i + 1;
  let count = arrayMessage.reduce(
    (acc, x) => (x.type === name ? (acc += 1) : acc),
    0
  );
  let averageValue =
    arrayMessage.reduce(
      (acc, x) => (x.type === name ? (acc += x.length) : acc),
      0
    ) / count;

  let maxValueObject = arrayMessage.reduce((pV, cV) =>
    cV.type === name && cV.length > pV.length ? cV : pV
  );
  let maxValue = maxValueObject.length;

  let body = document.getElementById("table-body-length");
  let row = document.createElement("tr");
  let colName = document.createElement("td");
  let colAverageValue = document.createElement("td");
  let colmaxValue = document.createElement("td");

  colName.innerHTML = name;
  colAverageValue.innerHTML = averageValue.toFixed(2);
  colmaxValue.innerHTML = maxValue.toFixed(2);

  row.append(colName);
  row.append(colAverageValue);
  row.append(colmaxValue);
  body.append(row);
}

for (let i = 0; i < 5; i++) {
  let name = i + 1;
  let time_max = arrayMessage.reduce(
    (acc, x) => (x.adress === name ? (acc += x.time) : acc),
    0
  );
  let count = arrayMessage.reduce(
    (acc, x) => (x.adress === name ? (acc += 1) : acc),
    0
  );
  let averageFrequency = count / time_max;

  let body = document.getElementById("table-body-frequency");
  let row = document.createElement("tr");
  let colName = document.createElement("td");
  let colCount = document.createElement("td");
  let colAverageFrequency = document.createElement("td");

  colName.innerHTML = name;
  colCount.innerHTML = count;
  colAverageFrequency.innerHTML = averageFrequency.toFixed(2);

  row.append(colName);
  row.append(colCount);
  row.append(colAverageFrequency);
  body.append(row);
}

for (let i = 1; i < 4; i++) {
  let name = i;

  let count = arrayMessage.reduce(
    (acc, x) => (x.type === name ? (acc += 1) : acc),
    0
  );
  let time_max = arrayMessage.reduce(
    (acc, x) => (x.type === name ? (acc += x.time) : acc),
    0
  );
  let sumLength = arrayMessage.reduce(
    (acc, x) => (x.type === name ? (acc += x.time) : acc),
    0
  );
  let mean = sumLength / count;
  let squaredDeviations = arrayMessage.reduce(
    (acc, x) => (x.type === name ? (acc += Math.pow(x.time - mean, 2)) : acc),
    0
  );
  let variance = squaredDeviations / count;
  let standardDeviation = Math.sqrt(variance);
  let intensity = count / time_max;

  let body = document.getElementById("table-body-characteristics");
  let row = document.createElement("tr");
  let colName = document.createElement("td");
  let colMean = document.createElement("td");
  let colVariance = document.createElement("td");
  let colStandardDeviation = document.createElement("td");
  let colIntensity = document.createElement("td");

  colName.innerHTML = name;
  colMean.innerHTML = mean.toFixed(2);
  colVariance.innerHTML = variance.toFixed(2);
  colStandardDeviation.innerHTML = standardDeviation.toFixed(2);
  colIntensity.innerHTML = intensity.toFixed(2);

  row.append(colName);
  row.append(colMean);
  row.append(colVariance);
  row.append(colStandardDeviation);
  row.append(colIntensity);
  body.append(row);
}

for (let i = 1; i < 4; i++) {
  let name = i;

  let body = document.getElementById("table-body-streams");
  let row = document.createElement("tr");
  let colName = document.createElement("td");

  colName.scope = "col";
  colName.rowSpan = 3;

  colName.innerHTML = name;

  row.append(colName);

  let colCharName = document.createElement("td");

  colCharName.innerHTML = "Число заявок";

  row.append(colCharName);

  for (let y = 1; y < 6; y++) {
    let colChar = document.createElement("td");
    colChar.innerHTML = arrayMessage.reduce(
      (acc, x) => (x.type === name && x.adress === y ? (acc += 1) : acc),
      0
    );
    row.append(colChar);
  }

  let row2 = document.createElement("tr");
  let colCharName2 = document.createElement("td");

  colCharName2.innerHTML = "Вероятность";

  row2.append(colCharName2);

  for (let y = 1; y < 6; y++) {
    let colChar = document.createElement("td");
    let probability = arrayMessage.reduce(
        (acc, x) => (x.type === name && x.adress === y ? (acc += 1) : acc),
        0
      ) / arrayMessage.reduce(
          (acc, x) => (x.type === name ? (acc += 1) : acc),
          0
        );
    colChar.innerHTML = probability.toFixed(2);
    row2.append(colChar);
  }

  let row3 = document.createElement("tr");
  let colCharName3 = document.createElement("td");

  colCharName3.innerHTML = "Теор. вероятность";

  row3.append(colCharName3);

  for (let y = 0; y < 5; y++) {
    let colChar = document.createElement("td");
    switch (name) {
      case 1:
        colChar.innerHTML = pAdress1[y];
        break;
      case 2:
        colChar.innerHTML = pAdress2[y];
        break;
      case 3:
        colChar.innerHTML = pAdress3[y];
        break;
    }
    row3.append(colChar);
  }

  body.append(row);
  body.append(row2);
  body.append(row3);
}
