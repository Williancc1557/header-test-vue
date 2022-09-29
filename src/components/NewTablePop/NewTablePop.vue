<template>
  <div>
    <transition name="fade" appear>
      <div class="modal-overlay" v-if="showModal">
        <div class="modal-content">
          <div class="modal-header">
            <h3>New Place</h3>
            <font-awesome-icon
              icon="close"
              class="close-icon"
              @click="showModal = false"
            />
          </div>
          <div class="content">
            <form class="sent-data">
              <label for="name">Name</label>
              <input v-model="data.name" name="name" type="text" />
              <label for="type">Type</label>
              <input v-model="data.type" name="type" type="text" />
              <div class="coordinates">
                <div>
                  <label for="latitude">Latitude</label>
                  <input v-model="data.latitude" name="latitude" type="text" />
                </div>
                <div>
                  <label for="longitude">Longitude</label>
                  <input
                    v-model="data.longitude"
                    name="longitude"
                    type="number"
                  />
                </div>
              </div>
              <div class="locations">
                <div>
                  <label for="city">City</label>
                  <input v-model="data.city" name="city" type="text" />
                </div>
                <div>
                  <label for="state">State</label>
                  <input v-model="data.state" name="state" type="text" />
                </div>
              </div>
              <label for="country">Country</label>
              <input v-model="data.country" name="country" type="text" />
            </form>
            <div class="map"></div>
          </div>
          <div class="modal-buttons-container">
            <button class="cancel-button">Cancel</button>
            <button class="save-button" @click="save">Save</button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts" src="./script.ts"></script>

<style src="./styles.css" lang="ts" scoped></style>
