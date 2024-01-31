import { useState } from "react"

function MessageForm(){
    const [formData, setFormData] = useState({name:'',email:'',message:''})
    const [showForm, setShowForm] = useState(false)

    return(
        <div>
            <h1 onClick={()=>setShowForm(!showForm)}>Drop me a line!</h1>
            {showForm? 
            <form>
                <div>
                    <label className='block' htmlFor='name'>Name</label>
                    <input 
                        className="shadow border"
                        id='name'
                        type='text'
                        placeholder='Name'
                        onChange= {(e)=>setFormData({...formData, name: e.target.value})}
                        value={formData.name}
                    />
                </div>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input 
                        className="shadow border"
                        id='email'
                        type='text'
                        placeholder='Email'
                        onChange= {(e)=>setFormData({...formData, email: e.target.value})}
                        value= {formData.email}
                    />
                </div>
                <div>
                    <label htmlFor='message'>Message</label>
                    <textarea 
                        className="shadow border h-32"
                        id='message' 
                        type='text'
                        placeholder='Message...'
                        onChange= {(e)=>setFormData({...formData, message: e.target.value})}
                        value= {formData.message}
                    />
                </div>
            </form> 
            :
            null}
        </div>
    )
}

export default MessageForm