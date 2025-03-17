<script>
  import validateNumbers from "./validateNumbers";

  let percent = "";
  let missed = "";
  let total = "";
  let output = "";

  const calculateAttendance = () => {
    const percentage = parseFloat(percent);
    const missedClass = parseFloat(missed);
    const totalHours = parseFloat(total);

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
      output = `You need to attend ${Math.round(attendanceRequired * 100) / 100} more hour(s) of class!!`;
      return;
    }

    const attendanceExcess =
      (totalHours - missedClass) / (percentage / 100.0) - totalHours;

    output = `You can bunk ${Math.round(attendanceExcess * 100) / 100} hour(s) of class!!`;
    return;
  };
</script>

<div class="p-4 mt-7 sm:w-lg sm:mx-auto sm:mt-10">
  <div class="flex-col">
    <div class="input-group grid-cols-[auto_1fr_auto] my-5">
      <div class="ig-cell preset-tonal text-lg w-60">Percentage Required</div>
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
    <div class="input-group grid-cols-[auto_1fr_auto] my-5">
      <span class="ig-cell preset-tonal text-lg w-60">Missed Hours</span>
      <input
        class="input"
        type="number"
        placeholder="4"
        bind:value={missed}
        min="0"
      />
    </div>
    <div class="input-group grid-cols-[auto_1fr_auto] my-5">
      <span class="ig-cell preset-tonal text-lg w-60"
        >Total Hours Conducted</span
      >
      <input
        class="input"
        type="number"
        placeholder="14"
        bind:value={total}
        min="0"
      />
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
