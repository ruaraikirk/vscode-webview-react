import * as React from 'react';
 
const Button = (props: any) => {
    return <div
        style={{
            borderStyle: "solid",
            borderWidth: 5,
            display: "flex",
            flexDirection: "column",
            height: 150,
            textAlign: "center",
            width:150
        }}
    >
        <p style={{verticalAlign: "middle"}}>{props.name}</p>
    </div>
}
 
export default Button;