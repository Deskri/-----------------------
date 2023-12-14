class LCG {
  constructor(seed, a, c, m) {
    this.seed = seed;
    this.a = a;
    this.c = c;
    this.m = m;
  }

  next() {
    this.seed = (this.a * this.seed + this.c) % this.m;
    return this.seed / this.m;
  }
}

const lcg = new LCG(1234, 1664525, 1013904223, Math.pow(2, 32));

class Num {
  constructor() {
    this.array = [];
    this.mathematicalExpectation = 0;
    this.dispersion = 0;
    this.standardDeviation = 0;
  }

  createRandomArray(countOfArray) {
    for (let i = 0; i < countOfArray; i++) {
      this.array.push(lcg.next() * countOfArray);
    }
  }

  calculateMathematicalExpectation() {
    this.array.forEach((x) => {
      this.mathematicalExpectation += x / this.array.length;
    });
  }

  calculateDispersion() {
    this.array.forEach((x) => {
      this.dispersion +=
        Math.pow(x - this.mathematicalExpectation, 2) / this.array.length;
    });
  }

  calculateStandardDeviation() {
    this.standardDeviation = Math.sqrt(this.dispersion);
  }

  calculateFrequency(interval) {
    let frequencyMap = {};

    this.array.forEach((x) => {
      const intervalValue = Math.floor(x / interval) * interval;
      if (frequencyMap[intervalValue]) {
        frequencyMap[intervalValue]++;
      } else {
        frequencyMap[intervalValue] = 1;
      }
    });

    for (let num in frequencyMap) {
      frequencyMap[num] /= this.array.length;
    }

    return frequencyMap;
  }

  plotFrequencyGraph(frequencyMap, elementId) {
    const labels = Object.keys(frequencyMap);
    const data = Object.values(frequencyMap);

    const ctx = document.getElementById(`${elementId}`).getContext("2d");
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Оценка частотности",
            data: data,
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            max: 1,
          },
        },
      },
    });
  }
}

class OscillatorFrequencyEstimation {
  constructor() {
    this.mathematicalExpectationCV = [];
    this.mathematicalExpectationTV = [];

    this.dispersion = 0;
    this.standardDeviation = 0;
  }

  calculateDispersion() {
    for (let i = 1; i < 11; i++) {
      let array = [];
      for (let y = 0; y < 1000 * i; y++) {
        array.push(lcg.next() * 1000 * i);
      }

      this.mathematicalExpectationTV.push((1000 * i) / 2);

      let _mathematicalExpectationCV = 0;
      array.forEach((x) => {
        _mathematicalExpectationCV += x / array.length;
      });

      this.mathematicalExpectationCV.push(_mathematicalExpectationCV);
    }
  }

  createGraph() {
    const ctx = document.getElementById("myChart").getContext("2d");

    const labels = [
      "1000 * 1",
      "1000 * 2",
      "1000 * 3",
      "1000 * 4",
      "1000 * 5",
      "1000 * 6",
      "1000 * 7",
      "1000 * 8",
      "1000 * 9",
      "1000 * 10",
    ];

    const dataCV = Object.values(this.mathematicalExpectationCV);
    const dataTV = Object.values(this.mathematicalExpectationTV);

    const myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "расчетное математическое ожидание",
            data: dataCV,
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 2,
          },
          {
            label: "теоретическое  математическое ожидание",
            data: dataTV,
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  alternatorTest() {
    let isNotGood = false;

    for (let i = 0; i < 10; i++) {
      var difference = Math.abs(
        this.mathematicalExpectationTV[i] - this.mathematicalExpectationCV[i]
      );
      var sigma = (this.mathematicalExpectationTV[i] * 2) / Math.sqrt(12);

      if (difference < sigma && isNotGood !== true) {
        isNotGood = false;
      } else {
        isNotGood = true;
      }
    }

    if (isNotGood) {
      document.getElementById("testResult").innerHTML =
        "Результат: Отклонение больше или равно теоретическому среднеквадратичному отклонению";
    } else {
      document.getElementById("testResult").innerHTML =
        "Результат: Отклонение меньше теоретического среднеквадратичного отклонения";
    }
  }
}

let num100 = new Num();
num100.createRandomArray(100);
num100.calculateMathematicalExpectation();
num100.calculateDispersion();
num100.calculateStandardDeviation();
let frequencyMap100 = num100.calculateFrequency(10*2);
num100.plotFrequencyGraph(frequencyMap100, "frequencyGraph100");

let num1000 = new Num();
num1000.createRandomArray(1000);
num1000.calculateMathematicalExpectation();
num1000.calculateDispersion();
num1000.calculateStandardDeviation();
let frequencyMap1000 = num1000.calculateFrequency(100*2);
num100.plotFrequencyGraph(frequencyMap1000, "frequencyGraph1000");

let num10000 = new Num();
num10000.createRandomArray(10000);
num10000.calculateMathematicalExpectation();
num10000.calculateDispersion();
num10000.calculateStandardDeviation();
let frequencyMap10000 = num10000.calculateFrequency(1000*2);
num100.plotFrequencyGraph(frequencyMap10000, "frequencyGraph10000");

let chart = new OscillatorFrequencyEstimation();
chart.calculateDispersion();
chart.createGraph();
chart.alternatorTest();

document.getElementById(
  "mathematicalExpectation100"
).innerHTML = `Математическое ожидание M = ${Math.round(
  num100.mathematicalExpectation
)}.`;
document.getElementById(
  "dispersion100"
).innerHTML = `Дисперсия D = ${Math.round(num100.dispersion)}.`;
document.getElementById(
  "standardDeviation100"
).innerHTML = `Cреднеквадратичное отклонение = ${Math.round(
  num100.standardDeviation
)}.`;

document.getElementById(
  "mathematicalExpectation1000"
).innerHTML = `Математическое ожидание M = ${Math.round(
  num1000.mathematicalExpectation
)}.`;
document.getElementById(
  "dispersion1000"
).innerHTML = `Дисперсия D = ${Math.round(num1000.dispersion)}.`;
document.getElementById(
  "standardDeviation1000"
).innerHTML = `Cреднеквадратичное отклонение = ${Math.round(
  num1000.standardDeviation
)}.`;

document.getElementById(
  "mathematicalExpectation10000"
).innerHTML = `Математическое ожидание M = ${Math.round(
  num10000.mathematicalExpectation
)}.`;
document.getElementById(
  "dispersion10000"
).innerHTML = `Дисперсия D = ${Math.round(num10000.dispersion)}.`;
document.getElementById(
  "standardDeviation10000"
).innerHTML = `Cреднеквадратичное отклонение = ${Math.round(
  num10000.standardDeviation
)}.`;
