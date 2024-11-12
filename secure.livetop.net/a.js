async function registerUser(username, password) {
    const url = 'https://api-3at9.onrender.com/register';

    const data = {
        username: username,
        password: password
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            const jsonResponse = await response.json();
            console.log('User registered successfully:', jsonResponse);
        } else {
            console.error('Failed to register user:', response.status, response.statusText);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}