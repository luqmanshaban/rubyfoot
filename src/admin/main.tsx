import React, { FC } from 'react'
import Home from './home'
import Orders from './orders'

type Props = {
    active: Array<boolean>
}

const Main: FC<Props> = ({ active }) => {
  return (
    <div>
        { active[0] && <Home />} 
        { active[1] && <Orders />} 
    </div>
  )
}

export default Main