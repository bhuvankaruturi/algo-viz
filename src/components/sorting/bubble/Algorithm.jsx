import React from 'react'

export default function () {
    
    return (
        <div className="mt-5">
            <h4>Bubble Sort Algorithm</h4>
            <pre className="algorithm mt-3">
            {"let swapped;\n"}
            {"do {\n"}
            {"  swapped = false;\n"}
            {"  for (let j = 0; j < data.length-1; j++) {\n"}
            {"      if (data[j] > data[j+1]) {\n"}
            {"          swapped=true;\n"}
            {"          let temp = data[j];\n"}
            {"          data[j] = data[j+1];\n"}
            {"          data[j+1] = temp;\n"}
            {"      }\n"}
            {"  }\n"}
            {"} while(swapped);\n"}
            </pre>
        </div>
    )
}
