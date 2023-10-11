const API_URL = "https://api.github.com/users/";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

getUser("PhilipHerweling");

async function getUser(username) {
    const resp = await fetch(API_URL + username);
    const respData = await resp.json();
    createUserCard(respData);
    getRepos(username);
    //console.log(respData);
}

async function getRepos(username) {
  const resp = await fetch(API_URL + username + "/repos");
  const respData = await resp.json();
  addReposToCard(respData);
  console.log(respData);
}

function addReposToCard(repos) {
  const reposEl = document.getElementById("repos");
  repos.forEach((repo) => {
          const repoEl = document.createElement("a");
          const repoE2 = document.createElement("b");
          repoEl.classList.add("repo");
          repoEl.href = repo.html_url;
          repoEl.target = "_blank";
          repoEl.innerText = repo.name;
          repoE2.innerText = repo.description;
          reposEl.appendChild(repoEl);
          reposEl.appendChild(repoE2);
      });
}

function createUserCard(user) {
  const cardHTML = `
  <div class ="cards">
    <div class="card">
      <div>
        <img class="avatar" src="${user.avatar_url}" alt="${user.name}" />
      </div>
        <div class="user-info">
          <h3>Name</h3> <p>${user.name}</p><br>
          <h3>Username</h3> <p>${user.login}</p><br>
          <h3>Email</h3> <p>${user.email}</p><br>
          <h3>Location</h3> <p>${user.location}</p><br>
          <h3>Number of Gists</h3> <p>${user.public_gists}</p>
        </div>
      </div>

      <div class="card2">
        <div id="repos">

      </div>
    </div>
  `;

  main.innerHTML = cardHTML;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = search.value;
  if (user) {
      getUser(user);
      search.value = "";
  }
});
