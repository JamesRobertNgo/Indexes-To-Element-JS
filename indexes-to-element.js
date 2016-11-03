function previousSiblingCount(element) {
  if (!element) {
    return null;
  }
  
  if (!element.previousSibling) {
    return 0;
  }
  
  return previousSiblingCount(element.previousSibling) + 1;
}

function indexesToElement(decendantElement, ancestorElement, indexes) {
  if (!decendantElement) {
    return [];
  }
  
  ancestorElement = ancestorElement || document;
  if (decendantElement == ancestorElement) {
    return [];
  }
  
  indexes = indexesToElement(decendantElement.parentNode, ancestorElement), indexes || []);
  indexes.push(previousSiblingCount(decendantElement));
  return indexes;
}
