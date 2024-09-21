export class DomUtil{
  static scrollIntoView(elementId: string) {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      console.log("hello")
    } else {
      console.warn(`Element with ID ${elementId} not found.`);
    }
  }
}
