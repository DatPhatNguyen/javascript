const postAPI = "https://jsonplaceholder.typicode.com/posts";

// stream

fetch(postAPI)
  .then((res) => res.json()) //todo: JSON.parse : JSON -> Javascript type
  .then((posts) => {
    const htmls = posts.map((post) => {
      return `<li>
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        </li>`;
    });
    const html = htmls.join("");
    document.getElementById("post-container").innerHTML = html;
  })
  .catch((error) => console.error("Error: cannot access to API"));
