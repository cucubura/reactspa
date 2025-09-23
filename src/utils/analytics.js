export function pushPageView(pageName) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "spa_page_view",
    page: pageName,
    timestamp: new Date().toISOString()
  });
  console.log("SPA page_view:", pageName);
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
