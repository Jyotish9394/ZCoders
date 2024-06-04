
import React from 'react'

export default function Q_A() {
  return (
    < >
      <div style={{ height: '200vh' }}>
        <div style={{ width: '100%' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}><h1>Save Problems</h1></div>
          <h3 style={{ marginLeft: '10vw' }}>Question:</h3>
          <textarea name="Question" placeholder='Enter Your Question here' id="YourQuestion" style={{ height: '30vh', width: '80vw', marginLeft: '10vw', backgroundColor: 'aliceblue', borderRadius: '6px' }} required></textarea>
          <h3 style={{ marginLeft: '10vw' }}>Answer:</h3>
          <textarea name="Question" placeholder='Enter Your Answer here' id="YourQuestion" style={{ height: '50vh', width: '80vw', marginLeft: '10vw', backgroundColor: 'aliceblue', borderRadius: '6px' }}></textarea>
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '20px'
        }}>
          <button style={{ fontSize:'1.2rem',padding: '3px 40px', backgroundColor: 'rgba(168, 169, 168,0.8)', borderRadius: '5px', marginRight: '30px' }}>Save as Public</button>
          <button style={{ fontSize:'1.2rem',padding: '3px 37px', backgroundColor: 'rgba(168, 169, 168,0.8)', borderRadius: '5px', marginLeft: '30px', marginRight: '30px' }}>Save as Private</button>
          <button style={{ fontSize:'1.2rem',padding: '3px 10px', backgroundColor: 'rgba(168, 169, 168,0.8)', borderRadius: '5px', marginLeft: '30px' }}>Ask Others to Solve</button>
        </div>
      </div>
    </>
  )
}
