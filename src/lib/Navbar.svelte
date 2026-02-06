<script>
  import DiscordIcon from "./DiscordIcon.svelte";

  export let currentRoute;
  export let navActive;
  export let navigate;
  export let setNavActive;
</script>

<div class="mobile-nav-container">
  <!-- Hamburger trigger OUTSIDE nav so it's always visible -->
  <button
    class="nav__trigger {navActive ? 'nav__trigger--active' : ''}"
    aria-label="Toggle navigation"
    on:click={() => setNavActive(!navActive)}
  >
    <span class="nav__bar"></span>
    <span class="nav__bar"></span>
    <span class="nav__bar"></span>
  </button>
  <div class="join-container">
    <DiscordIcon href="https://discord.gg/qcgm3Fpjgt" color="black" size={32} />
    <button
      class="action-button"
      on:click={() =>
        (window.location.href = "https://campuslink.uc.edu/organization/ieee")}
      >Join the Organization</button
    >
  </div>
</div>

<!-- Mobile nav links -->
<nav class="nav {navActive ? 'nav--active' : ''}">
  <ul class="nav__list">
    <li class="nav__item">
      <a
        class="nav__link {currentRoute === '/' ? 'active' : ''}"
        href="/"
        on:click|preventDefault={() => {
          navigate("/");
          setNavActive(false);
        }}>Home</a
      >
    </li>
    <li class="nav__item">
      <a
        class="nav__link {currentRoute === '/officers' ? 'active' : ''}"
        href="/officers"
        on:click|preventDefault={() => {
          navigate("/officers");
          setNavActive(false);
        }}>Officers</a
      >
    </li>
    <li class="nav__item">
      <a
        class="nav__link {currentRoute === '/magazine' ? 'active' : ''}"
        href="/magazine"
        on:click|preventDefault={() => {
          navigate("/magazine");
          setNavActive(false);
        }}>Student Magazine</a
      >
    </li>
    <li class="nav__item">
      <a
        class="nav__link {currentRoute === '/meetings' ? 'active' : ''}"
        href="/meetings"
        on:click|preventDefault={() => {
          navigate("/meetings");
          setNavActive(false);
        }}>Meetings</a
      >
    </li>
    <li class="nav__item">
      <a
        class="nav__link {currentRoute === '/contact' ? 'active' : ''}"
        href="/contact"
        on:click|preventDefault={() => {
          navigate("/contact");
          setNavActive(false);
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
    class="nav-link {currentRoute === '/meetings' ? 'active' : ''}"
    href="/meetings"
    on:click|preventDefault={() => navigate("/meetings")}>Meetings</a
  >
  <a
    class="nav-link {currentRoute === '/contact' ? 'active' : ''}"
    href="/contact"
    on:click|preventDefault={() => navigate("/contact")}>Contact Us</a
  >
  <div class="desktop-join-container">
    <DiscordIcon href="https://discord.gg/qcgm3Fpjgt" color="black" size={32} />
    <button
      class="action-button"
      on:click={() =>
        (window.location.href = "https://campuslink.uc.edu/organization/ieee")}
      >Join the Organization</button
    >
  </div>
</nav>

<div class="after-nav"></div>

<style>
  nav {
    all: unset;
  }
  .nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: white;
    z-index: 1000;
    transform: translateX(-100%);
    transition: transform 0.4s cubic-bezier(0.77, 0.2, 0.05, 1);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 5.5rem;
    border-right: 1px solid #eee;
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
    background: #222; /* black when menu is open */
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
  .nav__link,
  .nav-link {
    position: relative;
    text-decoration: none;
    color: #222;
    padding-bottom: 5px;
  }

  .nav__link::after,
  .nav-link::after {
    content: "";
    position: absolute;
    bottom: 8px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background-color: #222;
    transition: width 0.3s ease-out;
  }

  .nav__link.active::after,
  .nav-link.active::after {
    width: calc(100% - 1.5rem);
    animation: underline-draw 0.3s ease-out forwards;
  }

  .nav__link:not(.active)::after,
  .nav-link:not(.active)::after {
    animation: underline-erase 0.3s ease-in forwards;
  }

  @keyframes underline-draw {
    from {
      width: 0;
    }
    to {
      width: calc(100% - 1.5rem);
    }
  }

  @keyframes underline-erase {
    from {
      width: calc(100% - 1.5rem);
    }
    to {
      width: 0;
    }
  }

  .nav__link {
    display: block;
    font-size: 2rem;
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
    color: #222;
  }
  .nav__link:hover {
    color: #222;
    background: rgba(0, 0, 0, 0.05);
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
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin: 1.5rem;
    z-index: 1200;
  }
  .after-nav {
    height: 4.5rem;
  }
  .desktop-nav {
    display: none;
  }

  .desktop-join-container {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-left: auto;
    margin-right: 2rem;
  }

  .mobile-nav-container {
    display: none;
  }

  @media (max-width: 699px) {
    .mobile-nav-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      background: #fff;
      border-bottom: 1px solid #eee;
      z-index: 1200;
      padding: 1.5rem;
      box-sizing: border-box;
    }

    .join-container {
      position: static;
      margin: 0;
    }

    .nav__trigger {
      position: static;
    }
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
    .nav-link {
      display: inline-block;
      margin-right: 1.5rem;
      font-size: 1.25rem;
      color: #222;
      text-decoration: none;
      font-weight: 400; /* Not bold */
      padding: 0.5rem 0.75rem;
      border-radius: 4px;
      transition:
        background 0.2s,
        color 0.2s;
    }
    .nav-link.active {
      color: #222;
      background: #f0f0f0;
    }
    .nav-link:hover {
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
