import { Link } from '@inertiajs/react'
import { usePage } from '@inertiajs/react'


export default function Layout({ children }) {
  const { flash,errors } = usePage().props
  return (
    <main>
      {errors.place && <div>{errors.place}</div>}
      {
        flash.success &&
        <div className="alert alert-danger"  role="alert">
        {flash.success}
        </div>
      }
      {
        flash.error &&
        <div className="alert alert-danger"  role="alert">
        {flash.error}
        </div>
      }
      
    
      <header className='navbar navbar-expand-lg bd-navbar sticky-top bg-info-subtle' data-bs-theme="dark">
        <nav className='container-xxl bd-gutter flex-wrap flex-lg-nowrap'>
            <ul className='navbar-nav flex-row flex-wrap bd-navbar-nav'>
                <li className='nav-item col-6 col-lg-auto'><Link className='nav-link py-2 px-0 px-lg-2' href="/events/show">Events</Link></li>
                <li className='nav-item col-6 col-lg-auto'><Link className='nav-link py-2 px-0 px-lg-2' href="/events/add">Add Event</Link></li>
                <li className='nav-item col-6 col-lg-auto'><Link className='nav-link py-2 px-0 px-lg-2' href="/game">Game board</Link></li>
                <li className='nav-item col-6 col-lg-auto'><Link className='nav-link py-2 px-0 px-lg-2' href="/github-search">Github User</Link></li>
            </ul>
        </nav>
      </header>
      <article>{children}</article>
      <footer>

      </footer>
    </main>
  )
}