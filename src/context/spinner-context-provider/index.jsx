import classNames from 'classnames';
import { createContext, useEffect, useState } from 'react'

export const SpinnerContext = createContext({})

export default function SpinnerContextProvider(props) {
  const [show, setShow] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setShow(false)
    }, 500);
  }, [])

  const contextValue = {
    show,
    setShow
  }

  const spinnerClassNames = classNames({
    "bg-white position-fixed translate-middle": true,
    "w-100 vh-100 top-50 start-50 d-flex": true,
    "align-items-center justify-content-center": true,
    show: show,
  });

  return (
    <SpinnerContext.Provider value={contextValue}>
      <div id="spinner" className={spinnerClassNames}>
        <div
          className="spinner-border text-primary"
          role="status"
          style={{ width: "3rem", height: "3rem" }}
        />
      </div>
      {props.children}
    </SpinnerContext.Provider>
  );
}

