<script>
  import Join from './Join.svelte';
</script>

<style>
    header {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 3rem;
    }
    header h1 {
        font-size: 3.5rem;
        margin-bottom: 0;
    }
    header p {
        font-size: 2rem;
        color: grey;
        margin: 0;
        margin-bottom: 1.25rem;
    }
</style>

<header>
    <h1>IEEE Student Chapter</h1>
    <p>University of Cincinnati</p>
    <div><button class="join-button" on:click={() => currentPage = 'join'}>Join the Organization</button></div>
</header>