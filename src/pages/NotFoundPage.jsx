import { HOME_ROUTE } from 'config/routes'
import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div>
        <p>Error 404</p>
        <Link to={HOME_ROUTE}>Go back</Link>
        </div>
  )
}

export default NotFoundPage