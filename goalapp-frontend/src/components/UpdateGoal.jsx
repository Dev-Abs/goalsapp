import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'


const UpdateGoal = (props) => {
    const [description, setDescription] = useState('')
    const [title, setTitle] = useState('')
    const navigate = useNavigate();
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      let token = localStorage.getItem('token')

      if(!token){
        navigate('/')
      }

      // update goal

      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/goals/${props.id}`,{
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          text: title
        })
      })

      if (response.status === 200){
        alert('Goal Updated')
      }
    }
    // const [id,setID] = React.useState(props.goal.id)
    // const id = props.goal.id
    // const onSubmit = (e) => {
    //     e.preventDefault()
    //     if (!title || !description) {
    //         alert('Please enter goal and description')
    //         return
    //     }
    //     props.updateGoal({id, title, description })
    //     setTitle('')
    //     setDescription('')
    // }
  return (
      <div className="flex justify-center items-center h-screen bg-gray-200">
        <div className="bg-white p-16 rounded shadow-2xl w-full md:w-2/3 lg:w-1/2">
          <h2 className="text-3xl font-bold mb-10 text-gray-800">Update Goal</h2>
          <form action="" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="goal" className="block text-gray-800 font-bold">
                Goal
              </label>
              <input
                type="text"
                id="goal"
                name="goal"
                value={title}
                placeholder={props.goal.title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border-2 border-gray-300 p-3 rounded outline-none focus:border-purple-500"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="description"
                className="block text-gray-800 font-bold"
              >
                Description
              </label>
              <input
                type="text"
                id="description"
                name="description"
                value={description}
                placeholder= {props.goal.description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full border-2 border-gray-300 p-3 rounded outline-none focus:border-purple-500"
              />
            </div>
            {/* <div className="mb-6">
                        <label htmlFor="dueDate" className="block text-gray-800 font-bold">Due Date</label>
                        <input type="date" id="dueDate" name="dueDate" placeholder="Due Date" className="w-full border-2 border-gray-300 p-3 rounded outline-none focus:border-purple-500" />
                    </div> */}
            <button
              type="submit"
              className="w-full py-3 bg-purple-600 text-white rounded hover:bg-purple-500"
            >
              Update Goal
            </button>
          </form>
        </div>
      </div>
  )
}

export default UpdateGoal
