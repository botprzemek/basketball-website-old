<template>
	<ul
		class="z-50 absolute border-l-[14px] border-t-[14px] w-42 h-64 p-8 left-8 top-8 border-main"
	>
		<li
			class="hover:translate-x-4 transition list-none ml-4 text-white hover:text-main"
			v-for="link in links"
			:key="link.title"
		>
			<router-link v-bind:to="link.addr">{{ link.title }}</router-link>
		</li>
	</ul>
</template>

<script>
export default {
	name: "NavComponent",
	methods: {
		scroll(id) {
			window.location.pathname !== "/"
				? this.$router.push("/")
				: document
						.getElementById(id)
						.scrollIntoView({ block: "start", behavior: "smooth" });
		},
	},
	props: {
		title: String,
		addr: String,
	},
	data() {
		return {
			links: [
				{ title: "Start", addr: "./" },
				{ title: "Zespół", addr: "./zespol" },
				{ title: "O nas", addr: "/o-nas" },
				{ title: "Media", addr: "/media" },
				{ title: "Kontakt", addr: "./kontakt" },
			],
		};
	},
};
</script>

<style></style>
