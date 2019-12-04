import Dashboard from "./layout/dashboard";

const app = document.querySelector('#app');

const dashboard = new Dashboard();

app.appendChild(dashboard.getNode());