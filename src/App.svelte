<script>
  import Home from './lib/Home.svelte';
  import Officers from './lib/Officers.svelte';
  import Calendar from './lib/Calendar.svelte';
  import Magazine from './lib/Magazine.svelte';
  import Contact from './lib/Contact.svelte';
  import Join from './lib/Join.svelte';
  let currentPage = 'home';
</script>

<nav>
  <button on:click={() => currentPage = 'home'}>IEEE</button>
  <button on:click={() => currentPage = 'officers'}>Officers</button>
  <button on:click={() => currentPage = 'magazine'}>IEEE Student Magazine</button>
  <button on:click={() => currentPage = 'contact'}>Contact Us</button>
  <button on:click={() => currentPage = 'calendar'}>Calendar</button>
  <button class="join-button" on:click={() => currentPage = 'join'}>Join the Organization</button>
</nav>

{#if currentPage === 'home'}
  <Home />
{:else if currentPage === 'officers'}
  <Officers />
{:else if currentPage === 'calendar'}
  <Calendar />
{:else if currentPage === 'magazine'}
  <Magazine />
{:else if currentPage === 'contact'}
  <Contact />
{/if}

<style>
  /* Removed unnecessary styles to avoid centering issues */
</style>
