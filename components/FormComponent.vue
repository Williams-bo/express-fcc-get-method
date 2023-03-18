<template>
    <div class="py-1 w-full lg:w-[30%]">
        <label class="px-1 text-sm text-primaryGrey">{{ labelText }}
            <span v-show="require" class="text-red-500">*</span>
        </label>
        <input :name="name" :placeholder="placeholder" :required="require" :type="type" :value="modelValue"
            :min="type === 'date' ? date : ''" @input="$emit('update:modelValue', $event.target.value)"
            class="text-base px-3 py-3 rounded w-full text-veryDarkBlue bg-[#F7F7F7] mt-2 border-0 placeholder-gray-600
                         focus:placeholder-gray-500 focus:border focus:border-veryDarkBlue focus:ring-0 focus:outline-none">
    </div>
</template>

<script setup>
const { labelText, placeholder, name, type, modelValue, require } = defineProps(['labelText', 'placeholder', 'name', 'type', 'modelValue', 'require'])

const emit = defineEmits(['update:modelValue'])

const date = new Date().toISOString().split('T')[0]
</script>

<style scoped></style>