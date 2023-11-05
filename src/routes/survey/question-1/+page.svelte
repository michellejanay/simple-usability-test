<script>
  let userResponse1 = "";
  import { saveResponse } from "$lib";
</script>

{userResponse1}
<fieldset>
  <legend
    >Where would you prefer to shop for bath/body care products for
    yourself/others?</legend
  >
  <li>
    <input
      name="userResponse1"
      type="radio"
      value="Laptop/Desktop"
      id="laptop-desktop"
      bind:group={userResponse1}
      required={true}
    />
    <label for="">Laptop/Desktop</label>
  </li>
  <li>
    <input
      name="userResponse1"
      type="radio"
      value="Mobile App"
      id="mobile-app"
      bind:group={userResponse1}
      required={true}
    />
    <label for="">Mobile App</label>
  </li>
  <li>
    <input
      name="userResponse1"
      type="radio"
      value="In Store"
      id="in-store"
      bind:group={userResponse1}
      required={true}
    />
    <label for="">In Store</label>
  </li>
  <p />
</fieldset>

<a
  href="/survey/instructions"
  data-sveltekit-replacestate
  on:click={saveResponse(userResponse1, 1)}>Next</a
>
