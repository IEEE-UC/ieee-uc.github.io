<script>
  import { onMount } from 'svelte';

  let magazines = [];

  async function fileExists(url) {
    try {
      const response = await fetch(url, { method: 'HEAD' });
      return response.ok;
    } catch {
      return false;
    }
  }

  onMount(async () => {
    const response = await fetch('/src/editable-content/magazines/magazines.json');
    const data = await response.json();
    magazines = [];

    for (const magazine of data.magazines) {
      const pdfPath = `/src/editable-content/magazines/${magazine.pdf}`;
      if (await fileExists(pdfPath)) {
        magazines.push({
          ...magazine,
          pdf: pdfPath,
          preview: '/src/assets/pdf-preview.png' // Placeholder for PDF preview image
        });
      }
    }
  });
</script>

<h1>Student Magazine</h1>
<ul>
  {#each magazines as magazine}
    <li>
      <h2>{magazine.title} ({magazine.date})</h2>
      <a href={magazine.pdf} target="_blank">
        <img src={magazine.preview} alt="PDF Preview" style="width: 150px; height: auto;" />
      </a>
    </li>
  {/each}
</ul>