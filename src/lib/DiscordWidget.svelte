<script>
  import { onMount } from "svelte";

  let widgetbot = {};

  onMount(async () => {
    const res = await fetch(
      `/src/editable-content/widgetbot.json?t=${Date.now()}`,
    );
    widgetbot = await res.json();
  });
</script>

<div class="row-announcements">
  <div class="widget-container">
    {#if widgetbot.server && widgetbot.channel}
      <div class="mask-container">
        <div class="widget-label">#announcements</div>
        <div class="widget-wrapper">
          <iframe
            title="Discord Widget"
            src="https://e.widgetbot.io/channels/{widgetbot.server}/{widgetbot.channel}"
            allow="clipboard-write; fullscreen"
            height="640"
            width="100%"
          ></iframe>
        </div>
      </div>
    {/if}
  </div>

  <div class="activity-widget-container">
    <div class="activity-widget-wrapper">
      <iframe
        class="activity-widget"
        title="Discord Activity Widget"
        src="https://discord.com/widget?id=752562099225362622&theme=light"
        width="350"
        height="500"
        allowtransparency={true}
        frameborder="0"
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
      ></iframe>
    </div>
  </div>
</div>

<style>
  .row-announcements {
    display: flex;
    flex-direction: row !important; /* Force side-by-side */
    gap: 0;
    max-width: 920px;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    align-items: flex-start; /* Align to top */
  }

  .widget-container {
    flex: 1;
    min-width: 0; /* Allows shrinking */
    max-width: 500px;
  }

  .mask-container {
    width: 100%;
    height: 500px; /* Desired height */
    overflow: hidden;
    position: relative;
    background: #313338; /* Matches Discord Dark theme background */
    border-radius: 8px 0 0 8px;
  }

  .widget-label {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 8px 16px;
    font-weight: bold;
    z-index: 10;
    pointer-events: none;
    box-sizing: border-box;
  }

  .widget-wrapper {
    position: absolute;
    top: -80px; /* Hide the header */
    left: 0;
    width: 100%;
    height: 640px; /* Extra height to accommodate shifts */
  }

  .widget-wrapper iframe {
    border: none;
  }

  .activity-widget-container {
    flex-shrink: 0;
    width: 350px;
    height: 500px;
    overflow: hidden;
    border-radius: 0 8px 8px 0;
    position: relative;
    background: #313338;
  }

  .activity-widget-wrapper {
    position: absolute;
    top: -10px;
    left: -10px;
    width: calc(100% + 20px);
    height: calc(100% + 20px);
  }

  .activity-widget {
    width: 100%;
    height: 100%;
    border: none;
    display: block;
  }

  @media (max-width: 900px) {
    .row-announcements {
      flex-direction: column-reverse !important; /* Stack vertically with activity on top */
      width: 100%;
      padding: 0 1rem;
      box-sizing: border-box;
      gap: 0;
    }

    .activity-widget-container {
      width: 100%;
      height: 50px;
      border-radius: 8px 8px 0 0;
    }

    .widget-container {
      max-width: 100%;
      width: 100%;
    }

    .mask-container {
      border-radius: 0 0 8px 8px !important;
    }
  }
</style>
