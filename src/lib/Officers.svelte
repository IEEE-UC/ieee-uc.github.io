<script>
  import { onMount } from 'svelte';

  let officers = [];
  let expandedSkills = new Set();

  onMount(async () => {
    const response = await fetch('/src/editable-content/officers/officers.json');
    const data = await response.json();
    officers = data.officers.map(officer => {
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

  function toggleSkills(index) {
    if (expandedSkills.has(index)) {
      expandedSkills.delete(index);
    } else {
      expandedSkills.add(index);
    }
    expandedSkills = new Set(expandedSkills); // Trigger reactivity
  }
</script>

<h1>Meet Our Officers</h1>
<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; padding: 0 20vw;">
  {#each officers as officer, index}
    <div style="text-align: center;">
      <div style="display: flex; justify-content: center; align-items: center; overflow: hidden; width: 150px; height: 150px; border-radius: 50%; margin: 0 auto;">
        <img src={officer.image} alt={officer.name} style="object-fit: cover; width: 100%; height: 100%;" />
      </div>
      <h2>{officer.role}: {officer.name}</h2>
      <p>{officer.major} - {officer.year}</p>
      <blockquote style="font-style: italic;">
        <p>"{officer.quote}"</p>
        <footer style="color: grey; text-align: right;">- {officer.quote_speaker}</footer>
      </blockquote>
      <p>{officer.description}</p>
      <div style="display: flex; flex-wrap: wrap; gap: 5px; justify-content: center;">
        {#each officer.skills.split(', ').slice(0, expandedSkills.has(index) ? undefined : 5) as skill}
          <span style="background-color: #f0f0f0; border-radius: 5px; padding: 5px 10px; font-size: 0.9em;">{skill}</span>
        {/each}
        {#if officer.skills.split(', ').length > 5}
          <button on:click={() => toggleSkills(index)} style="background: none; border: none; color: grey; cursor: pointer;">
            {expandedSkills.has(index) ? 'Show Less' : 'Show More'}
          </button>
        {/if}
      </div>
    </div>
  {/each}
</div>