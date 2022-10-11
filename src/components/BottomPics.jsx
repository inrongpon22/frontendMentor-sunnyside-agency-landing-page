import React from 'react'
import milkbottles from '../assets/img/images/desktop/image-gallery-milkbottles.jpg'
import orange from '../assets/img/images/desktop/image-gallery-orange.jpg'
import cone from '../assets/img/images/desktop/image-gallery-cone.jpg'
import sugarcubes from '../assets/img/images/desktop/image-gallery-sugarcubes.jpg'

function BottomPics() {
  return (
    <main>
        <div className='grid grid-cols-2 lg:grid-cols-4'>
            <img src={milkbottles} alt="" />
            <img src={orange} alt="" />
            <img src={cone} alt="" />
            <img src={sugarcubes} alt="" />
        </div>
    </main>
  )
}

export default BottomPics