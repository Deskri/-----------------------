function bernoulliTrial(p) {
  return Math.random() < p ? 1 : 0;
}

const p = 0.9;
const array = [];

for (let i = 0; i < 100; i++) {
  const value = bernoulliTrial(p);
  array.push(value);
}

const expectation = array.reduce((sum, value) => sum + value, 0) / array.length;
document.getElementById("expectation").innerHTML = "Математическое ожидание: " + expectation;

const variance =
  array.reduce((sum, value) => sum + Math.pow(value - expectation, 2), 0) /
  (array.length - 1);
document.getElementById("variance").innerHTML = "Дисперсия: " + variance;

const standardDeviation = Math.sqrt(variance);
document.getElementById("standardDeviation").innerHTML =
  "Среднеквадратичное отклонение: " + standardDeviation;

const ctxf = document.getElementById("fpChart").getContext("2d");
const fpData = {
  labels: Array.from(Array(100).keys()),
  datasets: [
    {
      label: "f(x)",
      data: array,
      borderColor: "Turquoise",
      backgroundColor: "rgba(0, 0, 255, 0.2)",
    },
    {
      label: "p(x)",
      data: Array(100).fill(p),
      borderColor: "LightCoral",
      backgroundColor: "rgba(255, 0, 0, 0.2)",
    },
  ],
};

const fpOptions = {
  scales: {
    x: {
      display: true,
      title: {
        display: true,
        text: "x",
      },
    },
    y: {
      display: true,
      title: {
        display: true,
        text: "y",
      },
    },
  },
};

new Chart(ctxf, {
  type: "line",
  data: fpData,
  options: fpOptions,
});

const cumulativeData = [];
let cumulativeSum = 0;

for (let i = 0; i < array.length; i++) {
  cumulativeSum += array[i];
  cumulativeData.push(cumulativeSum);
}

const ctxF = document.getElementById("FChart").getContext("2d");
const FChart = new Chart(ctxF, {
  type: "line",
  data: {
    labels: Array.from({ length: array.length }, (_, i) => i + 1),
    datasets: [
      {
        label: "Кумулятивная функция распределения",
        data: cumulativeData,
        fill: false,
        borderColor: "rgba(75, 192, 192, 1)",
        tension: 0.1,
      },
    ],
  },
  options: {
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: "x",
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: "F(x)",
        },
        beginAtZero: true,
        max: Math.max(...cumulativeData) + 1,
      },
    },
  },
});
