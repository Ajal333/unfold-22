import React, { useState } from 'react'
import ReportModal from '../ReportModal';

const HistoryCard = ({id}:{id: string}) => {
    const [modalVisible, setModalVisible] = useState<string>("");

  return (
    <div onClick={() => setModalVisible(id)} className='flex items-center justify-between shadow-md rounded-[6px] p-4 my-2 max-w-[700px] m-auto'>
        <div className='text-left text-sm'>
            <p className='text-gray-800 text-base'>Techbyheart</p>
            <time className='text-gray-400 text-xs'>22 July 2022</time>
        </div>
        <div className='text-blue-500 text-xl font-semibold text-right'>$200</div>
        <ReportModal {...{modalVisible: modalVisible === id, setModalVisible}} />
    </div>
  )
}

export default HistoryCard