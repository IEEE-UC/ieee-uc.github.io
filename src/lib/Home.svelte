<script>
  import Calendar from './Calendar.svelte';
  export let goToPage = () => {};
</script>

<style>
    header {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 3rem;
        margin-bottom: 3rem;
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
    .row {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10rem;
        margin-bottom: 5rem;
    }
    .row.reverse {
        flex-direction: row-reverse;
    }
    .row-text {
        max-width: 420px;
        font-size: 1.25rem;
    }
    .row-img {
        max-width: 400px;
        width: 100%;
        border-radius: 1rem;
        box-shadow: 0 2px 16px rgba(0,0,0,0.08);
    }
    @media (max-width: 900px) {
        .row, .row.reverse {
            flex-direction: column !important;
            text-align: center;
        }
        .row-text {
            max-width: 100%;
        }
        .row-img {
            max-width: 90vw;
        }
    }
</style>

<header>
    <h1>IEEE Student Chapter</h1>
    <p>University of Cincinnati</p>
    <div>
      <button class="join-button" on:click={() => window.location.href = 'https://campuslink.uc.edu/organization/ieee'}>Join the Organization</button>
    </div>
</header>

<div class="row">
    <div class="row-text">
        <h2>Chapter Meetings</h2>
        <p>
            Bi-Weekly, Thursdays, 6:00-7:00 pm
            <br>
            Campus Recreation Center 3210
        </p>
        <button class="join-button" on:click={() => goToPage('calendar')}>calendar</button>
    </div>
    <img class="row-img" src="/src/assets/baldwin.png" alt="IEEE UC Banner" />
</div>

<div class="row">
    <img class="row-img" src="/src/assets/seating.jpg" alt="IEEE UC Event" />
    <div class="row-text">
        <h2>MakeUC</h2>
        <p>
            Annual Fall Hackathon run by IEEE 
        </p>
      <button class="join-button" on:click={() => window.location.href = 'https://makeuc.io'}>makeuc.io</button>
    </div>
</div>