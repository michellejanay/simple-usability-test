<script>
  let userResponse = "";
  import { data } from "$lib";
  console.log(data);
</script>

<form method="POST" action="?/submit">
  <fieldset>
    <legend>"Which design did you prefer?"</legend>
    <li>
      <input
        name="response4"
        type="radio"
        id="option1"
        value="option-1"
        bind:group={userResponse}
        required={true}
      />
      <label for="option1">Option 1</label>
    </li>
    <li>
      <input
        name="response4"
        type="radio"
        id="option2"
        value="option-2"
        bind:group={userResponse}
        required={true}
      />
      <label for="option2">Option 2</label>
    </li>
    <p />
  </fieldset>
  {#each data as d, i}
    <input type="hidden" name={`response${[i + 1]}`} value={d} />
  {/each}
  <button>Submit</button>
</form>
