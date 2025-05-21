<script>
  import Home from './lib/Home.svelte';
  import Officers from './lib/Officers.svelte';
  import Calendar from './lib/Calendar.svelte';
  import Magazine from './lib/Magazine.svelte';
  import Contact from './lib/Contact.svelte';
  import Join from './lib/Join.svelte';
  import { onMount } from 'svelte';

  let currentRoute = '/';

  function navigate(path) {
    window.history.pushState({}, '', path);
    currentRoute = path;
  }

  onMount(() => {
    const updateRoute = () => {
      currentRoute = window.location.pathname;
    };
    window.addEventListener('popstate', updateRoute);
    updateRoute();
    return () => window.removeEventListener('popstate', updateRoute);
  });
</script>

<nav>
  <button on:click={() => navigate('/')}>IEEE</button>
  <button on:click={() => navigate('/officers')}>Officers</button>
  <button on:click={() => navigate('/magazine')}>IEEE Student Magazine</button>
  <button on:click={() => navigate('/contact')}>Contact Us</button>
  <button on:click={() => navigate('/calendar')}>Calendar</button>
  <button class="join-button" on:click={() => window.location.href = 'https://campuslink.uc.edu/organization/ieee'}>Join the Organization</button>
</nav>

{#if currentRoute === '/'}
  <Home goToPage={navigate} />
{:else if currentRoute === '/officers'}
  <Officers />
{:else if currentRoute === '/calendar'}
  <Calendar />
{:else if currentRoute === '/magazine'}
  <Magazine />
{:else if currentRoute === '/contact'}
  <Contact />
{:else}
  <h2 style="text-align:center; margin-top:3rem;">404 - Page Not Found</h2>
{/if}

<style>
  /* Removed unnecessary styles to avoid centering issues */
</style>
