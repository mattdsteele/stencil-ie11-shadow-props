const MyComponent = ((window as any).mycomponent =
  (window as any).mycomponent || {});
declare const Context: any;
// This establishes the default 'mode' that the components will run in according
// to stencil
const documentElement = document.documentElement;
MyComponent.mode = Context.mode = documentElement.getAttribute('mode') || 'foo';
documentElement.setAttribute('mode', MyComponent.mode);
