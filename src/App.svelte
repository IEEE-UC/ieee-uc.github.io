<script>
  import Home from "./lib/Home.svelte";
  import Officers from "./lib/Officers.svelte";
  import Calendar from "./lib/Calendar.svelte";
  import Magazine from "./lib/Magazine.svelte";
  import Contact from "./lib/Contact.svelte";
  import { onMount } from "svelte";

  let currentRoute = "/";
  let navActive = false;

  function navigate(path) {
    window.history.pushState({}, "", path);
    currentRoute = path;
  }

  onMount(() => {
    const updateRoute = () => {
      currentRoute = window.location.pathname;
    };
    window.addEventListener("popstate", updateRoute);
    updateRoute();
    return () => window.removeEventListener("popstate", updateRoute);
  });
</script>

<!-- Hamburger trigger OUTSIDE nav so it's always visible -->
<button
  class="nav__trigger {navActive ? 'nav__trigger--active' : ''}"
  aria-label="Toggle navigation"
  on:click={() => (navActive = !navActive)}
>
  <span class="nav__bar"></span>
  <span class="nav__bar"></span>
  <span class="nav__bar"></span>
</button>
<!-- Mobile nav links -->
<nav class="nav {navActive ? 'nav--active' : ''}">
  <ul class="nav__list">
    <li class="nav__item">
      <a
        class="nav__link {currentRoute === '/' ? 'active' : ''}"
        href="/"
        on:click|preventDefault={() => {
          navigate("/");
          navActive = false;
        }}>Home</a
      >
    </li>
    <li class="nav__item">
      <a
        class="nav__link {currentRoute === '/officers' ? 'active' : ''}"
        href="/officers"
        on:click|preventDefault={() => {
          navigate("/officers");
          navActive = false;
        }}>Officers</a
      >
    </li>
    <li class="nav__item">
      <a
        class="nav__link {currentRoute === '/magazine' ? 'active' : ''}"
        href="/magazine"
        on:click|preventDefault={() => {
          navigate("/magazine");
          navActive = false;
        }}>Student Magazine</a
      >
    </li>
    <li class="nav__item">
      <a
        class="nav__link {currentRoute === '/calendar' ? 'active' : ''}"
        href="/calendar"
        on:click|preventDefault={() => {
          navigate("/calendar");
          navActive = false;
        }}>Calendar</a
      >
    </li>
    <li class="nav__item">
      <a
        class="nav__link {currentRoute === '/contact' ? 'active' : ''}"
        href="/contact"
        on:click|preventDefault={() => {
          navigate("/contact");
          navActive = false;
        }}>Contact Us</a
      >
    </li>
  </ul>
</nav>
<!-- Desktop nav links -->
<nav class="desktop-nav">
  <a
    class="nav-link {currentRoute === '/' ? 'active' : ''}"
    href="/"
    on:click|preventDefault={() => navigate("/")}>Home</a
  >
  <a
    class="nav-link {currentRoute === '/officers' ? 'active' : ''}"
    href="/officers"
    on:click|preventDefault={() => navigate("/officers")}>Officers</a
  >
  <a
    class="nav-link {currentRoute === '/magazine' ? 'active' : ''}"
    href="/magazine"
    on:click|preventDefault={() => navigate("/magazine")}
    >IEEE Student Magazine</a
  >
  <a
    class="nav-link {currentRoute === '/calendar' ? 'active' : ''}"
    href="/calendar"
    on:click|preventDefault={() => navigate("/calendar")}>Calendar</a
  >
  <a
    class="nav-link {currentRoute === '/contact' ? 'active' : ''}"
    href="/contact"
    on:click|preventDefault={() => navigate("/contact")}>Contact Us</a
  >
</nav>

<div class="join-container">
  <button
    class="join-button"
    on:click={() =>
      (window.location.href = "https://campuslink.uc.edu/organization/ieee")}
    >Join the Organization</button
  >
</div>

<div class="after-nav"></div>

