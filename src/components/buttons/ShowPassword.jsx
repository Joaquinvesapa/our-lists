import React,{useState} from 'react'
import {EyeSlashIcon, EyeIcon} from '@heroicons/react/24/solid'
import clsx from 'clsx'
import {motion, AnimatePresence} from 'framer-motion'


export const ShowPassword = (props) => {

  const {showPsw, setShowPsw} = props

  return (
    <AnimatePresence>
      <div className='flex flex-row'>
        <motion.button 
          animate={{opacity: showPsw ? 0 : 1}}
          onClick={() => setShowPsw(true)}>
          <EyeIcon className={clsx('w-7 h-auto text-md-grey','transition-all duration-1000',
                                    showPsw ? 'hidden' : '')}/>
        </motion.button>

        <motion.button 
          animate={{opacity: showPsw ? 1 : 0}}
          onClick={() => setShowPsw(false)}>
          <EyeSlashIcon className={clsx('w-7 h-auto text-md-grey',
                        'transition-all duration-1000',
                        showPsw ? '' : 'hidden')}/>
        </motion.button>
      </div>
    </AnimatePresence>
  )
}