<template>
    <div class="phone-viewport">
        <md-bottom-bar md-type="shift" :md-theme="'bottom-bar-' + theme">
            <md-bottom-bar-item
                    md-label="Home"
                    md-icon="home"
                    @click="theme = 'teal'"></md-bottom-bar-item>
            <md-bottom-bar-item
                    md-label="Pages"
                    md-icon="pages"
                    @click="theme = 'orange'"></md-bottom-bar-item>
            <md-bottom-bar-item
                    md-label="Posts"
                    md-icon="/assets/icon-whatshot.svg"
                    @click="theme = 'blue'"></md-bottom-bar-item>
            <md-bottom-bar-item
                    md-label="Favorites"
                    md-icon="favorite"
                    @click="theme = 'red'"></md-bottom-bar-item>
        </md-bottom-bar>
    </div>
</template>

<script>
export default {
  name: 'Navigation',
  data: () => ({
    theme: 'teal',
  }),
};
</script>

<style scoped>
    .navigation {
        width: 100%;
        display: inline-flex;
        align-items: flex-end;
        overflow: hidden;
        position: fixed;
        bottom: 0;
        left: 0;
    }
</style>
