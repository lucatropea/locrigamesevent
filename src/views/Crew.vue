<template>
    <div class="md:px-40">
        <div class="md:h-auto h-screen flex items-stretch md:block">
            <p>{{ count }}</p>
            <a class="button is-danger" @click.prevent="incrementCounter">Count Up</a>
            <qrcode-stream @decode="onDecode"></qrcode-stream>
            <qrcode-drop-zone></qrcode-drop-zone>
            <qrcode-capture></qrcode-capture>
        </div>
    </div>
</template>
<script>

export default {
    name: 'Crew',
    methods: {
        onDecode (decodedString) {
            alert(decodedString);
        }
    }
}
</script>