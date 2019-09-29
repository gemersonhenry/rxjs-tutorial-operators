const { Observable } = Rx;
const {  } = RxOperators;
 
Observable.create(observer => {
	observer.next([
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
  ])
})

############################################################

const { Observable } = Rx;
const { map, interval } = RxOperators;
 
Observable.create(observer => {
  let index = 0;
  
  const arr = [
  	{ id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
  ];
  
  const interval = setInterval(() => {
  	observer.next(arr[index].id)
    index++;
  }, 1000)
  
})

###########################################################

const { Observable } = Rx;
const { take, pluck } = RxOperators;
 
Observable.create(observer => {
  let index = 0;
  
  const arr = [
  	{ id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
  ];
  
  const interval = setInterval(() => {
  	observer.next(arr[index])
    index++;
  }, 1000)
  
}).pipe(
  take(4),
	pluck('id')
)