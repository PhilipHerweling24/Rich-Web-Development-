import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/observable/fromEvent';

let click = Observable.fromEvent(document, 'keydown');
let x = click.mapTo(1);
let seed = 0;
let count = x.scan((acc, one) => acc + one, seed);
count.subscribe(x => console.log(x));