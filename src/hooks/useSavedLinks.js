import { useEffect, useState } from "react";
import { getSavedLinks, updateSavedLinks } from "../api/links";

const DEFAULT_PAGE_LENGTH = 20;

const useSavedLinks = (pageNumber, pageLength = DEFAULT_PAGE_LENGTH) => {
  const [allLinks, setAllLinks] = useState([]);
  const [paginatedLinks, setPaginatedLinks] = useState([]);

  // get saved links
  useEffect(() => {
    setAllLinks(getSavedLinks());
  }, []);

  // update paginated links
  useEffect(() => {
    if (pageNumber) {
      setPaginatedLinks(
        allLinks.slice(pageLength * pageNumber, pageLength)
      );
    } else {
      setPaginatedLinks(
        allLinks.slice(0, pageLength)
      );
    }
  }, [pageNumber, pageLength, allLinks]);

  /** 
   * @name getLinkByID
   * @param {String} id - unique link id
   * @returns {Object} link
   */
  const getLinkByID = (id) => {
    let requestedLink;
    allLinks.forEach(link => {
      if (link.id === id) requestedLink = link;
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
   * @name addLink
   * @param {Object} linkToDelete
   */
  const deleteLink = (linkToDelete) => {
    let deletionIndex;
    allLinks.forEach((link, index) => {
      if (link.id === linkToDelete.id) deletionIndex = index;
    })
    const updatedLinks = allLinks.slice(deletionIndex, 1);
    setAllLinks(updatedLinks);
    updateSavedLinks(updatedLinks);
  };

  return { 
    paginatedLinks,
    getLinkByID, 
    updateLink, 
    addLink, 
    deleteLink 
  };
}

export default useSavedLinks;