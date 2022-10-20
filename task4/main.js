const btn = document.querySelector("#btn");
const usersSection = document.querySelector(".users");
const API = "https://reqres.in/api/users";
let users = [];

btn.addEventListener("click", () => {
    console.log("button was clicked!");

    fetch(API)
    .then(response => { 
        if (!response.ok) {
            throw new Error('Error occurred!');
        }
        return response.json();
    })
    .then(data => {
        users = data.data;
        users.forEach(user => showUserInfo(user));
    })
    .catch(err => console.log("Error: " + err));
});

// Создаёт div с информацией о пользователе
function showUserInfo(obj) {
    console.log(obj);
    const userBlock = document.createElement("div");
    userBlock.classList.add("user");

    if (obj.avatar && /^(ftp|http|https):\/\/[^ "]+$/.test(obj.avatar)) {
        const avatarElem = document.createElement("img");
        avatarElem.classList.add("avatar-img");
        avatarElem.style.backgroundImage = `url(${obj.avatar})`;

        userBlock.appendChild(avatarElem);
    }

    const userInfoBlock = document.createElement("div")
    userInfoBlock.classList.add("user-info");

    const userName = document.createElement("span");
    userName.innerText = `${obj.first_name} ${obj.last_name}`.toUpperCase();
    userName.style.display = "block";
    userName.style.fontWeight = "600";
    
    userInfoBlock.appendChild(userName);
    
    if (obj.email && isEmailValid(obj.email)) {
        const userEmail = document.createElement("span");
        userEmail.innerText = `Email: ${obj.email}`;
        userEmail.style.display = "block";

        userInfoBlock.appendChild(userEmail);
    }
    
    userBlock.appendChild(userInfoBlock);

    usersSection.appendChild(userBlock);
};

function isEmailValid(email) {
    const emailRegexp = new RegExp(
      /^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i
    );
  
    return emailRegexp.test(email); // return true or false
};