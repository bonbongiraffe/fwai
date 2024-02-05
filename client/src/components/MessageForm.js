import { useState } from "react"

function MessageForm(){
    const [formData, setFormData] = useState({name:"",email:"",message:""})
    // const [showForm, setShowForm] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        // fetch("http://127.0.0.1.5000/send-email",{
        //     method:"POST",
        //     headers:{"Content-Type":"application/json"},
        //     body: JSON.stringify(formData)
        // })
    }

    return(
        <div>
            {/* <h1 onClick={()=>setShowForm(!showForm)} className="hover:underline">Drop me a line!</h1> */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label className="block" htmlFor="name">Name</label>
                    <input 
                        className="shadow border"
                        id="name"
                        type="text"
                        placeholder="Name"
                        onChange= {(e)=>setFormData({...formData, name: e.target.value})}
                        value={formData.name}
                    />
                </div>
                <div>
                    <label className="block" htmlFor="email">Email</label>
                    <input 
                        className="shadow border"
                        id="email"
                        type="text"
                        placeholder="Email"
                        onChange= {(e)=>setFormData({...formData, email: e.target.value})}
                        value= {formData.email}
                    />
                </div>
                <div>
                    <label className="block" htmlFor="message">Message</label>
                    <textarea 
                        className="shadow border h-32"
                        id="message" 
                        type="text"
                        placeholder="Message..."
                        onChange= {(e)=>setFormData({...formData, message: e.target.value})}
                        value= {formData.message}
                    />
                </div>
                <button type="submit" className="shadow bg-white hover:bg-gray-100">Send</button>
            </form> 
        </div>
    )
}

export default MessageForm