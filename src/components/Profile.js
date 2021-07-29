import React, { useState } from 'react'
import DisplayTable from './DisplayTable';

const Profile = () => {
    const [data, setData] = useState({});
    const [username, setUsername] = useState("");
    const [repositories, setRepositories] = useState([]);
    const onChangeHandler = e => {
        setUsername(e.target.value);
    };

    const submitHandler = async e => {
        e.preventDefault();

        const profile = await fetch(`http://api.github.com/users/${username}`);
        const profilejson = await profile.json();
        const repositories = await fetch(profilejson.repos_url);
        const repoJson = await repositories.json();
        console.log(repoJson);
        //   console.log(profilejson);
        if (profilejson) {
            setData(profilejson);
            setRepositories(repoJson);
        }

    };
    return (
        <>
            <div className ="sty" style={{ padding: 20 }}>
                <div className="ui search">
                    <div className="ui icon input">
                        <i className="search icon">
                        </i>
                        <input
                            className="prompt"
                            placeholder="Search Username here...."
                            type="text" value={username} onChange={onChangeHandler} />
                    </div>
                    <button className="ui primary button" type ="button" onClick={submitHandler} >
                        <i className="github icon"></i>
                        Search
                    </button>
                    <DisplayTable data = {data} repositories = {repositories}/>
            </div>
        </div>
        </>
    );
};
export default Profile