import PropTypes from "prop-types"
import data from "./data.json";
import StatisticsElement from "./StatisticsElement";
// export default function StatisticsList({ Arr }) { 
//     return( <li>
//                 <p>Тут буде 5 лішок</p>
//             </li>
//     );
// };
// export default function StatisticsList() { 
//     return (
//         <li class="item" id={data[0].id}>
//             <StatisticsElement
//                 label={data[0].label}
//                 percentage={data[0].percentage}
//             /> Лішка {data[0].id}
//         </li>);
// };
export default function StatisticsList() { 
    return (<ul class="stat-list">
        {data.map(obj =>
            <StatisticsElement
                id={obj.id}
                label={obj.label}
                percentage={obj.percentage}
        />  )}    
              
        </ul>  
        );
};
StatisticsElement.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,  
 }
// export default function StatisticsList({ Arr }) { 
//     return(
//         <ul class="stat-list">
//             {Arr.map( a =>(
//                 <li>
//                     <StatisticsElement
//                         label={a.label}
//                         percentage={a.percentage}
//                     />
//                 </li>)
//             )}
//         </ul>);
// };

// import StatisticsElement from "./StatisticsElement"
// export default StatisticsList({ props }){
//     <ul class="stat-list">
//         {props.map(prop => 
//             <li class="item" key={prop.key}>
//                 <StatisticsElement                    
//                     label={prop.label}
//                     percentage={prop.percentage}
//                 />
//             </li>)}
//     </ul>
// } 