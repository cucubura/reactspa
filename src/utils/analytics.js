export function pushPageView(pageName, pageCategory) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "page_view",
    page: pageName,
    pageCategory: pageCategory,
    timestamp: new Date().toISOString()
  });
  console.log("dataLayer page_view:", pageName, pageCategory);
}

export function pushEvent(eventName, details = {}) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    ...details,
    timestamp: new Date().toISOString()
  });
  console.log("dataLayer event:", eventName, details);
}
