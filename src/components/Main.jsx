import React from 'react'
import { useGlobalContext } from './context'

const Main = () => {

  const {hello} = useGlobalContext()



  return (
    <div>
      {hello}
    </div>
  )
}

export default Main