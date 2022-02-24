import { Link } from "react-router-dom"

export const PageNotFound = () => {
  return (
    <div className="not-found">PageNotFound
    <h2>Sorry</h2>
    <p>Page can not be found</p>
    <Link to="/">Back to homepage</Link>
    </div>
  )
}

export default PageNotFound
