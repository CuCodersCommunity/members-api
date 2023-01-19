function expandMemberAPI(obj) {
  var new_obj = obj.default;
  new_obj["avatar_url"] = "https://avatars.githubusercontent.com/u/" + obj.id;
  new_obj["avatar_url_small"] = "https://avatars.githubusercontent.com/u/" + obj.id + "?s=64&v=4";
  new_obj["github_url"] = "https://github.com/" + obj.username;
  return new_obj;
}

export { expandMemberAPI };
