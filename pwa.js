const offlineToast = document.getElementById("offline-toast");
let toastTimer;

function showOfflineToast(message) {
  window.clearTimeout(toastTimer);
  offlineToast.textContent = message;
  offlineToast.classList.add("show");

  toastTimer = window.setTimeout(() => {
    offlineToast.classList.remove("show");
  }, 3200);
}

window.addEventListener("offline", () => {
  showOfflineToast("Нет сети — продолжаем офлайн");
});

window.addEventListener("online", () => {
  showOfflineToast("Снова онлайн");
});

const localDevelopmentHosts = new Set(["localhost", "127.0.0.1", "[::1]"]);
const isLocalDevelopment = localDevelopmentHosts.has(window.location.hostname);

if ("serviceWorker" in navigator && isLocalDevelopment) {
  navigator.serviceWorker.getRegistrations().then((registrations) => {
    registrations.forEach((registration) => registration.unregister());
  });
}

if ("serviceWorker" in navigator && !isLocalDevelopment) {
  window.addEventListener("load", async () => {
    try {
      await navigator.serviceWorker.register("./service-worker.js");
      await navigator.serviceWorker.ready;

      if (!window.sessionStorage.getItem("offline-ready-shown")) {
        showOfflineToast("Игра готова к офлайн-режиму");
        window.sessionStorage.setItem("offline-ready-shown", "true");
      }
    } catch (error) {
      console.warn("Offline mode could not be prepared.", error);
    }
  });
}
