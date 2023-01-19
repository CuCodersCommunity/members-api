import { APIRoute } from "astro";
import { Octokit } from "octokit";
import memberLists from "../../../data/members.json";

var users_data = {};

for (const member of memberLists) {
  const octokit = new Octokit({ auth: import.meta.env.SECRET_GITHUB_TOKEN });
  const response = await octokit.request("GET /users/" + member, { username: member });
  const user_data = await response.data;
  users_data[member] = user_data;
}

export async function get({ params, request }) {
  const id = params.id;
  console.log(users_data);
  return {
    body: JSON.stringify(users_data[id]),
  };
}

export function getStaticPaths() {
  return [{ params: { id: "manuelernestog" } }, { params: { id: "AlexCuan" } }, { params: { id: "Ragnarok22" } }];
}
