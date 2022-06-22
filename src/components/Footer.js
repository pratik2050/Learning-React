import React from 'react'

export default function Footer() {

  let myfooter = {
    position: "absolute",
    top: "93vh",
    width: "100%"
  }

  return (
    <div className='bg-dark text-light py-3' style={myfooter}>
      Copyright &copy; Made by Pratik
    </div>
  )
}
