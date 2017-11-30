import React from 'react'

const TripForm = (props) => {
    const {
        onSubmit = () => {},
        title = '',
        description = '',
        start_date = '',
        end_date ='',
        location = '',
        duration = 0
    } = props

    const handleSubmit = (event) => {
        event.preventDefault()
        const { currentTarget } = event
        const formData = new FormData(currentTarget)
        onSubmit({
        title: formData.get('title'),
        description: formData.get('description'),
        start_date: formData.get('start_date'),
        end_date: formData.get('end_date'),
        location: formData.get('location')
        })
    }

    return (
        <form className="TripForm" onSubmit={handleSubmit}>
        <div>
            <label htmlFor='title'>Title</label> <br />
            <input id='title' name='title' defaultValue={title}/>
        </div>
        <div>
            <label htmlFor='description'>Description</label> <br />
            <textarea id='description' name='description' defaultValue={description}/>
        </div>
        <div>
            <label htmlFor='start_date'>Start Date</label> <br />
            <input id='start_date' name='start_date' defaultValue={start_date}/>
        </div>
        <div>
            <label htmlFor='end_date'>End Date</label> <br />
            <input id='end_date' name='end_date' defaultValue={end_date}/>
        </div>
        <div>
            <label htmlFor='location'>Location</label> <br />
            <input id='location' name='location' defaultValue={location}/>
        </div>
        <div>
            <input type='submit' value='Submit' />
        </div>
        </form>
    )
}

export default TripForm