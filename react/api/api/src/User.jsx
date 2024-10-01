import React from 'react'

function User({data}) {
  return (
    <div>
          <h2>Added Items:</h2>
      {/* Loop through the added items */}
      {/* Loop through the added items */}
      {data.map((item, index) => (
        <div key={index}>
          <p><strong>Title:</strong> {item.title}</p>
          <p><strong>Body:</strong> {item.body}</p>
        </div>
      ))}
    </div>
  )
}

export default User