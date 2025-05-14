<script lang="ts">
  import { onMount } from 'svelte';

  let clubInfo = '';

  onMount(async () => {
    const response = await fetch('/api/public');
    if (response.ok) {
      clubInfo = await response.json();
    } else {
      clubInfo = 'Failed to load club information.';
    }
  });
</script>

<main>
  <h1>Welcome to Our Club</h1>
  <p>{clubInfo}</p>
</main>

<style>
  main {
    text-align: center;
    padding: 2rem;
  }

  h1 {
    color: #4a90e2;
  }

  p {
    font-size: 1.2rem;
  }
</style>