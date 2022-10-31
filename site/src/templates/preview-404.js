/**
 *
 * Preview 404 page.
 * To reduce user confusion when new content is first saved -
 *  - If process.env.GATSBY_IS_PREVIEW is set to true, this will
 *    render in place of the standard 404.
 *
 * Page will refresh at 'x' interval.
 *
 */

import React, { useState, useEffect } from "react"

const Preview404 = () => {
  const [countDown, setCountDown] = useState(30)

  useEffect(() => {
    let countDownTimer

    if (window) {
      if (countDown > 0) {
        countDownTimer = setTimeout(() => setCountDown(countDown - 1), 1000)
      } else {
        setCountDown(0)
        window.location.reload()
      }
    }

    return () => {
      if (countDownTimer) {
        clearTimeout(countDownTimer)
      }
    }
  }, [countDown])

  return (
    <>
      <div>
        <div>
          <h2>Your preview is being generated.</h2>
          <b />

          <p>Check back soon.</p>
          <p>{`The page will refresh in ${countDown} seconds`}</p>
        </div>
      </div>
    </>
  )
}

export default Preview404
