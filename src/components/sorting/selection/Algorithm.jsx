import React from 'react'

export default function () {
    
    return (
        <div className="algorithm mt-5">
            <h4>Selection Sort Algorithm</h4>
            <pre className="mt-3">
            {"for (let i = 0; i < data.length; i++){\n"}
            {"  let min = i;\n"}
            {"  for (let j = i+1; j < data.length; j++) {\n"}
            {"      if (data[j] < data[min]) {\n"}
            {"          min = j;\n"}
            {"      }\n"}
            {"  }\n"}
            {"  let temp = data[i];\n"}
            {"  data[i] = data[min];\n"}
            {"  data[min] = temp;\n"}
            {"}\n"}
            </pre>
        </div>
    )
}
