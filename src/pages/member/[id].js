import { APIRoute } from "astro";
import { Octokit } from "octokit";
import memberLists from "../../../data/members.json";

var users_data = {};

const allPosts = await import.meta.glob("../../../data/members/*.json");

for (const path in allPosts) {
  allPosts[path]().then((mod) => {
    const asd = mod.default;
    console.log(asd.user);
  });
}

for (const member of memberLists) {
  const octokit = new Octokit({ auth: import.meta.env.SECRET_GITHUB_TOKEN });
  const response = await octokit.request("GET /users/" + member, { username: member });
  const user_data = await response.data;
  users_data[member] = user_data;
}

export async function get({ params, request }) {
  const id = params.id;
  return {
    body: JSON.stringify(users_data[id]),
  };
}

export function getStaticPaths() {
  var pathList = [];

  for (const member of memberLists) {
    const path = {
      params: { id: member },
    };
    pathList.push(path);
  }
  return pathList;
}