{#if currentRoute === "/"}
  <Home />
{:else if currentRoute === "/officers"}
  <Officers />
{:else if currentRoute === "/calendar"}
  <Calendar />
{:else if currentRoute === "/magazine"}
  <Magazine />
{:else if currentRoute === "/contact"}
  <Contact />
{:else}
  <h2 style="text-align:center; margin-top:3rem;">404 - Page Not Found</h2>
{/if}

<style>
  /* Remove default nav styles for mobile */
  nav {
    all: unset;
  }
  .nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.85);
    z-index: 1000;
    transform: translateX(-100%);
    transition: transform 0.4s cubic-bezier(0.77, 0.2, 0.05, 1);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 5.5rem;
  }
  .nav--active.nav {
    transform: translateX(0);
  }
  .nav__trigger {
    position: fixed;
    top: 1.5rem;
    left: 1.5rem;
    right: auto;
    width: 3.5rem;
    height: 3.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: none;
    border: none;
    z-index: 2000;
    cursor: pointer;
    border-radius: 1rem;
  }
  .nav__bar {
    display: block;
    width: 28px;
    height: 4px;
    margin: 3px 0;
    background: #222; /* black by default */
    border-radius: 2px;
    transition:
      all 0.4s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.4s;
    opacity: 1;
  }
  .nav__trigger--active .nav__bar {
    background: #fff; /* white when menu is open */
  }
  .nav__trigger--active .nav__bar:nth-child(1) {
    transform: rotate(45deg) translate(7px, 7px);
  }
  .nav__trigger--active .nav__bar:nth-child(2) {
    opacity: 0;
  }
  .nav__trigger--active .nav__bar:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -7px);
  }
  .nav__list {
    list-style: none;
    padding: 0;
    margin: 0 auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
  }
  .nav__item {
    width: 100%;
  }
  .nav__link {
    display: block;
    font-size: 2rem;
    color: #fff;
    text-decoration: none;
    opacity: 0;
    transition:
      opacity 0.5s,
      color 0.2s;
    transition-delay: 0.5s;
    padding: 0.5rem 2rem;
    margin: 0 1.5rem;
    width: auto;
    background: none;
    border: none;
    text-align: left;
    cursor: pointer;
    border-radius: 4px;
    font-weight: 400; /* Not bold for mobile too */
    box-sizing: border-box;
  }
  .nav--active .nav__link {
    opacity: 1;
  }
  .nav__link.active {
    text-decoration: underline;
    color: #fff;
    background: rgba(255, 255, 255, 0.08);
  }
  .nav__link:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.15);
  }
  .nav {
    transform: translateX(-100%);
    width: 100%;
    height: 100%;
  }
  .nav__link {
    opacity: 0;
    transition-delay: 500ms;
  }
  .nav--active .nav__link {
    opacity: 1;
  }
  .nav--active {
    transition: all 300ms ease-in-out;
    transform: translateX(0);
  }
  .join-container {
    position: fixed;
    top: 0;
    right: 0;
    justify-content: right;
    margin: 1.5rem;
    z-index: 1200;
  }
  .after-nav {
    height: 4.5rem;
  }
  .desktop-nav {
    display: none;
  }
  @media (min-width: 700px) {
    nav {
      padding: 2rem;
      box-sizing: border-box;
      text-align: left;
      z-index: 1100;
      display: flex !important;
      align-items: center;
      justify-content: flex-start;
      gap: 0.5rem;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      z-index: 1100;
      background: #fff;
      border-bottom: 1px solid #eee;
    }
    nav .nav-link {
      display: inline-block;
      margin-right: 1.5rem;
      font-size: 1.1rem;
      color: #222;
      text-decoration: none;
      font-weight: 400; /* Not bold */
      padding: 0.5rem 0.75rem;
      border-radius: 4px;
      transition:
        background 0.2s,
        color 0.2s;
    }
    nav .nav-link.active {
      text-decoration: underline;
      color: #222;
      background: #f0f0f0;
    }
    nav .nav-link:hover {
      background: #eaeaea;
      color: #222;
    }
    .after-nav {
      height: 5.5rem;
    }
    .nav__trigger {
      display: none;
    }
  }
</style>
