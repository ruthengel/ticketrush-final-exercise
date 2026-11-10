// TicketRush pricing
const TICKET_PRICE = 350;        // ILS per ticket
const SERVICE_FEE = 12;          // ILS service fee per ticket, never discounted
const MAX_TICKETS = 8;           // max tickets per order (regular customer)
const MEMBER_MAX_TICKETS = 4;    // max tickets per order (club member)
const MEMBER_DISCOUNT = 0.2;     // club member: 20% off ticket price
const STUDENT_DISCOUNT = 0.15;   // student promo: 15% off ticket price

function maxTickets(isMember) {
  return isMember ? MEMBER_MAX_TICKETS : MAX_TICKETS;
}

function calcTotal(qty, isMember, isStudent) {
  qty = Number(qty);
  if (!Number.isInteger(qty) || qty < 1 || qty > maxTickets(isMember)) {
    return null;
  }
  // Discounts do not stack: the larger one applies
  let discount = 0;
  if (isMember) discount = Math.max(discount, MEMBER_DISCOUNT);
  if (isStudent) discount = Math.max(discount, STUDENT_DISCOUNT);
  const price = TICKET_PRICE * (1 - discount);
  return qty * (price + SERVICE_FEE);
}

if (typeof module !== 'undefined') {
  module.exports = { TICKET_PRICE, SERVICE_FEE, MAX_TICKETS, MEMBER_MAX_TICKETS, MEMBER_DISCOUNT, STUDENT_DISCOUNT, maxTickets, calcTotal };
}