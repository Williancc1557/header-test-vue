<template>
  <div class="page-header-container">
    <p class="subtitle">Customer Engagement</p>
    <div class="title-button">
      <span>Location</span>
      <button>New Place</button>
    </div>
    <ul class="choices">
      <li
        :class="selected == 'places' ? 'selected' : ''"
        id="places"
        @click="change"
      >
        <i class="fa fa-building" aria-hidden="true"></i><span>Places</span>
      </li>
      <li
        :class="selected == 'geofences' ? 'selected' : ''"
        id="geofences"
        @click="change"
      >
        <i class="fa fa-cube" aria-hidden="true"></i><span>Geofences</span>
      </li>
      <li
        :class="selected == 'beacons' ? 'selected' : ''"
        id="beacons"
        @click="change"
      >
        <span>Beacons</span>
      </li>
    </ul>
  </div>
</template>

<style src="./styles.css" scoped></style>

<script src="./script.ts"></script>
