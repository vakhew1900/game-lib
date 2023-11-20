export const themeChanged = new CustomEvent('themeChanged')


export function on(eventName, callback) {
    document.addEventListener(eventName, (event) => {
      callback(event.detail);
    });
  }
  