<template>
    <div class="navigation">
        <md-bottom-bar class="md-accent" md-type="shift" md-sync-route>
            <md-bottom-bar-item
                    to="/"
                    id="bottom-bar-item-home"
                    md-label="Home"
                    md-icon="home"></md-bottom-bar-item>
            <md-bottom-bar-item
                    id="bottom-bar-item-pages"
                    md-label="Statistics"
                    to="/dashboard"
                    md-icon="pages"></md-bottom-bar-item>
        </md-bottom-bar>
    </div>
</template>

<script>
export default {
  name: 'Navigation',
};

</script>

<style lang="scss" scoped>
    .navigation {
        width: 100%;
        display: inline-flex;
        align-items: flex-end;
        overflow: hidden;
        position: fixed;
        bottom: 0;
        left: 0;

        /deep/
        .md-ripple{
            justify-content: center;
        }
    }

</style>
