import App from './App.svelte';

const appSelector = document.querySelector('#app');

const app = new App({
  target: appSelector as HTMLElement,
});

export default app;
