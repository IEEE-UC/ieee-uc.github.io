<script lang="ts">
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import { navigate } from 'svelte-routing';
  import { authStore } from '../../stores/auth';

  let email = '';
  let password = '';
  let errorMessage = '';

  const handleSubmit = async (event: Event) => {
    event.preventDefault();
    errorMessage = '';

    const response = await fetch('/api/admin/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      authStore.set(data.user);
      navigate('/admin/dashboard');
    } else {
      const errorData = await response.json();
      errorMessage = errorData.message || 'Sign in failed. Please try again.';
    }
  };
</script>

<main>
  <h1>Admin Sign In</h1>
  <form on:submit={handleSubmit}>
    <div>
      <label for="email">Email:</label>
      <input type="email" id="email" bind:value={email} required />
    </div>
    <div>
      <label for="password">Password:</label>
      <input type="password" id="password" bind:value={password} required />
    </div>
    {#if errorMessage}
      <p class="error">{errorMessage}</p>
    {/if}
    <button type="submit">Sign In</button>
  </form>
</main>

<style>
  main {
    max-width: 400px;
    margin: auto;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .error {
    color: red;
  }
</style>