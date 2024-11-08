import React from 'react'

function Task() {
  return (
    <div>
      <div>
        <img src="" alt="" />
        <h2>Welcome Bask {name}</h2>
        <button>Edit Profile</button>
        <button>Sign Out</button>
      </div>
      <div>
        <div>
          <input type="search" name="search" id="search" />
          <button>+</button>
        </div>
        <div>
          <h2>Task to do - {task}</h2>
          <div>
            <h4>To Study React Fundamental</h4>
            <button>clear</button>
            <button>delete</button>
          </div>
          <div>
            <h4>To Study React Fundamental</h4>
            <button>clear</button>
            <button>delete</button>
          </div>
          <div>
            <h4>To Study React Fundamental</h4>
            <button>clear</button>
            <button>delete</button>
          </div>
          <div>
            <h4>To Study React Fundamental</h4>
            <button>clear</button>
            <button>delete</button>
          </div>
        </div>
        <div>
          <h2>Done - {taksDone}</h2>
          <div>
            <h4>To Study React Fundamental</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Task