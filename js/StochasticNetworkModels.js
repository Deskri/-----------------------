const N1 = "Семененко".length;
const N2 = "Александр".length;
const N3 = "Андреевич".length;
const N4 = N1 + N2;
const N5 = N1 + N3;
const K1 = 4;
const K2 = 1;
const K3 = 1;
const K4 = 2;
const K5 = 3;
const V = 3;

document.getElementById(
  "N1"
).innerHTML = `N1 = длина слова "Семененко" = ${N1.toFixed(4)}`;
document.getElementById(
  "N2"
).innerHTML = `N2 = длина слова "Александр" = ${N2.toFixed(4)}`;
document.getElementById(
  "N3"
).innerHTML = `N3 = длина слова "Андреевич" = ${N3.toFixed(4)}`;
document.getElementById("N4").innerHTML = `N4 = N1 + N2 = ${N4.toFixed(4)}`;
document.getElementById("N5").innerHTML = `N5 = N1 + N3 = ${N5.toFixed(4)}`;

const P13 = 1 / N1;
const P23 = 1 / N2;
const P31 = 1 / N3;
const P42 = 1 / N4;
const P53 = 1 / N5;

document.getElementById("P1").innerHTML = `Р1k = 1 / N1 = ${P13.toFixed(3)}`;
document.getElementById("P2").innerHTML = `Р2l = 1 / N2 = ${P23.toFixed(3)}`;
document.getElementById("P3").innerHTML = `Р3m = 1 / N3 = ${P31.toFixed(3)}`;
document.getElementById("P4").innerHTML = `Р4n = 1 / N4 = ${P42.toFixed(3)}`;
document.getElementById("P5").innerHTML = `Р5g = 1 / N5 = ${P53.toFixed(3)}`;

document.getElementById("tdP1").innerHTML = P13.toFixed(3);
document.getElementById("tdP2").innerHTML = P23.toFixed(3);
document.getElementById("tdP3").innerHTML = P31.toFixed(3);
document.getElementById("tdP4").innerHTML = P42.toFixed(3);
document.getElementById("tdP5").innerHTML = P53.toFixed(3);

const P10 = 1 - P13;
const P25 = 1 - P23;
const P34 = 1 - P31;
const P45 = 1 - P42;
const P55 = 1 - P53;

document.getElementById("td2P1").innerHTML = P13.toFixed(3);
document.getElementById("td2P2").innerHTML = P23.toFixed(3);
document.getElementById("td2P3").innerHTML = P31.toFixed(3);
document.getElementById("td2P4").innerHTML = P42.toFixed(3);
document.getElementById("td2P5").innerHTML = P53.toFixed(3);

document.getElementById("P10").innerHTML = P10.toFixed(3);
document.getElementById("P25").innerHTML = P25.toFixed(3);
document.getElementById("P34").innerHTML = P34.toFixed(3);
document.getElementById("P45").innerHTML = P45.toFixed(3);
document.getElementById("P55").innerHTML = P55.toFixed(3);

const LAMBDA0 = 1;
const LAMBDA1 = P10 / LAMBDA0;
const LAMBDA3 = P31 / LAMBDA1;
const LAMBDA4 = P34 * LAMBDA3;
const LAMBDA2 = P42 * LAMBDA4;
const LAMBDA5 = (P13 * LAMBDA1 + P23 * LAMBDA2 - LAMBDA3) / -P53;

document.getElementById("L0").innerHTML = "λ0 = " + LAMBDA0.toFixed(3);
document.getElementById("L1").innerHTML = "λ1 = " + LAMBDA1.toFixed(3);
document.getElementById("L2").innerHTML = "λ2 = " + LAMBDA2.toFixed(3);
document.getElementById("L3").innerHTML = "λ3 = " + LAMBDA3.toFixed(3);
document.getElementById("L4").innerHTML = "λ4 = " + LAMBDA4.toFixed(3);
document.getElementById("L5").innerHTML = "λ5 = " + LAMBDA5.toFixed(3);

const ALFA1 = LAMBDA1 / LAMBDA0;
const ALFA2 = LAMBDA2 / LAMBDA0;
const ALFA3 = LAMBDA3 / LAMBDA0;
const ALFA4 = LAMBDA4 / LAMBDA0;
const ALFA5 = LAMBDA5 / LAMBDA0;

document.getElementById("A1").innerHTML = "α1 = " + ALFA1.toFixed(3);
document.getElementById("A2").innerHTML = "α2 = " + ALFA2.toFixed(3);
document.getElementById("A3").innerHTML = "α3 = " + ALFA3.toFixed(3);
document.getElementById("A4").innerHTML = "α4 = " + ALFA4.toFixed(3);
document.getElementById("A5").innerHTML = "α5 = " + ALFA5.toFixed(3);

document.getElementById("check").innerHTML = `${LAMBDA0} < min (${(
  (K1 / ALFA1) *
  V
).toFixed(3)}; ${((K2 / ALFA2) * V).toFixed(3)}; ${((K3 / ALFA3) * V).toFixed(
  3
)}; ${((K4 / ALFA4) * V).toFixed(3)}; ${((K5 / ALFA5) * V).toFixed(3)})`;

const BETA1 = LAMBDA1 * V;
const BETA2 = LAMBDA2 * V;
const BETA3 = LAMBDA3 * V;
const BETA4 = LAMBDA4 * V;
const BETA5 = LAMBDA5 * V;

