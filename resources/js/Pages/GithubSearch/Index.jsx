import Layout from '../Layout/Layout'
import { useState, useEffect } from 'react'

function Index(){

    const [user,setUser] = useState(null);
    const [userData,setUserData] = useState(null);

    function handleChange(e){
        const value = e.target.value
        setUser(value);
    }

    function sendApi(user){
        // useEffect(() => {
            fetch('https://api.github.com/users/'+user)
              .then(response => response.json())
              .then(json => setUserData(json))
              .catch(error => console.error(error));
        // }, []);
    }

    function handleSubmit(e){
        e.preventDefault()
        sendApi(user)
    }
    return(
        <>  
        <Layout>
        <h1>Github User Search</h1>
        <div className="bd-example">
            <form onSubmit={handleSubmit}>
                <div className="mb-3 col-4">
                    <label className="form-label">User name</label>
                    <input type="text" onChange={handleChange} className="form-control" value={user} id="gituser" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
        <div className="bd-example">
        {userData ? <pre>{JSON.stringify(userData, null, 2)}</pre> : 'Loading...'}
        </div>
        </Layout>
        </>
    )
}

export default Index;