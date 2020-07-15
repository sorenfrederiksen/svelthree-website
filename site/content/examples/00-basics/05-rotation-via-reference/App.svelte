<script>
  import { onMount } from "svelte";
  import MyRotatingCube from "./MyRotatingCube.svelte";

  let rotatingCube;

  onMount(() => {
    // Test 'onDestroy' inside 'MyRotatingCube'
    // setTimeout(() => rotatingCube.$destroy(), 3000)
  });
</script>

<MyRotatingCube bind:this={rotatingCube} />
