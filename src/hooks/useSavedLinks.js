import { useEffect, useState } from "react";
import { getSavedLinks, updateSavedLinks } from "../api/links";

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
    })
    return requestedLink;
  };

  /** 
   * @name updateLink
   * @param {Object} updatedLink - updated link object to save
   */
  const updateLink = (updatedLink) => {
    // return [...allLinks, updatedLink];
  };

  /** 
   * @name addLink
   * @param {Object} link - link to save
   */
  const addLink = (link) => {
    // TODO: validate link here
    const updatedLinks = [...allLinks, link];
    setAllLinks(updatedLinks);
    updateSavedLinks(updatedLinks);
    return updatedLinks;
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