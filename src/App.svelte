<script>
  import Home from "./lib/Home.svelte";
  import Officers from "./lib/Officers.svelte";
  import Meetings from "./lib/Meetings.svelte";
  import Magazine from "./lib/Magazine.svelte";
  import Contact from "./lib/Contact.svelte";
  import Navbar from "./lib/Navbar.svelte";
  import Footer from "./lib/Footer.svelte";
  import { onMount } from "svelte";

  let currentRoute = "/";
  let navActive = false;

  function setNavActive(val) {
    navActive = val;
  }

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

<Navbar {currentRoute} {navActive} {navigate} {setNavActive} />
<div class="main-content">
  {#if currentRoute === "/"}
    <Home />
  {:else if currentRoute === "/officers"}
    <Officers />
  {:else if currentRoute === "/meetings"}
    <Meetings />
  {:else if currentRoute === "/magazine"}
    <Magazine />
  {:else if currentRoute === "/contact"}
    <Contact />
  {:else}
    <h2 style="text-align:center; margin-top:3rem;">404 - Page Not Found</h2>
  {/if}
</div>
<Footer />

<style>
  .main-content {
    min-height: 70vh; /* Adjust as needed to push footer down */
    padding: 2rem;
  }
  .after-nav {
    height: 4.5rem;
  }
  @media (min-width: 700px) {
    .after-nav {
      height: 5.5rem;
    }
  }
</style>
