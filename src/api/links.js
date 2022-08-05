/** 
 * Gets saved links from browser storage
 * @name getSavedLinks
 * @returns {Array} links saved to browser storage
 */
const getSavedLinks = () => {
  const links = window.localStorage.getItem("bookmarkedLinks");
  if (!links) {
    window.localStorage.setItem("bookmarkedLinks", JSON.stringify([]));
    return [];
  }
  return JSON.parse(links);
}

/** 
 * Saves links to browser storage
 * @name updateSavedLinks
 * @param {Array} links links to save to browser storage
 */
const updateSavedLinks = (links) => {
  const newLinks = JSON.stringify(links);
  window.localStorage.setItem("bookmarkedLinks", newLinks);
}

/**
 * Checks if a given URL can be reached by sending HTTP requests
 * @param {String} url
 * @returns {Boolean} is URL reachable?
 */
const _isURLReachable = async (url) => {
  const headRequestOptions = {
    method: "HEAD",
    mode: "no-cors"
  }
  // const getRequestOptions = {
  //   method: "GET",
  //   mode: "no-cors"
  // }
  try {
    // send HEAD request, expecting opaque response if URL reachable
    await fetch(url, headRequestOptions);
    return true;
  } catch (error) {
    return false;
  }
}

/** 
 * @name getURLValidationError
 * @param {String} url 
 * @returns {Promise} error - rejects with relevant error if URL is invalid, 
 *                         resolves if the link has no validation errors 
 */
const getURLValidationError = url => new Promise((resolve, reject) => {
  if (typeof url !== "string") return "String entry required.";
  if (url.length < 1) return "Please enter a valid link.";
  // if link already present
  const links = JSON.parse(window.localStorage.getItem("bookmarkedLinks"));
  let linkPresent = false;
  links.forEach(link => {
    if (link.url === url) linkPresent = true;
  })
  if (linkPresent) reject("This link is already present.");
  // is link valid format
  try {
    new URL(url);
  } catch (error) {
    reject("The link is not a valid URL.");
  }
  // if url unreachable
  const isReachable = _isURLReachable(url);
  isReachable
    .then((res) => {
      if (res === true) resolve();
      reject("The link is unreachable.");
    })
    .catch((err) => {
      reject("The link is unreachable.");
    })
});

export { getSavedLinks, updateSavedLinks, getURLValidationError };