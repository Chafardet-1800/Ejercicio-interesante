import React, { useEffect, useState } from 'react'

const Card = ({user}) => {

  return (
    <div className="Card">
    <img src={user.picture?.large} alt="Picture" />
    <h2>{`${user.name?.first} ${user.name?.last}`}</h2>
    <ul>
      <li><b>Ciudad: </b> {`${user.location?.city}, ${user.location?.country}`}</li>
      <li><b>Email: </b>{user.email}</li>
      <li><b>Edad: </b>{user.registered.age}</li>
      <li><b>Telefono: </b>{user.cell}</li>

    </ul>
    {/* <button onClick={nextUser}> Next </button> */}
  </div>
  )
}

export default Card