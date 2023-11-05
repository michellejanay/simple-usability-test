<script>
  let userResponse = "";
  import { saveResponse } from "$lib";
</script>

<h1>
  How easy/clear is it to search for a product or fragrance on the example
  screen? Describe why or why not.
</h1>
<textarea
  name=""
  id=""
  cols="30"
  rows="10"
  placeholder="Your response..."
  bind:value={userResponse}
/>
<a
  href="/survey/question-4"
  data-sveltekit-replacestate
  on:click={saveResponse(userResponse, 3)}>Next</a
>
