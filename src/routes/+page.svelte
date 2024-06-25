<script lang="ts">
    import Win from '$lib/Win.svelte';
    import Lose from '$lib/Lose.svelte';
    import { check } from '$lib/check.js';
    let done = false;
    let won = false;
    let one = "";
    let two = "";
    let three = "";
    let four = "";
    function submit() {
        if (check(one, two, three, four)) {
            won = true;
        }
        done = true;
    }
</script>

<div class="mainContainer">
    {#if !done}
        <form on:submit={submit} class="mainFields">
            <div class="row">
                <input spellcheck=false maxlength=13 required bind:value={one} placeholder="Entrer texte..." />
                <input spellcheck=false maxlength=13 required bind:value={two} placeholder="Entrer texte..." />
            </div>
            <div class="row">
                <input spellcheck=false maxlength=13 required bind:value={three} placeholder="Entrer texte..." />
                <input spellcheck=false maxlength=13 required bind:value={four} placeholder="Entrer texte..." />
            </div>
            <button type="submit">Soumettre</button>
        </form>
    {:else if won}
        <Win />
    {:else}
        <Lose />
    {/if}
</div>