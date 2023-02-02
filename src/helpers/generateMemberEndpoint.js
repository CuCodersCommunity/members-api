import { getRemoteFileData } from "./getRemoteFile";
import { backend_url } from "../config.json";

async function generateMemberEndpoint(githubMemberData) {
  var profileData = {
    username: githubMemberData.login,
    id: githubMemberData.id,
    type: githubMemberData.type,
    name: "@" + githubMemberData.login,
    avatar_url: "https://avatars.githubusercontent.com/u/" + githubMemberData.id,
    avatar_url_small: "https://avatars.githubusercontent.com/u/" + githubMemberData.id + "?s=64&v=4",
    avatar_url_medium: "https://avatars.githubusercontent.com/u/" + githubMemberData.id + "?s=128&v=4",
    github_url: "https://github.com/" + githubMemberData.login,
    categories: [],
    repository_branch_name: "main"
  };
  const data = await getRemoteFileData(
    `https://raw.githubusercontent.com/${githubMemberData.login}/${githubMemberData.login}/main/cucoders_data/profile-data.json`,
    "json"
  );

  if (data) {
    if (data.name) {
      profileData.name = data.name;
    }
    profileData.company = data.company;
    profileData.web = data.web;
    profileData.location = data.location;
    profileData.email = data.email;
    profileData.hireable = data.hireable;
    profileData.bio = data.bio;
    profileData.twitter_username = data.twitter_username;
    profileData.headline = data.headline;
    profileData.categories = data.categories;
    profileData.telegram_username = data.telegram_username;
    profileData.linkedin_username = data.linkedin_username;
    profileData.repository_branch_name = data.repository_branch_name;
  } else {
    profileData = await getGitHubUserData(profileData);
  }

  return profileData;
}

async function getGitHubUserData(profileData) {
  const url = backend_url + "api/members/get-member?username=" + profileData.username;

  const respose = await fetch(url, { method: "GET" });
  const data = await respose.json();

  if (!data) {
    return profileData;
  }

  if (data.name) {
    profileData.name = data.name;
  }
  profileData.company = data.company;
  profileData.web = data.blog;
  profileData.location = data.location;
  profileData.email = data.email;
  profileData.hireable = data.hireable;
  profileData.bio = data.bio;
  profileData.twitter_username = data.twitter_username;

  return profileData;
}

export { generateMemberEndpoint };
