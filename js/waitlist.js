// רשימת המתנה
function joinWaitlist(list, email) {
  const clean = String(email).trim().toLowerCase();
  const at = clean.indexOf('@');
  const dot = clean.indexOf('.', at);
  const valid = at > 0 && dot > at + 1 && dot < clean.length - 1;
  if (!valid || list.includes(clean)) {
    return list;
  }
  return [...list, clean];
}

module.exports = { joinWaitlist };
