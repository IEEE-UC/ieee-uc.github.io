<style>
  ul {
    list-style-type: none;
    padding: 0;
  }
</style>

<script>
  import { onMount } from 'svelte';

  let magazines = [];

  onMount(async () => {
    const response = await fetch('/src/editable-content/magazines/magazines.json');
    const data = await response.json();
    magazines = data.magazines.sort((a, b) => b.year - a.year); // Sort newest to oldest
  });
</script>

<h1>IEEE Student Magazine</h1>
<ul>
  {#each magazines as magazine, index}
    {#if index === 0}
      <li style="margin-bottom: 2rem; text-align: center; background-color: #f0f8ff; padding: 1.5rem; border-radius: 8px;">
        <h2 style="font-size: 2rem; font-weight: bold;">{magazine.title}</h2>
        <p style="font-size: 1rem; font-weight: normal;">{magazine.date}</p>
        <a href={`/src/editable-content/magazines/pdfs/${magazine.year}.pdf`} target="_blank">
          <img 
            src={`/src/editable-content/magazines/pdfs/preview/${magazine.year}.jpg`} 
            alt="PDF Preview" 
            style="width: 300px; height: auto; margin: 1rem 0;" 
          />
        </a>
        <p><a href={`/src/editable-content/magazines/pdfs/${magazine.year}.pdf`} target="_blank" style="color: blue; text-decoration: underline;">Open PDF in new tab</a></p>
      </li>
    {:else}
      <li style="display: flex; align-items: flex-start; margin-bottom: 1.5rem;">
        <a href={`/src/editable-content/magazines/pdfs/${magazine.year}.pdf`} target="_blank">
          <img 
            src={`/src/editable-content/magazines/pdfs/preview/${magazine.year}.jpg`} 
            alt="PDF Preview" 
            style="width: 150px; height: auto; margin-right: 1rem;" 
          />
        </a>
        <div>
          <h3 style="margin: 0; font-size: 1.2rem; font-weight: bold;">{magazine.title}</h3>
          <p style="margin: 0.5rem 0 0; font-size: 1rem; font-weight: normal;">{magazine.date}</p>
          <p><a href={`/src/editable-content/magazines/pdfs/${magazine.year}.pdf`} target="_blank" style="color: blue; text-decoration: underline;">Open PDF in new tab</a></p>
        </div>
      </li>
    {/if}
  {/each}
</ul>