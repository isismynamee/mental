import { Modal } from '@/components/atoms/modal'
import {MdOutlineEmail, MdOutlineSubject, MdOutlineMessage} from 'react-icons/md'
import React from 'react'

export const ModalAddEvents = ({
    isOpen,
    setIsOpen,
    onChange,
    submit,
}: ModalAdd) => {
  return (
    <Modal
        isOpen={isOpen}
        handleClick={() => setIsOpen(!open)}
        sm=''
        xs=''
        className=''
        outsideClose
    >
        <div className='grid gap-5'>
            <div className='grid gap-5'>
                <label className='relative'>
                    <MdOutlineEmail className="w-6 h-6 cursor-pointer absolute top-3 right-3" />
                    <input onChange={onChange} type="text" className='input input-bordered' name='taskName' placeholder='Task Name' />
                </label>
                <label className='relative'>
                    <MdOutlineSubject className="w-6 h-6 cursor-pointer absolute top-3 right-3" />
                    <input onChange={onChange} type="text" className='input input-bordered' name='description' placeholder='Description' />
                </label>
                <label className='relative'>
                    <input onChange={onChange} type="datetime-local" id='date' className='input input-bordered  w-full' name='time' placeholder='Date and Time' />
                </label>
            </div>
            <div>
                <button className='btn btn-primary w-full' onClick={submit}>Add</button>
            </div>
        </div>
    </Modal>
  )
}
