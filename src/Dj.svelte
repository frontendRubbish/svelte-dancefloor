<script lang='ts'>
  import {afterUpdate, createEventDispatcher} from 'svelte';

  export let tick: boolean;
  export let beat: boolean;
  export let dancing: boolean;
  export let jumping: boolean;
  export let riot: boolean;

  interface AnimationState {
    current: number;
    target: number;
  }

  interface AnimationStates {
    [index: string]: AnimationState;
  }

  const dispatch = createEventDispatcher();

  let beatCount = 0;
  let jumpCounter = 0;
  let lastBeat = false;
  let lastTick = false;

  let animations: AnimationStates = {
    head: {
      current: 0,
      target: 0
    },
    rotation: {
      current: 0,
      target: 0
    }
  };

  function changeStyle() {
    beatCount++;

    if ( jumping && !riot ) {
      jumpCounter ++;
      if ( jumpCounter == 17 ) {
        dispatch('stopJump');
        animations['rotation'].target = 0;
      }
    }
  
    if ( beatCount == 2 ) {
      beatCount = 0;
      animations['head'].target = 0;
    } else {
      animations['head'].target = 10;
    }
  }

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
    moveBodyPart( 'rotation', 0.4, false );
    moveBodyPart( 'head', 0.4, false );
  };

  function triggerJump() {
    dispatch('startJump');
    animations['rotation'].target = 160;
    jumpCounter = 0;
  };

</script>

<div class="dj">
  <div class="dj__button" on:click="{triggerJump}">
  </div>
  <div class="dj__bunny {(dancing) ? '' : 'dj__bunny--hidden'}">
    <svg xmlns="http://www.w3.org/2000/svg"
       xmlns:xlink="http://www.w3.org/1999/xlink"
   
       height="300"
       width="160">
       <ellipse cx="80" cy="198" rx="46" ry="54" fill="#ff69b4" stroke="black" stroke-width="3" />
         <g transform="translate(0, {animations.head.current} )">
           <ellipse cx="60" cy="50" rx="16" ry="40" fill="#ff69b4" stroke="black" stroke-width="3" />
           <ellipse cx="100" cy="50" rx="16" ry="40" fill="#ff69b4" stroke="black" stroke-width="3" />
           <circle cx="80" cy="110" r="40" stroke="black" stroke-width="3" fill="#ff69b4" />
           <circle cx="70" cy="100" r="8" stroke="black" stroke-width="3" fill="black" />
           <circle cx="90" cy="100" r="8" stroke="black" stroke-width="3" fill="black" />
         </g>

         <ellipse cx="52" cy="186" rx="16" ry="30" fill="#ff69b4" stroke="black" stroke-width="3" transform="rotate({animations.rotation.current} 52,167)" />
         <ellipse cx="108" cy="186" rx="16" ry="30" fill="#ff69b4" stroke="black" stroke-width="3" />

         <circle cx="60" cy="244" r="16" stroke="black" stroke-width="3" fill="#ff69b4" />
         <circle cx="100" cy="244" r="16" stroke="black" stroke-width="3" fill="#ff69b4" />
    </svg>
    <div class="dj__bubble {(jumping) ? 'dj__bubble--visible' : ''}">
      <span class="dj__text dj__text--large">Jump</span>
      <span class="dj__text">you</span>
      <span class="dj__text dj__text--large">FUCKERS!!!</span>
    </div>
    <div class="dj__board">
    </div>
  </div>

</div>

<style lang='scss'>
  .dj {
    position: relative;

    &__button {
      bottom: 0;
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      z-index: 5;
    }

    &__bunny {
      margin: 50px auto 0 auto;
      transition: opacity 1.2s;
      position: relative;
      width: 160px;

      &--hidden {
        opacity: 0;
      }
    }

    &__bubble {
      background-color: white;
      border-radius: 10px;
      display: none;
      font-family: 'Press Start 2P', cursive;
      height: 120px;
      padding: 10px;
      position: absolute;
      width: 240px;
      right: -240px;
      text-align: center;
      top: 30px;
      z-index: 3;

      &:before {
        border-style: solid;
        border-width: 10px 20px 10px 0;
        border-color: transparent white transparent transparent;
        content: '';
        display: block;
        height: 0;
        left: -20px;
        position: absolute;
        bottom: 30px;
        width: 0;
      }

      &--visible {
        display: block;
      }
    }

    &__text {
      display: block;
      font-size: 18px;
      margin-bottom: 16px;

      &--large {
        font-size: 24px;
      }
    }

    &__board {
      background-color: pink;
      bottom: -40px;
      height: 160px;
      margin-left: -120px;
      position: absolute;
      width: 400px;
    }

  }
</style>
