<script setup>
import { IconArrowRight } from "@tabler/icons-vue";
import { h } from "vue";

defineProps({
  label: {
    type: String,
    default: "Button",
  },
  icon: {
    type: [Object, Function],
    default: null,
  },
});
</script>

<template>
  <div>
    <div class="button-container-1">
      <span class="mas">{{ label }}</span>
      <button id="work" type="button" name="Hover">
        {{ label }}
        <component :is="icon" v-if="icon" size="22" class="ml-2" />
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@mixin button($bcolor, $url, $x1, $y1, $bor, $col) {
  background: $bcolor;
  -webkit-mask: url($url);
  mask: url($url);
  -webkit-mask-size: $x1 $y1;
  mask-size: $x1 $y1;
  border: $bor;
  color: $col;
}

.button-container-1 {
  background: #fff;
  position: relative;
  height: 45px;
  overflow: hidden;
  border: 1px solid #2ebaa1;
  font-weight: 300;
  font-size: 20px;
  transition: 0.5s;
  letter-spacing: 1px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-weight: 300;
    font-size: 15px;
    letter-spacing: 1px;
    font-weight: bold;

    @include button(
      #2ebaa1,
      "https://raw.githubusercontent.com/robin-dela/css-mask-animation/master/img/nature-sprite.png",
      2300%,
      100%,
      none,
      #fff
    );

    cursor: pointer;
    -webkit-animation: ani2 0.7s steps(22) forwards;
    animation: ani2 0.7s steps(22) forwards;

    &:hover {
      -webkit-animation: ani 0.7s steps(22) forwards;
      animation: ani 0.7s steps(22) forwards;
    }
  }
}

.mas {
  background: #fff;
  position: absolute;
  color: #2ebaa1;
  text-align: center;
  width: 100%;
  font-weight: 300;
  font-size: 15px;
  margin-top: 0.5px;
  overflow: hidden;
  font-weight: bold;
}

@-webkit-keyframes ani {
  from {
    -webkit-mask-position: 0 0;
    mask-position: 0 0;
  }

  to {
    -webkit-mask-position: 100% 0;
    mask-position: 100% 0;
  }
}

@keyframes ani {
  from {
    -webkit-mask-position: 0 0;
    mask-position: 0 0;
  }

  to {
    -webkit-mask-position: 100% 0;
    mask-position: 100% 0;
  }
}

@-webkit-keyframes ani2 {
  from {
    -webkit-mask-position: 100% 0;
    mask-position: 100% 0;
  }

  to {
    -webkit-mask-position: 0 0;
    mask-position: 0 0;
  }
}

@keyframes ani2 {
  from {
    -webkit-mask-position: 100% 0;
    mask-position: 100% 0;
  }

  to {
    -webkit-mask-position: 0 0;
    mask-position: 0 0;
  }
}
</style>
