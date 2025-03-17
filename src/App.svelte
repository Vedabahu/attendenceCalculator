<script>
  import { Tabs } from "@skeletonlabs/skeleton-svelte";
  import NonIiit from "./lib/nonIIIT.svelte";
    import IiitDwd from "./lib/IIITDwd.svelte";

  let forIIIT = $state("Normal");
</script>

<div class="p-4 min-w-96 mt-7 sm:w-xl sm:mx-auto sm:mt-10">

  <h1 class="text-4xl pb-10 flex-col text-center justify-center font-bold h-fit">
    Attendance Calculator <br />
    <span class="text-sm">By Vedabahu</span>
  </h1>
  
  <Tabs
    value={forIIIT}
    onValueChange={(e) => {
      forIIIT = e.value;
    }}
    fluid
  >
    {#snippet list()}
      <Tabs.Control value="Normal">Normal</Tabs.Control>
      <Tabs.Control value="IIIT Dharwad">IIIT Dharwad</Tabs.Control>
    {/snippet}
    {#snippet content()}
      <Tabs.Panel value="Normal"><NonIiit /></Tabs.Panel>
      <Tabs.Panel value="IIIT Dharwad"><IiitDwd /></Tabs.Panel>
    {/snippet}
  </Tabs>
</div>
