// ׳׳—׳™׳¨׳•׳ TicketRush
const TICKET_PRICE = 350; // ג‚× ׳׳›׳¨׳˜׳™׳¡
const SERVICE_FEE = 12;   // ג‚× ׳¢׳׳׳× ׳©׳™׳¨׳•׳× ׳׳›׳ ׳›׳¨׳˜׳™׳¡
const MAX_TICKETS = 8;    // ׳׳§׳¡׳™׳׳•׳ ׳›׳¨׳˜׳™׳¡׳™׳ ׳׳”׳–׳׳ ׳” (׳׳§׳•׳—׳” ׳¨׳’׳™׳׳”)
const MEMBER_MAX_TICKETS = 4;   // ׳׳§׳¡׳™׳׳•׳ ׳›׳¨׳˜׳™׳¡׳™׳ ׳׳”׳–׳׳ ׳” (׳—׳‘׳¨׳× ׳׳•׳¢׳“׳•׳)
const MEMBER_DISCOUNT = 0.2;    // 20% ׳”׳ ׳—׳” ׳¢׳ ׳׳—׳™׳¨ ׳”׳›׳¨׳˜׳™׳¡

function maxTickets(isMember) {
  return isMember ? MEMBER_MAX_TICKETS : MAX_TICKETS;
}

function calcTotal(qty, isMember) {
  qty = Number(qty);
  qty = Number(qty);
  if (!Number.isInteger(qty) || qty < 1 || qty > maxTickets(isMember)) {
    return null;
  }
  const price = isMember ? TICKET_PRICE * (1 - MEMBER_DISCOUNT) : TICKET_PRICE;
  return qty * (price + SERVICE_FEE);
}

if (typeof module !== 'undefined') {
  module.exports = { TICKET_PRICE, SERVICE_FEE, MAX_TICKETS, MEMBER_MAX_TICKETS, MEMBER_DISCOUNT, maxTickets, calcTotal };
}

