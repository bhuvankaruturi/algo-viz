import React from 'react'

export default function Algorithm() {
    return (
        <div className="algorithm mt-5">
            <h4>Insertion Sort Algorithm</h4>
            <pre className="mt-3">
            {"for (let i = 1; i < data.length; i++) {\n"}
            {"  let key = data[i]\n"}
            {"  let j = i-1;\n"}
            {"  while (j >= 0 && data[j] > data[j+1]) {\n"}
            {"      data[j+1] = data[j];\n"}
            {"      j--;\n"}
            {"  }\n"}
            {"  data[j+1] = key;\n"}
            {"}\n"}
            </pre>
        </div>
    )
}
