<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/svelte-logo.svg';
	import github from '$lib/images/github.svg';

	let email = 'sungjun.hw@gmail.com';
	let phoneNumber = '010-2395-8867';

	function subscribe() {
		// 뉴스레터 구독 로직을 여기에 추가하세요.
		alert(`구독 완료: ${email}`);
	}
</script>

<footer>
	<div>
		<h2>Contact </h2>
		<p>Email : {email}</p>
		<p>H.P : {phoneNumber}</p>
	</div>
	<div>
		<h2>Subscribe News letters</h2>
		<input bind:value={email} type="email" placeholder="email Adress" />
		<button on:click={subscribe}>구독하기</button>
	</div>
</footer>

<style>
	footer {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	div {
		margin: 1em;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}
	footer {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	p,
	input,
	button {
		margin: 0 0.5em;
	}
	h2 {
		margin: 2em;
	}

	/* footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	} */
</style>
