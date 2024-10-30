<script setup>
defineProps({
  label: {
    type: String,
    default: "Button",
  },
});
</script>

<template>
  <div>
    <div class="button-container-1">
      <span class="mas">{{ label }}</span>
      <button id="work" type="button" name="Hover">{{ label }}</button>
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
  position: relative;
  width: 110px;
  height: 45px;
  overflow: hidden;
  border: 1px solid #2EBAA1;
  font-weight: 300;
  font-size: 20px;
  transition: 0.5s;
  letter-spacing: 1px;
  border-radius: 8px;

  button {
    width: 100%;
    height: 100%;
    font-weight: 300;
    font-size: 11px;
    letter-spacing: 1px;
    font-weight: bold;

    @include button(
      #2EBAA1,
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
  position: absolute;
  color: #2EBAA1;
  text-align: center;
  width: 100%;
  font-weight: 300;
  font-size: 11px;
  margin-top: 14px;
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
