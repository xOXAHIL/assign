function highlightHTMLContent(htmlContent, plainText, plainTextPositions) {
    let highlightedContent = htmlContent;
  
    plainTextPositions.forEach(({ start, end }) => {
      const startTag = '<mark>';
      const endTag = '</mark>';
      
      const plainTextStart = plainText.slice(0, start);
      const plainTextEnd = plainText.slice(0, end);
      const htmlStart = highlightedContent.indexOf(plainTextStart);
      const htmlEnd = highlightedContent.indexOf(plainTextEnd) + plainTextEnd.length;
  
      highlightedContent = highlightedContent.slice(0, htmlStart) + startTag +
                           highlightedContent.slice(htmlStart, htmlEnd) + endTag +
                           highlightedContent.slice(htmlEnd);
    });
  
    return highlightedContent;
  }
  