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

if ("serviceWorker" in navigator) {
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
