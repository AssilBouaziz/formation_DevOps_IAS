const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files directly from the same directory as server.js
//app.use(express.static(__dirname));

const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Embedded HTML</title>
    <style>
        .container {
            margin: 40px auto;
            width: 80%;
        }
        .button {
            width: 160px;
            height: 45px;
            border-radius: 6px;
            font-size: 15px;
            margin-top: 20px;
        }
        img {
            width: 328px;
            height: 287px;
            display: block;
            margin-bottom: 20px;
        }
        hr {
            width: 400px;
            margin-left: 0;
        }
        h3 {
            display: inline-block;
        }
    </style>
</head>
<body>
    <div class='container'>
        <h1>User profile</h1>
        <img src='https://www.princeton.edu/sites/default/files/styles/1x_full_2x_half_crop/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=Bg2K7j7J' alt="user-profile">
        <span>Name: </span><h3 id='name'>Anna Smith</h3>
        <hr />
        <span>Email: </span><h3 id='email'>anna.smith@example.com</h3>
        <hr />
        <span>Interests: </span><h3 id='interests'>coding</h3>
        <hr />
        <button class='button' onclick="alert('Edit profile clicked')">Edit Profile</button>
    </div>
</body>
</html>
`;

app.get('*', (req, res) => {
    res.send(htmlContent);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
