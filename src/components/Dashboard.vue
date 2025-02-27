<template>
	<div class="flex h-screen bg-gradient-to-r from-blue-50 to-blue-100">
		<!-- Sidebar -->
		<aside class="w-64 bg-gray-900 text-white p-4 flex flex-col">
			<h2 class="text-xl font-bold mb-4 text-blue-50">Contacts</h2>
			<div class="flex-1 overflow-y-auto">
				<ul>
					<li v-for="contact in contacts" :key="contact.id" class="mb-2"
						:class="{ 'bg-gray-700': activeContactId === contact.id }" @click="selectContact(contact.id)">
						<a href="#" class="block hover:bg-gray-700 p-2 rounded flex items-center">
							<div class="w-8 h-8 rounded-full bg-gray-600 mr-2 flex items-center justify-center">
								<span class="text-white font-bold">{{
									contact.name.charAt(0).toUpperCase()
								}}</span>
							</div>
							<span>{{ contact.name }}</span>
						</a>
					</li>
				</ul>
			</div>
		</aside>

		<!-- Main Content -->
		<div class="flex-1 flex flex-col overflow-hidden">
			<!-- Topbar -->
			<header class="bg-white p-4 shadow-md">
				<div class="container mx-auto flex items-center justify-between">
					<h1 class="text-2xl font-bold text-gray-800">Borak Chat</h1>
					<div class="flex items-center space-x-2">
						<!-- Corrected Dropdown Implementation -->
						<fwb-dropdown label="User" class="inline-flex">
							<fwb-list-group class="text-sm text-gray-700">
								<fwb-list-group-item class="cursor-pointer hover:bg-gray-100" @click="logout">
									Logout
								</fwb-list-group-item>
							</fwb-list-group>
						</fwb-dropdown>
						<div class="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
							<span class="text-white font-bold">U</span>
						</div>
					</div>
				</div>
			</header>

			<!-- Chatbox -->
			<main class="flex-1 overflow-x-hidden overflow-y-auto bg-blue-50 p-4 flex flex-col">
				<div v-if="activeContactId" class="flex-1 overflow-y-auto">
					<div v-for="message in messages[activeContactId]" :key="message.id" class="mb-2">
						<div :class="[
							'p-2 rounded-lg max-w-md',
							message.sender === 'user'
								? 'bg-blue-500 text-white ml-auto'
								: 'bg-gray-300 mr-auto',
						]">
							{{ message.text }}
						</div>
					</div>
				</div>
				<div v-else class="text-center mt-8 text-gray-700">
					Select a contact to start chatting.
				</div>
				<div class="mt-4" v-if="activeContactId">
					<form @submit.prevent="sendMessage" class="flex">
						<fwb-input v-model="newMessage" type="text" placeholder="Type your message..." required
							class="flex-1 mr-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
						<fwb-button type="submit" class="bg-blue-500 hover:bg-blue-600">Send</fwb-button>
					</form>
				</div>
			</main>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import {
	FwbInput,
	FwbButton,
	FwbDropdown,
	FwbListGroup,
	FwbListGroupItem,
} from "flowbite-vue";

// Dummy data for contacts and messages
const contacts = ref([
	{ id: 1, name: "John Doe" },
	{ id: 2, name: "Jane Smith" },
	{ id: 3, name: "Peter Jones" },
	// Add more contacts as needed
]);

const messages = reactive({
	1: [
		{ id: 1, sender: "contact", text: "Hello there!" },
		{ id: 2, sender: "user", text: "Hi John!" },
		{ id: 3, sender: "contact", text: "How are you?" },
	],
	2: [
		{ id: 1, sender: "contact", text: "Hi, Jane here!" },
		{ id: 2, sender: "user", text: "Hello Jane!" },
	],
	3: [
		{ id: 1, sender: "contact", text: "Hi Peter" },
		{ id: 2, sender: "user", text: "Hello Peter" },
	],
	// Add more conversations as needed
});

const activeContactId = ref<number | null>(null);
const newMessage = ref("");

const selectContact = (contactId: number) => {
	activeContactId.value = contactId;
};

const sendMessage = () => {
	if (newMessage.value.trim() === "") return;

	if (activeContactId.value) {
		const newId =
			messages[activeContactId.value].length > 0
				? messages[activeContactId.value][
					messages[activeContactId.value].length - 1
				].id + 1
				: 1;
		messages[activeContactId.value].push({
			id: newId,
			sender: "user",
			text: newMessage.value,
		});
		newMessage.value = "";
	}
};

const logout = () => {
	alert("Logging out");
};
</script>

<style scoped>
/* Custom styles can go here */
</style>