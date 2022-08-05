import { useEffect, useState } from "react";
import { getSavedLinks, updateSavedLinks, getURLValidationError } from "../api/links";

const useSavedLinks = (pageNumber, pageLength) => {
  const [allLinks, setAllLinks] = useState([]);
  const [paginatedLinks, setPaginatedLinks] = useState([]);
  const [noPages, setNoPages] = useState(1);

  // get saved links
  useEffect(() => {
    setAllLinks(getSavedLinks());
  }, []);

  // update paginated links
  useEffect(() => {
    if (pageNumber) {
      const startIndex = pageLength * pageNumber;
      setPaginatedLinks(
        allLinks.slice(startIndex, startIndex + pageLength)
      );
    } else {
      setPaginatedLinks(allLinks.slice(0, pageLength));
    }
    setNoPages(Math.floor(allLinks.length / pageLength) + 1);
  }, [pageNumber, pageLength, allLinks]);

  /** 
   * @name getLinkByURL
   * @param {String} url - unique link url
   * @returns {Object} link
   */
  const getLinkByURL = (url) => {
    let requestedLink;
    allLinks.forEach(link => {
      if (link.url === url) requestedLink = link;
    });
    return requestedLink;
  };

  /** 
   * @name updateLink
   * @param {Object} updatedLink - updated link object to save
   * @param {String} url to change link to
   */
  const updateLink = async (originalLink, updateURL) => {
    try {
      await getURLValidationError(updateURL);
      const updatedLinks = [...allLinks];
      updatedLinks.forEach(link => {
        if (link.url === originalLink.url) {
          link.url = updateURL;
        }
      })
      setAllLinks(updatedLinks);
      updateSavedLinks(updatedLinks);
      return;
    } catch (error) {
      return error;
    }
  };

  /** 
   * @name addLink
   * @param {Object} link - link to save
   * @returns validation error
   */
  const addLink = async (link) => {
    try {
      await getURLValidationError(link.url);
      const updatedLinks = [...allLinks, link];
      setAllLinks(updatedLinks);
      updateSavedLinks(updatedLinks);
      return;
    } catch (error) {
      return error;
    }
  };

  /** 
   * @name deleteLink
   * @param {Object} linkToDelete
   */
  const deleteLink = (linkToDelete) => {
    let deletionIndex;
    let updatedLinks = [...allLinks];
    updatedLinks.forEach((link, index) => {
      if (link.url === linkToDelete.url) deletionIndex = index;
    })
    updatedLinks.splice(deletionIndex, 1);
    setAllLinks(updatedLinks);
    updateSavedLinks(updatedLinks);
  };

  return { 
    paginatedLinks,
    noPages,
    getLinkByURL, 
    updateLink, 
    addLink, 
    deleteLink 
  };
}

export default useSavedLinks;