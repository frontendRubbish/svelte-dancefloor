<script lang="ts">
  import {afterUpdate, onMount} from 'svelte';
  
  export let tick: boolean;
  export let beat: boolean;
  export let jumping: boolean;
  export let bottomPos: number;
  export let leftPos: number;

  interface AnimationState {
    current: number;
    target: number;
  }

  interface AnimationStates {
    [index: string]: AnimationState;
  }

  const moveValues = [90, 180];
  let beatCount = 0;
  let drunkenness = 0;
  let jumpLatency = 0;
  let gotJump = false;
  let lastBeat = false;
  let lastTick = false;

  let animations: AnimationStates = {
    head: {
      current: 0,
      target: 0
    },
    jump: {
      current: 0,
      target: 0
    },
    rotation: {
      current: 0,
      target: 0
    }
  };

  function moveBodyPart( currentStatus: string, easing: number, jump: boolean ) {
    let animationState = {...animations};
    let status = animationState[currentStatus];
    let newValue = status.current;
    const targetValue = status.target;
    let diff = Math.abs( targetValue - newValue);
  
    if ( newValue < targetValue ) {
      newValue = newValue + (easing * diff );
    } else if ( newValue > targetValue ) {
      newValue = newValue - (easing * diff );
    }
  
    animationState[currentStatus].current = newValue;
    if (jump && ( diff < 0.1 ) ) {
      animationState[currentStatus].target = ( animationState[currentStatus].target == 0 ) ? 40 : 0;
    }
    animations = {... animationState};
  };

  function checkUpdateAnimation() {
    if ( jumping && gotJump ) {
       moveBodyPart( 'jump', 0.6, true );
    } else {
      moveBodyPart( 'rotation', 0.4, false );
      moveBodyPart( 'head', 0.4, false );
    }
  };

  function changeStyle() {
    let oldValue = animations['rotation'].target;
    const nextIndex = Math.floor( Math.random() * (moveValues.length) );
    const newValue = moveValues[nextIndex];
  
    beatCount++;
  
    if ( jumping ) {
      jumpLatency ++;
      gotJump = ( jumpLatency >= drunkenness );
    } else {
      gotJump = false;
      jumpLatency = 0;
    }
  
    if ( beatCount == 2 ) {
      moveValues.splice( nextIndex, 1);
      moveValues.push(oldValue);
      beatCount = 0;
         
      animations['rotation'].target = newValue;
      animations['head'].target = 0;
    } else {
      animations['head'].target = 10;
    }
  }

  onMount( () => {
    drunkenness = Math.floor(Math.random() * (5) + 1);
    lastBeat = beat;
    lastTick = tick;
  });

  afterUpdate(() => {    
    if(lastBeat !== beat) {
      changeStyle();
      lastBeat = beat;
    }
  
    if(lastTick !== tick) {
      checkUpdateAnimation();
      lastTick = tick;
    }
  });
  
</script>


<svg xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  class="dancer"
  height="300"
  width="160"
  style="left:{leftPos}px;bottom:{bottomPos+animations.jump.current}px">
  <ellipse cx="80" cy="198" rx="46" ry="54" fill="#ff69b4" stroke="black" stroke-width="3" />

  <g transform="translate(0, {animations.head.current} )">
  <ellipse cx="60" cy="50" rx="16" ry="40" fill="#ff69b4" stroke="black" stroke-width="3" />
  <ellipse cx="100" cy="50" rx="16" ry="40" fill="#ff69b4" stroke="black" stroke-width="3" />
  <circle cx="80" cy="110" r="40" stroke="black" stroke-width="3" fill="#ff69b4" />
  <circle cx="70" cy="100" r="8" stroke="black" stroke-width="3" fill="black" />
  <circle cx="90" cy="100" r="8" stroke="black" stroke-width="3" fill="black" />
  </g>

  <ellipse cx="52" cy="186" rx="16" ry="30" fill="#ff69b4" stroke="black" stroke-width="3" transform="rotate({animations.rotation.current} 52,167)" />
  <ellipse cx="108" cy="186" rx="16" ry="30" fill="#ff69b4" stroke="black" stroke-width="3" transform="rotate(-{animations.rotation.current} 108,167)"/>

  <circle cx="60" cy="244" r="16" stroke="black" stroke-width="3" fill="#ff69b4" />
  <circle cx="100" cy="244" r="16" stroke="black" stroke-width="3" fill="#ff69b4" />
</svg>

<style lang='scss'>
  .dancer {
    position: absolute;
  }
</style>
