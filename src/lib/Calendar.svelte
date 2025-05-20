<style>
  .calendar-container {
    width: 90vw;
    height: calc(100vh - 200px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; /* Center vertically */
    box-sizing: border-box;
    padding-top: 1rem;
    margin: 0 auto; /* Center horizontally */
  }
  .calendar-iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
</style>

<h1>Club Calendar</h1>
<div class="calendar-container">
  <iframe src="https://calendar.google.com/calendar/embed?src=78e73f7cfaa2827c8fbd5ae7cf0efad9a246f15004a22b20e2302ddc5d617f9f%40group.calendar.google.com&ctz=America%2FNew_York" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
</div>