<script>
  import validateNumbers from "./validateNumbers";

  let percent = "";
  let missedLectures = "";
  let missedTutorials = "";
  let missedLabs = "";
  let totalLectures = "";
  let totalTutorials = "";
  let totalLabs = "";
  let output = "";

  const calculateAttendance = () => {
    const percentage = parseFloat(percent);
    const missedClass =
      parseFloat(missedLectures) * 1.5 +
      parseFloat(missedTutorials) +
      parseFloat(missedLabs) * 2;
    const totalHours =
      parseFloat(totalLectures) * 1.5 +
      parseFloat(totalTutorials) +
      parseFloat(totalLabs) * 2;

    const { code, message } = validateNumbers(
      percentage,
      missedClass,
      totalHours,
    );

    if (code != 0) {
      output = message;
      return;
    }

    const attendanceRequired =
      missedClass / (1 - percentage / 100.0) - totalHours;

    if (attendanceRequired > 0) {
      const attendanceHours = Math.round(attendanceRequired * 100) / 100;
      output = `
        You need to attend ${attendanceHours} more hour(s) of class!!
        That is ${Math.round((attendanceHours / 1.5) * 100) / 100} more lectures.
      `;
      return;
    }

    const attendanceExcess =
      (totalHours - missedClass) / (percentage / 100.0) - totalHours;

    output = `
      You can bunk ${Math.round(attendanceExcess * 100) / 100} hour(s) of class!!
      That is approximately ${Math.floor(attendanceExcess / 1.5)} lectures.
    `;
    return;
  };
</script>

<div class="p-4 mt-7 sm:w-lg sm:mx-auto sm:mt-10">
  <div class="flex-col">
    <div class="input-group grid-cols-[auto_1fr_auto] my-5">
      <div class="ig-cell preset-tonal text-lg">Percentage Required</div>
      <input
        bind:value={percent}
        class="input"
        type="number"
        placeholder="75"
        min="0"
        max="100"
      />
    </div>
    <!--   <div class="div py-2">
    <span class="div-text text-lg">Attended Hours</span>
    <input class="input" type="number" placeholder="10" />
  </div> -->
    <div class="p-3 preset-outlined-surface-200-800 rounded-container">
      <span class="label-text">Information about Missed Classes</span>
      <div class="input-group grid-cols-[auto_1fr_auto] my-5">
        <span class="ig-cell preset-tonal text-lg w-52">Missed Lectures</span>
        <input
          class="input"
          type="number"
          placeholder="4"
          bind:value={missedLectures}
        />
      </div>
      <div class="input-group grid-cols-[auto_1fr_auto] my-5">
        <span class="ig-cell preset-tonal text-lg w-52">Missed Tutorials</span>
        <input
          class="input"
          type="number"
          placeholder="1"
          bind:value={missedTutorials}
        />
      </div>
      <div class="input-group grid-cols-[auto_1fr_auto] my-5">
        <span class="ig-cell preset-tonal text-lg w-52">Missed Labs</span>
        <input
          class="input"
          type="number"
          placeholder="0"
          bind:value={missedLabs}
        />
      </div>
    </div>
    <div class="mt-5 p-3 preset-outlined-surface-200-800 rounded-container">
      <span class="label-text">Information about Conducted Classes</span>
      <div class="input-group grid-cols-[auto_1fr_auto] my-5">
        <span class="ig-cell preset-tonal text-lg w-52">Total Lectures</span>
        <input
          class="input"
          type="number"
          placeholder="13"
          bind:value={totalLectures}
        />
      </div>
      <div class="input-group grid-cols-[auto_1fr_auto] my-5">
        <span class="ig-cell preset-tonal text-lg w-52">Total Tutorials</span>
        <input
          class="input"
          type="number"
          placeholder="7"
          bind:value={totalTutorials}
        />
      </div>
      <div class="input-group grid-cols-[auto_1fr_auto] my-5">
        <span class="ig-cell preset-tonal text-lg w-52">Total Labs</span>
        <input
          class="input"
          type="number"
          placeholder="2"
          bind:value={totalLabs}
        />
      </div>
    </div>
  </div>

  <div class="p-10 flex justify-center">
    <button
      type="button"
      class="btn preset-outlined-surface-500"
      on:click={calculateAttendance}>Submit</button
    >
  </div>

  {#if output}
    <div class="text-xl py-4 text-center">{output}</div>
  {/if}
</div>
