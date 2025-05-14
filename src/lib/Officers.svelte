<script>
  import { onMount } from 'svelte';

  let officers = [];

  onMount(async () => {
    const response = await fetch('/src/editable-content/officers/officers.json');
    const data = await response.json();
    officers = data.officers.map(officer => {
      // Check for image extensions in different cases
      const imageExtensions = ['.jpg', '.jpeg', '.png'];
      const imagePath = imageExtensions.some(ext => officer.image.toLowerCase().endsWith(ext))
        ? `/src/editable-content/officers/pictures/${officer.image}`
        : '/src/editable-content/officers/pictures/default.jpg';

      return {
        ...officer,
        image: imagePath
      };
    });
  });
</script>

<h1>Meet Our Officers</h1>
<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;">
  {#each officers as officer}
    <div style="text-align: center;">
      <div style="display: flex; justify-content: center; align-items: center; overflow: hidden; width: 150px; height: 150px; border-radius: 50%; margin: 0 auto;">
        <img src={officer.image} alt={officer.name} style="object-fit: cover; width: 100%; height: 100%;" />
      </div>
      <h2>{officer.role}: {officer.name}</h2>
      <blockquote>{officer.quote}</blockquote>
      <p>{officer.description}</p>
    </div>
  {/each}
</div>