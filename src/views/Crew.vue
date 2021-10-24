<template>
    <div class="md:px-40">
        <div class="md:h-auto h-screen flex items-stretch md:block">
            <qrcode-stream @decode="onDecode"></qrcode-stream>
            <qrcode-drop-zone></qrcode-drop-zone>
            <qrcode-capture></qrcode-capture>
        </div>
    </div>
</template>
<script>

export default {
    name: 'Crew',
    data() {
        return {
            counter: 0
        }
    },
    methods: {
        onDecode (decodedString) {
            alert(decodedString)
        }
    },
    sockets: {
      connect: function() {
        console.log("Connected")
      }
    }
}
</script>