// /**                                                                                
//  * Returns a handler which will open a new window when activated.                  
//  */                                                                                
function getClickHandler(destination){
    if ( destination == 'localhost' ) {
        return function() {
            window.open('http://localhost:3000/', '_blank');
        };
    }

    return function(info, tab){                                                        
        const url = info.frameUrl
        var path_array = url.split('/')
        path_array
        var dest_url = path_array.join('/') 
        window.open(dest_url, '_blank');
    };                                                                               
};                                                                                 
/**                                                                                
 * Create a context menu which will only show up for URLs and images.
 */                                                                                
chrome.contextMenus.create({
  "title": "Open this iframe",
  "type": "normal",
  "contexts": ["frame"],
  "onclick": getClickHandler("text")
});


