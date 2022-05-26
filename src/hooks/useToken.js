import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('')

    useEffect(() => {
        console.log("using tokne ", user);
        const email = user?.user?.email;
        const currentUser = { email: email }
        if (email) {
            fetch(`https://sleepy-escarpment-69683.herokuapp.com/user/${email}`, {
                method: 'PUT',
                body: JSON.stringify(
                    currentUser
                ),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("data inside token", data);
                    // const accessToken = data.token;
                    // localStorage.setItem('accesstoken',accessToken)
                    // setToken(accessToken);
                }
                )
        }

    }, [user]);
    return [token]
}

export default useToken;