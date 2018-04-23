<template>
    <div class="header">
        <md-toolbar class="md-primary">
            <span class="md-title">Kicker Portal</span>
        </md-toolbar>
    </div>
</template>

<script>
export default {
  name: 'header',
  data: () => ({
    menuVisible: false,
  }),
};
</script>

<style scoped>
    .header {
        height: 80px;
    }
</style>
