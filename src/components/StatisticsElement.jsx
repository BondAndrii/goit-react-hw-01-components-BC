export default function StatisticsElement(props) {
    return ( <li class="item" id={props.id}>      
                <span class="label">{props.label}</span>
                <span class="percentage">{props.percentage}</span>                
            </li> 
            )
}
// export default function StatisticsElement(props) {
//     return (<ul class="stat-list">
//         {props.map( prop =>
//             <li class="item" id={prop.id}>
//                 <span class="label">{prop.label}</span>
//                 <span class="percentage">{prop.percentage}</span>
//                 Лішка {prop.id}
//             </li>)}
//             </ul>
//             )
// }
