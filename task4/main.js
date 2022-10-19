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
        console.log(users);
        users.forEach(user => showUserInfo(user));
    })
    .catch(err => console.log("Error: " + err));
})

// Создаёт div с информацией о пользователе
function showUserInfo(obj) {
    const userBlock = document.createElement("div");
    userBlock.classList.add("user");

    const avatarElem = document.createElement("img");
    avatarElem.style.display = "block";
    avatarElem.style.backgroundImage = obj.avatar;

    const userInfoBlock = document.createElement("div")
    userInfoBlock.classList.add("user-info");

    const userName = document.createElement("span");
    userName.innerText = `${obj.first_name} ${obj.last_name}`;
    userName.style.display = "block";
    userName.style.fontWeight = "600";
    
    const userEmail = document.createElement("span");
    userEmail.innerText = `Email: ${obj.email}`;
    userEmail.style.display = "block";

    userInfoBlock.appendChild(userName);
    userInfoBlock.appendChild(userEmail);

    userBlock.appendChild(avatarElem);
    userBlock.appendChild(userInfoBlock);

    usersSection.appendChild(userBlock);
}