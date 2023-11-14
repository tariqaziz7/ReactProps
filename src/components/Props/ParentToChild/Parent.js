import React, { useState } from 'react'
import Child from './Child'

export default function Parent() {
    const [parentData, setParentData] = useState('Hello Child !!!')
    const [testData, setTestData] = useState('Hello Test');
  return (
    <>
            <div>Parent</div>
            <Child  parentData={parentData} test={testData}/>
    </>
  )
}
