import { useState } from 'react'
import { router,usePage } from '@inertiajs/react'
import Layout from "../Layout/Layout";


export default function Edit({event}) {
  
  const { errors } = usePage().props

  const [values, setValues] = useState({
    id: event.id,
    name: event.name,
    place: event.place,
    date: event.date,
  })

  function handleChange(e) {
    const key = e.target.id;
    const value = e.target.value
    setValues(values => ({
        ...values,
        [key]: value,
    }))
  }
  


  function handleSubmit(e) {
    e.preventDefault()
    router.post('/events/update', values)
  }

  let index = 1
  
  return (
    <Layout>
        <form onSubmit={handleSubmit}>
      
        <div className="mb-3" key={index}>
            <label className="form-label" htmlFor="name">Event name:</label>
            <input className="form-control" id="name" value={values.name} onChange={handleChange} />
            {errors.name && <p className='text-danger'>{errors.name}</p>}
        </div>
        <div className="mb-3" key={++index}>
            <label className="form-label" htmlFor="place">Event place:</label>
            <input className="form-control" id="place" value={values.place} onChange={handleChange} />
            {errors.place && <p className='text-danger'>{errors.place}</p>}
        </div>
        <div className="mb-3" key={++index}>
            <label className="form-label" htmlFor="date">Event date:</label>
            <input className="form-control" id="date" value={values.date} onChange={handleChange} />
            <p className='text-info fst-italic'>* Date format : YYYY-MM-DD</p>
            {errors.date && <p className='text-danger'>{errors.date}</p>}
        </div>

        <button className='btn btn-primary' type="submit">Submit</button>
        </form>
    </Layout>
  )
}