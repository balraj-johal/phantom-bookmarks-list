/** gets saved links from browser storage
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

/** saves links to browser storage
 * @name updateSavedLinks
 * @param {Array} links links to save to browser storage
 */
const updateSavedLinks = (links) => {
  const newLinks = JSON.stringify(links);
  window.localStorage.setItem("bookmarkedLinks", newLinks);
}

/** 
 * @name validateURL
 * @param {String} url 
 */
const validateURL = (url) => {
  let error;
  if (typeof url !== "string") error = "not string";
  if (url.length < 1) error = "Please enter a valid URL.";
  // if link already present
  // if url unreachable
  
  return error;
}

export { getSavedLinks, updateSavedLinks, validateURL };