import React from 'react'
// import { useRouteError } from "react-router-dom";

export default function Error() {
    // const error=useRouteError();
    // console.log(error);
  return (
    <div id="error-page " className='container align-items-center text-center' >
      <h1>Oops!</h1>
      <p>Sorry, page not found.</p>
      <p>
        {/* <i> {error.statusText || error.message}</i> */}
      </p>
    </div>
  )
}
