<template>
  <v-card
    :disabled="loading"
    :loading="loading"
    class="mx-auto my-6 d-flex flex-column"
    max-width="374"
  >
    <template v-slot:loader="{ isActive }">
      <v-progress-linear
        :active="isActive"
        color="deep-purple"
        height="4"
        indeterminate
      ></v-progress-linear>
    </template>

    <!-- Contenedor de la imagen -->
    <div class="image-container">
      <v-img height="400" :src="imageSrc" cover></v-img>
    </div>

    <!-- Contenedor del contenido de la carta -->
    <div class="content-container d-flex flex-column">
      <!-- Contenedor de la información del evento -->
      <v-card-item class="info-container">
        <v-card-title class="multiline-title">{{ eventTitle }}</v-card-title>
        <v-card-subtitle class="text-subtitle-2 text-gray-600">
          📍 {{ location }}
        </v-card-subtitle>
        <v-card-subtitle class="text-subtitle-2 text-gray-600">
          📅 {{ date }}
        </v-card-subtitle>
        <v-card-subtitle class="text-subtitle-2 text-gray-600">
          🕒 {{ time }}
        </v-card-subtitle>
      </v-card-item>

      <!-- Descripción con altura limitada -->
      <v-card-text class="description-text">
        <div>{{ description }}</div>
      </v-card-text>

      <!-- Contenedor del botón alineado al fondo -->
      <div class="button-container">
        <v-card-actions>
          <v-btn color="deep-purple-lighten-2" text @click="viewEvent">
            Ver
          </v-btn>
        </v-card-actions>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    eventTitle: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imageSrc: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    viewEvent() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },
  },
};
</script>

<style scoped>
.image-container {
  height: 400px; /* Altura fija para la imagen */
  overflow: hidden;
}

.content-container {
  height: 350px; /* Altura fija para el contenido */
  display: flex;
  flex-direction: column;
}

.multiline-title {
  white-space: normal;
  overflow-wrap: break-word;
}

.description-text {
  max-height: 80px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

/* Aumenta el espacio en la sección de información */
.info-container {
  padding: 16px;
  padding-bottom: 8px;
}

/* Empuja el botón hacia la parte inferior de la carta */
.button-container {
  margin-top: auto;
  display: flex;
  justify-content: center;
  padding-bottom: 16px;
}
</style>



