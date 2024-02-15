<script lang='ts'>
	import JobDisplay from '../../componets/JobDisplay.svelte';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<svelte:head>
	<title>Jobs</title>
	<meta name="description" content="Job Listing Home page" />

	<style>
		.home-page {
			padding: 2rem 4rem;
			display: flex;
			align-items: center;
			flex-direction: column;
			justify-content: center;
		}
	</style>
</svelte:head>

<div class="home-page">
	<h1>Job Listing Home page</h1>

	{#each data.job_list as job}
		<JobDisplay {job} />
	{/each}
</div>

