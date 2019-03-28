// import {transition,trigger,style,state, animate,query,keyframes,animateChild,group} from '@angular/animations';


// export const fader = trigger('routeAnimations',[
//     transition('* <=> *',[
//         query(':enter, :leave',  [
//             style({
//                         position:'absolute',
//                         left:0,
//                         width:'100%',
//                         opacity:0,
//                         transform: 'scale(0) tranlateY(100%)'
//             }),
//         ]),
//         group([
//             query(':enter',[
//                 animate('2000ms ease',keyframes([
//                     style({transform:'scale(0) translateX(100%)',offset:0}),
//                     style({transform:'',offset:0.3})

//                 ]))
//             ])
//         ])
//     ])
// ])