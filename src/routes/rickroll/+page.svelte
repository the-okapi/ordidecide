<script>
    import rickroll from '$lib/rickroll.mp4';
    import jumpscare from '$lib/jumpscare.mp4';
    let video;
    if (Boolean(Math.round(Math.random()))) {
        video = rickroll;
    } else {
        video = jumpscare;
    }
</script>

<!-- svelte-ignore a11y-media-has-caption -->
<video autoplay height="567">
    <source src={video} type="video/mp4">
    Your browser does not support the video tag
</video>