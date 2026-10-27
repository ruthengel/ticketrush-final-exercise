// מחירון TicketRush
const TICKET_PRICE = 350; // ₪ לכרטיס
const SERVICE_FEE = 12;   // ₪ עמלת שירות לכל כרטיס
const MAX_TICKETS = 8;    // מקסימום כרטיסים להזמנה
const STUDENT_DISCOUNT = 0.15; // מבצע סטודנטיות: 15% על מחיר הכרטיס

function maxTickets() {
  return MAX_TICKETS;
}

function calcTotal(qty, isStudent) {
  const ticket = isStudent ? TICKET_PRICE * (1 - STUDENT_DISCOUNT) : TICKET_PRICE;
  return qty * (ticket + SERVICE_FEE);
}

if (typeof module !== 'undefined') {
  module.exports = { TICKET_PRICE, SERVICE_FEE, MAX_TICKETS, STUDENT_DISCOUNT, maxTickets, calcTotal };
}
