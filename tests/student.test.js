const { calcTotal, maxTickets } = require('../js/pricing');

test('student discount: 2 tickets', function () { assertEq(calcTotal(2, false, true), 619); });
test('no discount for regular price', function () { assertEq(calcTotal(2, false, false), 724); });
test('member discount: 2 tickets', function () { assertEq(calcTotal(2, true, false), 584); });
test('member and student: larger discount only', function () { assertEq(calcTotal(2, true, true), 584); });
test('member may buy up to 6', function () { assertEq(maxTickets(true), 6); });
test('member over quota returns null', function () { assertEq(calcTotal(7, true, false), null); });
