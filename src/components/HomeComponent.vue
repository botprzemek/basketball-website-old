<template>
	<main
		class="z-10 w-screen h-screen relative grid place-content-center select-none"
	>
		<section class="grid gap-4 place-items-center overflow-hidden">
			<img src="@/assets/logo.svg" height="230" width="230" />
			<!--To-do: flashy saying about basketball and "Knury Knurów". -->
			<h1
				class="heading -translate-y-10 opacity-0 transform-gpu transition-all ease-out duration-700 text-white font-bold text-6xl text-center uppercase pt-10 mb-1"
			>
				Knury Knurów
			</h1>
			<h2
				class="quote -translate-y-10 w-3/5 opacity-0 transform-gpu transition-all ease-out duration-700 text-white font-italic text-4xl text-center pt-10 mb-1"
			>
				"Mogę zaakceptować porażkę, ale nigdy nie zaakceptuje, jeśli
				ktoś się nie stara."
			</h2>
			<div
				class="arrowBtn opacity-0 transition-all ease-out duration-1000"
			>
				<box-icon
					class="w-24 h-24 cursor-pointer mt-48"
					name="down-arrow"
					type="solid"
					flip="horizontal"
					animation="tada"
					color="#ffffff"
				></box-icon>
			</div>
		</section>
	</main>
</template>

<script>
import "boxicons";
export default {
	name: "HomeComponent",
	methods: {
		animations(heading, arrowBtn, quote) {
			setTimeout(
				() =>
					document.body
						.querySelector(`.${heading}`)
						.classList.remove("-translate-y-10", "opacity-0"),
				50
			);
			setTimeout(
				() =>
					document.body
						.querySelector(`.${quote}`)
						.classList.remove("opacity-0"),
				800
			);
			setTimeout(
				() =>
					document.body
						.querySelector(`.${arrowBtn}`)
						.classList.remove("opacity-0"),
				1200
			);
		},
		click(link) {
			window.location.href = link;
		},
	},
	mounted() {
		this.animations("heading", "arrowBtn", "quote");
	},
};
</script>

<style></style>
