import React from "react";


export function Input({type,classe,placeholder,value,onChange}){
    return(
        <input
        onChange={onChange}
        value={value}
        type={type}
        class={classe}
        placeholder={placeholder}
      />
    )
}