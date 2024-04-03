const URL = "http://localhost:4444";

async function createPost(post) {
  console.log(post);
  fetch(`${URL}/writePost`, {
    method: "POST",
    // headers: {
    //   'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
    //   'Content-Type': 'multipart/form-data',
    // },
    body: post,
  })
    .then(response => console.log("Success:", response))
    .catch(error => console.error("Error:", error))
}
