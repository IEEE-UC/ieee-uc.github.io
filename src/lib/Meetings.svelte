<h1>Meetings</h1>
<div class="attendance-form-container">
  <a
    href="https://forms.gle/StyBLL4JRw53BDXo9"
    class="action-button"
    target="_blank"
    rel="noopener">Attendance Form</a
  >
</div>
<div class="calendar-container">
  <iframe
    class="calendar-iframe"
    src="https://calendar.google.com/calendar/embed?src=78e73f7cfaa2827c8fbd5ae7cf0efad9a246f15004a22b20e2302ddc5d617f9f%40group.calendar.google.com&ctz=America%2FNew_York"
    title="IEEE UC Google Calendar"
    style="border: 0"
    width="800"
    height="600"
    frameborder="0"
    scrolling="no"
  ></iframe>
</div>

<style>
  .attendance-form-container {
    display: flex;
    justify-content: flex-start;
    width: 90vw;
    max-width: 900px;
    margin: 0 auto 1rem auto;
  }
  .calendar-container {
    border-radius: 16px;
    width: 90vw;
    max-width: 900px;
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
    min-height: 400px;
  }
  @media (max-width: 600px) {
    .calendar-container {
      width: 98vw;
      height: 60vw;
      min-height: 350px;
      padding: 0;
    }
    .calendar-iframe {
      height: 350px;
      min-height: 200px;
    }
  }
</style>
