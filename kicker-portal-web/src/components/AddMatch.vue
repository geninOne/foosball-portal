<template>
  <div class="add-match">
    <div class="match-input md-layout md-gutter">
      <!-- Team 1 -->
      <div class="md-layout-item md-size-35">
        <h1>Team 1</h1>
        <div class="md-layout">
          <md-autocomplete
            class="md-layout-item md-size-45 input-item"
            v-model="selectedPlayerOne"
            :md-options="employees"
            :md-open-on-focus="false">
            <label>Player</label>
          </md-autocomplete>
          <md-autocomplete
            class="md-layout-item md-size-45 input-item"
            v-model="selectedPlayerTwo"
            :md-options="employees"
            :md-open-on-focus="false">
            <label>Player</label>
          </md-autocomplete>
        </div>
      </div>

      <!-- Score -->
      <div class="md-layout-item md-size-10">
        <h1>Score</h1>
        <div class="md-layout">
          <md-field class="md-layout-item md-size-40">
            <md-input v-model="number" type="number"></md-input>
          </md-field>
          <h3 class="md-layout-item md-size-20">:</h3>
          <md-field class="md-layout-item md-size-40">
            <md-input v-model="number" type="number"></md-input>
          </md-field>
        </div>
      </div>

      <!-- Team 2 -->
      <div class="md-layout-item md-size-35">
        <h1>Team 2</h1>
        <div class="md-layout">
          <md-autocomplete
            class="md-layout-item md-size-45 input-item"
            v-model="selectedPlayerThree"
            :md-options="employees"
            :md-open-on-focus="false">
            <label>Player</label>
          </md-autocomplete>
          <md-autocomplete
            class="md-layout-item md-size-45 input-item"
            v-model="selectedPlayerFour"
            :md-options="employees"
            :md-open-on-focus="false">
            <label>Player</label>
          </md-autocomplete>
        </div>
      </div>
    </div>

    <md-button
      class="match-button md-icon-button md-raised md-accent md-size-100">
      <md-icon>library_add</md-icon>
    </md-button>
  </div>
</template>

<script>
export default {
  name: 'AddMatch',
  data: () => ({
    selectedPlayerOne: null,
    selectedPlayerTwo: null,
    selectedPlayerThree: null,
    selectedPlayerFour: null,
    employees: [
      'Dirk',
      'Gena',
      'Mario',
      'Alex',
      'Juan',
      'Mykita',
      'Yara',
      'Manuel',
      'Markus',
      'Nermin',
    ],
  }),
};

</script>

<style lang="scss" scoped>
  @import "~vue-material/src/theme/engine";

  .add-match {

    .md-layout {
      justify-content: center;
    }

    .match-input {
      height: 140px;

      .md-layout-item {
        height: 40px;
        color: white;

      }

      .input-item {
        margin: 0 5px;
      }
    }
  }

</style>
