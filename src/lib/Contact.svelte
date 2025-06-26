<script>
  import GitHubIcon from "./GitHubIcon.svelte";
  import LinkedInIcon from "./LinkedInIcon.svelte";
  import InstagramIcon from "./InstagramIcon.svelte";
  import DiscordIcon from "./DiscordIcon.svelte";

  const socials = [
    {
      name: "GitHub",
      url: "https://github.com/IEEE-UC",
      desc: "Holds this site's code alongside a JavaScript tutorial. Future coding tutorials will go here, so keep a lookout!",
      icon: GitHubIcon,
      ariaLabel: "GitHub",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/ieee-at-uc/",
      desc: "A formal place to get updates about planned and information about past events. Please give us a follow and make some connections with those who already have.",
      icon: LinkedInIcon,
      ariaLabel: "LinkedIn",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/uc_ieee/",
      desc: "More informal updates, photos from events, and fun posts. Follow us to get notified of any new events.",
      icon: InstagramIcon,
      ariaLabel: "Instagram",
    },
    {
      name: "Discord",
      url: "https://discord.gg/qcgm3Fpjgt",
      desc: "Best way to get updates, interact with members, get help with homework, chat, and join game nights.",
      icon: DiscordIcon,
      ariaLabel: "Discord",
    },
  ];
</script>

<h1>Contact Us</h1>
<div class="contact-columns">
  <div class="contact-address">
    <p>802A Rhodes Hall</p>
    <p>2851 Woodside Drive</p>
    <p>Cincinnati, OH 45219</p>
    <p>USA</p>
  </div>
  <div class="contact-emails">
    <p><strong>Contact Email:</strong> execieee@gmail.com</p>
    <p><strong>President Email:</strong> mansouem@mail.uc.edu</p>
  </div>
</div>

<h2>Socials</h2>
<div class="contact-socials-grid">
  {#each socials as social}
    <div class="social-card">
      <a
        class="social-header"
        href={social.url}
        target="_blank"
        rel="noopener"
        aria-label={social.ariaLabel}
      >
        <svelte:component
          this={social.icon}
          color="#222"
          size={24}
          ariaLabel={social.ariaLabel}
        />
        <span class="social-name">{social.name}</span>
      </a>
      <a class="social-link" href={social.url} target="_blank" rel="noopener"
        >{social.url}</a
      >
      <div class="social-desc">{social.desc}</div>
    </div>
  {/each}
</div>

<style>
  h1,
  h2,
  h3 {
    margin-bottom: 0;
  }
  .contact-columns {
    display: flex;
    flex-wrap: wrap;
    gap: 2.5rem;
    margin-bottom: 1.5rem;
    margin-top: 0.5rem;
  }
  .contact-address,
  .contact-emails {
    flex: 1 1 220px;
    min-width: 180px;
  }
  .contact-address h1 {
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
  }
  .contact-emails h2 {
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
  }
  .contact-socials-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem 2rem;
    margin-top: 0.5rem;
    margin-bottom: 2rem;
  }
  .social-card {
    background: #fafafa;
    border-radius: 1rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    padding: 1.2rem 1rem 1rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-width: 0;
    min-height: 140px;
    transition:
      box-shadow 0.2s,
      transform 0.2s;
  }
  .social-card:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.13);
    transform: translateY(-2px) scale(1.03);
  }
  .social-header {
    display: flex;
    align-items: center;
    gap: 0.7rem;
    text-decoration: none;
    color: #222;
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 0.2rem;
  }
  .social-header .icon {
    display: flex;
    align-items: center;
    font-size: 1.7rem;
  }
  .social-name {
    font-size: 1.1rem;
    font-weight: 600;
  }
  .social-link {
    font-size: 0.93rem;
    color: #0077cc;
    word-break: break-all;
    margin-bottom: 0.3rem;
    text-decoration: underline;
  }
  .social-link:hover {
    color: #ffb300;
  }
  .social-desc {
    font-size: 0.98rem;
    color: #444;
    margin-top: 0.1rem;
  }
  @media (max-width: 700px) {
    .contact-columns {
      flex-direction: column;
      gap: 1.2rem;
    }
    .contact-socials-grid {
      grid-template-columns: 1fr;
      gap: 1.2rem;
    }
  }
</style>
