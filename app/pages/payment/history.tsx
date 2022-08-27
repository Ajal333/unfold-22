import React, {  } from 'react'
import HistoryCard from '../../presentation/components/HistoryCard'

const History = () => {
  return (
    <div>
        <div>
            {Array(5).fill(0).map((_,i)=>i).map(i => <HistoryCard id={String(i)} />)}
        </div>
    </div>
  )
}

export default History