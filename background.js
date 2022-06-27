chrome.runtime.onInstalled.addListener(() => {                                                                  
    chrome.contextMenus.create({
        "id": 'iframe-getter',
        "title": "Open this iframe",
        "contexts": ["frame"],
    });
});
chrome.contextMenus.onClicked.addListener((OnClickData)=>{
    console.log('yoohoo')
    let url = OnClickData.frameUrl
    chrome.tabs.create({ "url": url });
})



