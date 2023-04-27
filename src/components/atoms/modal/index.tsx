import { ModalInterface } from '@/utils/interface/ModalInterface'
import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'

export const Modal = ({
    isOpen,
    handleClick,
    children,
    outsideClose = true,
    className,
    xs,
    sm
}: ModalInterface) => {
  return (
    <>
        <Transition show={isOpen} as={Fragment}>
            <Dialog as="div" className={`fixed inset-0 z-40 overflow-y-auto`} onClose={()=> outsideClose && handleClick()} >
                <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />
                <div className="min-h-screen flex items-center justify-center px-4 text-center">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-in duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-out duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0" />
                    </Transition.Child>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-in duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-out duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <div
                            className={`${className} inline-block xs:w-${xs} sm:w-${sm} relative p-4 px-8 my-3 text-left align-middle transition-all transform bg-white shadow-xl rounded-xl`}
                        >
                            {children}
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    </>
  )
}
