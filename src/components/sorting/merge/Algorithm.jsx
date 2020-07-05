import React from 'react'

export default function Algorithm() {
    return (
        <div className="mt-3">
            <h4>Merge Sort Algorithm</h4>
            <pre className="algorithm mt-3">
            {"mergeSort(data, 0, data.length-1);\n"}
            {"\n"}
            {"const mergeSort = (data, l, r) => {\n"}
            {"  if (l < r) {\n"}
            {"      let mid = l + (r - l)/2;\n"}
            {"      let left = mergeSort(data, l, mid);\n"}
            {"      let right = mergeSort(data, mid+1, r);\n"}
            {"      return merge(left, right);\n"}
            {"  }\n"}
            {"}\n"}

            {"const merge = (left, right) => {\n"}
            {"  let m = left.length;\n"}
            {"  let n = right.length;\n"}
            {"  let i = 0, j = 0, k = 0;\n"}
            {"  let result = [];\n"}
            {"  while (k < (m+n)) {\n"}
            {"      if (i == m) {\n"}
            {"          result[k] = right[j];\n"}
            {"          j++;\n"}
            {"      } else if (j == n) {\n"}
            {"          result[k] = left[i];\n"}
            {"          i++;\n"}
            {"      } else if (left[i] < right[j]) {\n"}
            {"          result[k] = left[i];\n"}
            {"          i++;\n"}
            {"      } else {\n"}
            {"          result[k] = right[j];\n"}
            {"          j++;\n"}
            {"      }\n"}
            {"      k++;\n"}
            {"  }\n"}
            {"  return result;\n"}
            {"}\n"}
            </pre>
        </div>
    )
}
