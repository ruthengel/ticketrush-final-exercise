const { calcRefund } = require('../js/refund');

test('refund for 1 ticket', function () { assertEq(calcRefund(1), 315); });
test('refund for 2 tickets', function () { assertEq(calcRefund(2), 630); });
