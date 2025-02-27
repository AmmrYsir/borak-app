<template>
	<div class="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-blue-100">
		<div class="w-full max-w-md p-10 space-y-8 bg-white rounded-2xl shadow-2xl relative overflow-hidden">
			<!-- Background pattern -->
			<div class="absolute inset-0 bg-blue-50 opacity-20 rounded-2xl -z-10"></div>
			<h2 class="text-3xl font-bold text-center text-gray-800">Borak App</h2>
			<fwb-alert v-if="errorMessage" class="mt-2 text-center" border type="danger">{{ errorMessage }}</fwb-alert>
			<form @submit.prevent="handleSubmit" class="space-y-6">
				<div>
					<label for="email" class="block mb-2 text-sm font-medium text-gray-900">Email</label>
					<fwb-input id="email" v-model="email" type="email" placeholder="your@email.com" required
						class="w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
				</div>
				<div>
					<label for="password" class="block mb-2 text-sm font-medium text-gray-900">Password</label>
					<fwb-input id="password" v-model="password" type="password" placeholder="********" required
						class="w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
				</div>
				<div class="flex items-center justify-between">
					<div class="flex items-center">
						<input id="remember-me" type="checkbox"
							class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" />
						<label for="remember-me" class="ml-2 block text-sm text-gray-900">Remember me</label>
					</div>
					<a href="#" class="text-sm text-blue-600 hover:underline">Forgot Password?</a>
				</div>
				<div class="mt-2">
					<fwb-button type="submit" class="w-full login-button">Login</fwb-button>
				</div>
			</form>
			<p class="text-center text-gray-500 text-sm">Don't have an account? <a href="#"
					class="text-blue-600 hover:underline">Sign up</a></p>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { FwbInput, FwbButton, FwbAlert } from 'flowbite-vue';

const email = ref('');
const password = ref('');
const errorMessage = ref('');

const handleSubmit = () => {
	// Basic form validation (you should replace this with your actual logic)
	if (email.value === 'test@example.com' && password.value === 'password') {
		alert('Login successful!');
		email.value = ''
		password.value = ''
		errorMessage.value = ''
		// Redirect or perform other actions here
	} else {
		errorMessage.value = 'Invalid email or password.';
	}
};
</script>

<style scoped></style>
