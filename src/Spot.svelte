<script lang="ts">
  import {afterUpdate} from 'svelte';

  export let beat: boolean;
  export let dancing: boolean;
  export let position: string;
  export let distance: number;

  let beatCount = 0;
  let spotColor = 'rgba( 0, 255, 0, 0.4)';
  let spotLeft = 0;
  let spotRight = 160;
  let colorValues = ['rgba( 255, 0, 0, 0.4)', 'rgba( 0, 0, 255, 0.4)'];
  let lastBeat = false;
  
  function changeStyle() { 
    let oldValue = spotColor;
    let nextIndex = Math.floor( Math.random() * (colorValues.length ) );
    let newValue = colorValues[nextIndex];
    let newPosition = 20 + Math.floor(Math.random() * 200 );
    
    beatCount++;
  
    if ( beatCount == 2 ) {
      colorValues.splice( nextIndex, 1);
      colorValues.push(oldValue);
      beatCount = 0;
      spotColor = newValue;
      spotLeft = newPosition;
      spotRight = newPosition + 240;
    }
  }       
    
  afterUpdate(() => {
    if (lastBeat !== beat) {
      changeStyle();
    }
  });

  </script>

<div class="spot {(dancing) ? '' : 'spot--hidden'}" style="{ (position == 'left' ) ? 'left:' : 'right:'}{distance}px">
  <svg xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      height="100%"
      preserveAspectRatio="none"
      viewBox="0 0 400 100"
      width="100%">
      <polygon fill="{spotColor}" height="100%" width="100%" points="20,0 {spotLeft},100 {spotRight},100"/>
  </svg>
</div>
  
<style lang='scss'>
  .spot {
    bottom: 30px;
    position:fixed;
    width: 25%;
    top: -30px;

    &--hidden {
      display: none;
    }
  }
</style>
  
