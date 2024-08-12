import React from "react";
import "./accordion.css"

// function AccordionSection(props){
//     return(
//         <div>
//             {props.data.title}
//         </div>
//     )
// }

export default function accordion(props){
    const [activeID, setActiveId] = React.useState("")

    function toggleActiveAccordion(index){
        const currentActiveID = index === activeID ? null : index
        setActiveId(currentActiveID)
    }

    const section = props.sections.map((sec,index)=>{
        return(
            <div key={index} className="accordion-container">
                <div className="title-container" onClick={()=>toggleActiveAccordion(index)}>
                    <div>{sec.title}</div>
                    <div>{index === activeID ? '-' : '+'}</div>
                </div>
                {index === activeID && <div className="content-container">{sec.content}</div>}
            </div>
        )
    })
    return(
        <div>
            {section}
        </div>
    )
}