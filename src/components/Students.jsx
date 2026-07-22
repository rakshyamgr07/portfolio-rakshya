import React from 'react'
import StudentCard from './StudentCard'

function Students() {
  return (
    <div>
      <StudentCard name="Rakshya" address="KTM" faculty="BE.IT" />
      <StudentCard name="Ram" address="Pokhara" faculty="BCA" />
      <StudentCard name="Sita" address="Butwal" faculty="BIM" />
    </div>
  )
}

export default Students