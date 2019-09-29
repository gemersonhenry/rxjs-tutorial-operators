const { from, interval } = Rx;
const { delay, map, zip } = RxOperators;
 
from([1, 2, 3, 4])
	.pipe(
  	zip(
      interval(1000),
      (a,b) => a
    )
	)

################################################

const { from, interval, of } = Rx;
const { delay, map, zip, mapTo } = RxOperators;
 
of(1, 2, 3, 4, 5, 6).pipe(
  	zip(
      interval(1000),
      (a,b) => a
    )
	)