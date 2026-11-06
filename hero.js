/* ============================================================
 * 지현 담당 메인 JS 시작 | hero.js
 * Bootstrap bundle → 기존 팀 script.js → 이 파일 순서로 연결합니다.
 * 실제 테스트/루틴/회원가입 기능은 팀 코드를 사용합니다.
 * 이 파일은 모바일 메뉴 닫기와 로그인 안내 후 #try 이동만 담당합니다.
 * ============================================================ */
(() => {
  "use strict";
  const menu = document.getElementById("raMenu");
  const loginModal = document.getElementById("raLoginModal");
  const tryButton = document.getElementById("raTryFromLogin");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  // 모바일 메뉴에서 항목을 고르면 Bootstrap 메뉴를 닫습니다.
  menu?.addEventListener("click", (event) => {
    if (!event.target.closest("a, button") || !menu.classList.contains("show")) return;
    window.bootstrap?.Collapse.getOrCreateInstance(menu, { toggle: false }).hide();
  });

  // 로그인 안내를 닫은 뒤 체험 섹션으로 이동하고 입력칸에 초점을 줍니다.
  tryButton?.addEventListener("click", () => {
    loginModal.addEventListener("hidden.bs.modal", () => {
      document.getElementById("try")?.scrollIntoView({ behavior: reduceMotion.matches ? "auto" : "smooth" });
      document.getElementById("routineInput")?.focus({ preventScroll: true });
    }, { once: true });
  });
})();

/* 지현 담당 메인 JS 끝 */
