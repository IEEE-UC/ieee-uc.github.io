<script>
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import { Router, Route, link } from 'svelte-routing';
  import Home from './routes/public/Home.svelte';
  import SignIn from './routes/admin/SignIn.svelte';
  
  const isAuthenticated = writable(false);

  onMount(() => {
    // Check authentication status (this could be replaced with a real check)
    const token = localStorage.getItem('authToken');
    isAuthenticated.set(!!token);
  });
</script>

<Router>
  <nav>
    <a use:link href="/">Home</a>
    {#if $isAuthenticated}
      <a use:link href="/admin">Admin</a>
    {/if}
  </nav>

  <Route path="/" component={Home} />
  <Route path="/admin" component={SignIn} />
</Router>

<style>
  nav {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
  }
</style>