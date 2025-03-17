<script>
  import "./app.css";
  let percentage = 75.0;
  let missedClass = 6;
  let totalHours = 31.5;
  let output = "";

  const calculateAttendance = () => {
    const attendanceRequired =
      missedClass / (1 - percentage / 100.0) - totalHours;

    if (attendanceRequired > 0) {
      output = `You need to attend ${Math.round(attendanceRequired * 100) / 100} more hour(s) of class!!`;
      return;
    }

    const attendanceExcess =
      (totalHours - missedClass) / (percentage / 100.0) - totalHours;

    output = `You can bunk ${Math.round(attendanceExcess * 100) / 100} hour(s) of class!!`;
    return;
  };
</script>

<div class="p-4">
  <h1 class="text-4xl pb-10 flex text-center justify-center font-bold">
    Attendance Calculator
  </h1>
  <div class="flex-col">
    <label class="label input-group grid-cols-[auto_1fr_auto] my-5">
      <div class="ig-cell preset-tonal text-lg">Percentage Required</div>
      <input
        bind:value={percentage}
        class="input"
        type="number"
        placeholder={percentage.toString()}
        min="0"
        max="100"
      />
    </label>
    <!--   <label class="label py-2">
    <span class="label-text text-lg">Attended Hours</span>
    <input class="input" type="number" placeholder="10" />
  </label> -->
    <label class="label input-group grid-cols-[auto_1fr_auto] my-5">
      <span class="ig-cell preset-tonal text-lg">Missed Hours</span>
      <input
        class="input"
        type="number"
        placeholder="4"
        bind:value={missedClass}
      />
    </label>
    <label class="label input-group grid-cols-[auto_1fr_auto] my-5">
      <span class="ig-cell preset-tonal text-lg">Total Class Conducted</span>
      <input
        class="input"
        type="number"
        placeholder="14"
        bind:value={totalHours}
      />
    </label>
  </div>

  <div class="p-10 flex justify-center">
    <button
      type="button"
      class="btn preset-outlined-surface-500"
      on:click={calculateAttendance}>Submit</button
    >
  </div>

  {#if output}
    <div class="text-xl py-4">{output}</div>
  {/if}
</div>
