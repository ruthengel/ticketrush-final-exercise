# Review: noa/refund

## Verdict
Request changes - do not merge yet.

## What I ran
node tests/run.js:

format.test.js
  PASS formats a ticket price
  PASS formats an order total
pricing.test.js
  PASS two tickets cost 724
  PASS one ticket costs 362
  PASS regular customers may buy up to 8
refund.test.js
  FAIL refund for 1 ticket
      expected 315 but got 325.8
  FAIL refund for 2 tickets
      expected 630 but got 651.6

5 passed, 2 failed

## Findings
1. **js/refund.js (calcRefund): wrong formula.** The comment and spec say 90% of the ticket price, service fee not refunded. The code applies 90% to (TICKET_PRICE + SERVICE_FEE), so 1 ticket returns 325.8 instead of 315. The customer is refunded part of the service fee. Fix: `return qty * TICKET_PRICE * REFUND_RATE;`
2. **tests/refund.test.js fails against the current code.** The tests expect 315 and 630 (correct per spec), so the implementation does not match its own tests. "Works on my machine" does not hold.
3. **Refund is based on list price, not on what was paid.** Once member (20%) and student (15%) discounts are in the code, a discounted customer paid less than 350 per ticket and would be refunded more than they paid. calcRefund should take the paid ticket price, or the discount flags, as input.
4. **No input validation or rounding.** qty of 0, negative, non-integer or a string is not handled (same class of bug as the string quantity in calcTotal). Money amounts should be rounded to 2 decimals.
5. **Thin test coverage.** Only two happy-path cases. Missing: invalid quantity, discounted orders, rounding.

## Suggestion
Fix the formula (finding 1), make sure the tests pass, then add tests for discounts and invalid input before merging.
