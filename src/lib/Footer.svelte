<script>
  import GitHubIcon from "./GitHubIcon.svelte";
  import LinkedInIcon from "./LinkedInIcon.svelte";
  import InstagramIcon from "./InstagramIcon.svelte";
  import DiscordIcon from "./DiscordIcon.svelte";
  import XIcon from "./XIcon.svelte";
</script>

<footer class="footer">
  <div class="footer-content">
    <div>
      <strong>IEEE at University of Cincinnati</strong>
    </div>
    <div class="footer-icons">
      <GitHubIcon
        href="https://github.com/IEEE-UC"
        ariaLabel="GitHub"
        color="#fff"
      />
      <LinkedInIcon
        href="https://www.linkedin.com/company/ieee-at-uc/"
        ariaLabel="LinkedIn"
        color="#fff"
      />
      <InstagramIcon
        href="https://www.instagram.com/uc_ieee/"
        ariaLabel="Instagram"
        color="#fff"
      />
      <DiscordIcon
        href="https://discord.gg/qcgm3Fpjgt"
        ariaLabel="Discord"
        color="#fff"
      />
      <XIcon href="https://x.com/uc_ieee" ariaLabel="X/Twitter" color="#fff" />
    </div>
  </div>
</footer>

<style>
  .footer {
    width: 100%;
    background: #222;
    color: #fff;
    padding: 2rem 0 1rem 0;
    text-align: center;
    margin-top: 4rem;
    box-sizing: border-box;
  }
  .footer-content {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    max-width: 900px;
    margin: 0 auto;
    width: 100%;
  }
  .footer-icons {
    display: flex;
    gap: 1.2rem;
    align-items: center;
    justify-content: center;
    margin-top: 0.5rem;
  }
  .footer-icons a {
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    transition:
      color 0.2s,
      transform 0.2s;
    font-size: 1.5rem;
  }
  .footer-icons a:hover {
    color: #ffb300;
    transform: scale(1.15);
  }
  @media (min-width: 700px) {
    .footer-content {
      flex-direction: row;
      justify-content: space-between;
    }
    .footer-icons {
      margin-top: 0;
    }
  }
</style>
