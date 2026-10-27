// js/refund.js – החזר כספי בביטול הזמנה.
// הלקוחה מקבלת בחזרה 90% ממחיר הכרטיס. עמלת השירות אינה מוחזרת.
const { TICKET_PRICE, SERVICE_FEE } = require('./pricing');

const REFUND_RATE = 0.9;

function calcRefund(qty) {
  return qty * (TICKET_PRICE + SERVICE_FEE) * REFUND_RATE;
}

module.exports = { calcRefund, REFUND_RATE };