document.getElementById("B1").innerHTML = "β1 = " + BETA1.toFixed(3);
document.getElementById("B2").innerHTML = "β2 = " + BETA2.toFixed(3);
document.getElementById("B3").innerHTML = "β3 = " + BETA3.toFixed(3);
document.getElementById("B4").innerHTML = "β4 = " + BETA4.toFixed(3);
document.getElementById("B5").innerHTML = "β5 = " + BETA5.toFixed(3);

const RO1 = BETA1 / K1;
const RO2 = BETA2 / K2;
const RO3 = BETA3 / K3;
const RO4 = BETA4 / K4;
const RO5 = BETA5 / K5;

document.getElementById("p1").innerHTML = "ρ1 = " + RO1.toFixed(3);
document.getElementById("p2").innerHTML = "ρ2 = " + RO2.toFixed(3);
document.getElementById("p3").innerHTML = "ρ3 = " + RO3.toFixed(3);
document.getElementById("p4").innerHTML = "ρ4 = " + RO4.toFixed(3);
document.getElementById("p5").innerHTML = "ρ5 = " + RO5.toFixed(3);

const PI1 = 1 - RO1;
const PI2 = 1 - RO2;
const PI3 = 1 - RO3;
const PI4 = 1 - RO4;
const PI5 = 1 - RO5;

document.getElementById("pi1").innerHTML = "π1 = " + PI1.toFixed(3);
document.getElementById("pi2").innerHTML = "π2 = " + PI2.toFixed(3);
document.getElementById("pi3").innerHTML = "π3 = " + PI3.toFixed(3);
document.getElementById("pi4").innerHTML = "π4 = " + PI4.toFixed(3);
document.getElementById("pi5").innerHTML = "π5 = " + PI5.toFixed(3);

function rFact(num) {
  if (num === 0) {
    return 1;
  } else {
    return num * rFact(num - 1);
  }
}
function findL(B, K, PI) {
  const up = Math.pow(B, K + 1);
  const add = 1 - B / K;
  const down = rFact(K) * K * Math.pow(add, 2);
  return (up / down) * PI;
}

const l1 = findL(BETA1, K1, PI1);
const l2 = findL(BETA2, K2, PI2);
const l3 = findL(BETA3, K3, PI3);
const l4 = findL(BETA4, K4, PI4);
const l5 = findL(BETA5, K5, PI5);

document.getElementById("l1").innerHTML = "l1 = " + l1.toFixed(3);
document.getElementById("l2").innerHTML = "l2 = " + l2.toFixed(3);
document.getElementById("l3").innerHTML = "l3 = " + l3.toFixed(3);
document.getElementById("l4").innerHTML = "l4 = " + l4.toFixed(3);
document.getElementById("l5").innerHTML = "l5 = " + l5.toFixed(3);

const m1 = l1 + BETA1;
const m2 = l2 + BETA2;
const m3 = l3 + BETA3;
const m4 = l4 + BETA4;
const m5 = l5 + BETA5;

document.getElementById("m1").innerHTML = "m1 = " + m1.toFixed(3);
document.getElementById("m2").innerHTML = "m2 = " + m2.toFixed(3);
document.getElementById("m3").innerHTML = "m3 = " + m3.toFixed(3);
document.getElementById("m4").innerHTML = "m4 = " + m4.toFixed(3);
document.getElementById("m5").innerHTML = "m5 = " + m5.toFixed(3);

const w1 = l1 / LAMBDA1;
const w2 = l2 / LAMBDA2;
const w3 = l3 / LAMBDA3;
const w4 = l4 / LAMBDA4;
const w5 = l5 / LAMBDA5;

document.getElementById("w1").innerHTML = "ω1 = " + w1.toFixed(3);
document.getElementById("w2").innerHTML = "ω2 = " + w2.toFixed(3);
document.getElementById("w3").innerHTML = "ω3 = " + w3.toFixed(3);
document.getElementById("w4").innerHTML = "ω4 = " + w4.toFixed(3);
document.getElementById("w5").innerHTML = "ω5 = " + w5.toFixed(3);

const u1 = m1 / LAMBDA1;
const u2 = m2 / LAMBDA2;
const u3 = m3 / LAMBDA3;
const u4 = m4 / LAMBDA4;
const u5 = m5 / LAMBDA5;

document.getElementById("u1").innerHTML = "u1 = " + u1.toFixed(3);
document.getElementById("u2").innerHTML = "u2 = " + u2.toFixed(3);
document.getElementById("u3").innerHTML = "u3 = " + u3.toFixed(3);
document.getElementById("u4").innerHTML = "u4 = " + u4.toFixed(3);
document.getElementById("u5").innerHTML = "u5 = " + u5.toFixed(3);

const L = l1 + l2 + l3 + l4 + l5;
const M = m1 + m2 + m3 + m4 + m5;
const W = ALFA1 * w1 + ALFA2 * w2 + ALFA3 * w3 + ALFA4 * w4 + ALFA5 * w5;
const U = ALFA1 * u1 + ALFA2 * u2 + ALFA3 * u3 + ALFA4 * u4 + ALFA5 * u5;

document.getElementById("L").innerHTML = "Среднее число заявок, ожидающих обслуживания в СМО. L = " + L.toFixed(3);
document.getElementById("M").innerHTML = "Среднее число заявок, пребывающих в сети. M = " + M.toFixed(3);
document.getElementById("W").innerHTML = "Среднее время ожидания заявки в сети. W = " + W.toFixed(3);
document.getElementById("U").innerHTML = "Среднее время пребывания заявок в сети вычисляем. U = " + U.toFixed(3);
