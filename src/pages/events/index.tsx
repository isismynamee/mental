import { Homepage } from '@/components/moleculs/Homepage';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick // needed for dayClick
import React, { useCallback, useState } from 'react'
import { ModalAddEvents } from '@/components/moleculs/Events/ModalAddEvents';

export default function Events () {
  const [weekendsVisible, setweekendsVisible] = useState<boolean>(false)
  const [openAddModal, setOpenAddModal] = useState<boolean>(false)
  const [changeForm, setChangeForm] = useState<String>('')

  const changeInput = useCallback(
    (e: React.FormEvent<HTMLInputElement>): void => {
      const {name, value} = e.currentTarget

      setChangeForm((prev) => ({
        ...prev,
        [name]: value
      }))
    }, [setChangeForm]
  )

  const handleDateSelect = useCallback(
    () => {

    }, []
  )
  const renderEventContent = useCallback(
    () => {

    }, []
  )
  const handleEventClick = useCallback(
    () => {
    }, []
  )
  const handleEvents = useCallback(
    () => {

    }, []
  )
  const handleDateClick = useCallback(
    () => {
      setOpenAddModal(!openAddModal)
    }, [openAddModal]
  )

  const submitInput = useCallback(
    () => {
      console.log(changeForm, "changing")
    }, [changeForm]
  )

  return (
    <Homepage>
      <div className='m-4'>
        <div className='mx-[5%] w-full'>
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
            initialView='dayGridMonth'
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={weekendsVisible}
            // initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
            select={handleDateSelect}
            eventContent={renderEventContent} // custom render function
            eventClick={handleEventClick}
            eventsSet={handleEvents}
            dateClick={handleDateClick}
          />
        </div>
      </div>
      <ModalAddEvents 
        submit={submitInput}
        onChange={changeInput}
        setIsOpen={setOpenAddModal}
        isOpen={openAddModal}
      />
    </Homepage>
  )
}
