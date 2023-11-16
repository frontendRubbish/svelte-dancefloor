<script lang="ts">
  import {onMount} from 'svelte';
  import Dj from './Dj.svelte';
  import Dancer from './Dancer.svelte';
  import Spot from './Spot.svelte';
  import StartButton from './StartButton.svelte';

  interface RowData {
    leftPos: number;
    bottomPos: number; 
  }

  let speed = 4.4;
  let dancing = false;
  let jumping = false;
  let tick = false;
  let beat = false;
  let riot = false;
  let danceRows: RowData[][] = [];
  
  $: beatInterval = 1000 / speed;

  function createDancers() {
    const dancerInRow = window.innerWidth / 100;
    const rowArray = [];

    for (let rowIdx= 0;rowIdx < 3;rowIdx++) {
      let row = [];
      for (let idx = 0;idx < dancerInRow;idx++) {
        row.push( {
            leftPos : (idx * 86 ) + Math.floor(Math.random() * (30 + 0) - 0 ),
            bottomPos: ( (3 - rowIdx ) * 70 ) + Math.floor(Math.random() * (10 + 10) ) - 60
        });
      }
      rowArray.push(row);
    }

    return rowArray
  }

  const startDancing = () => {
    dancing = true;
    speed = 4.4;
    jumping = false;
    riot = false;
  }

  const startRiot = () => {
    dancing = true;
    jumping = true; 
    riot = true;
    speed = 40;
  }

  onMount( () => {
    const fpsInterval = 1000/60;

    let beatThen = Date.now();
    let then = Date.now();
    let beatLoop = () => {
      requestAnimationFrame(beatLoop);
      const now = Date.now();
      const delta = now - beatThen;
          
      if (delta > beatInterval) { 
        beatThen = now - (delta % beatInterval);

        if ( dancing ) {
          beat = !beat;
        }
      }
    }

    let animationLoop = () => {
      requestAnimationFrame(animationLoop);
      const now = Date.now(),
      delta = now - then;

      if (delta > fpsInterval) {
        then = now - (delta % fpsInterval);
        if ( dancing ) {
          tick = !tick;
        }
      }     
    };

    danceRows = createDancers();

    animationLoop();
    beatLoop();
  });

</script>

<div class="dancefloor { dancing ? 'dancefloor--dark' : ''}">
  <Dj {tick} {beat} {dancing} {jumping} {riot} on:startJump={() => jumping = true} on:stopJump={() => jumping = false} />
  <StartButton {dancing} on:startSong={startDancing} on:startRiot={startRiot} />
  {#each danceRows as row}
    {#each row as dancer}
      <Dancer {tick} {beat} {jumping} bottomPos="{dancer.bottomPos}" leftPos="{dancer.leftPos}"/>
    {/each}
  {/each}
  <Spot {beat} {dancing} position="left" distance={60} />
  <Spot {beat} {dancing} position="left" distance={340} />
  <Spot {beat} {dancing} position="right" distance={60} />
  <Spot {beat} {dancing} position="right" distance={340} />
</div>

<style lang='scss'>
  .dancefloor {
    background-color: rgba(230, 230, 230, 1);
    display: block;
    height: 100%;
    overflow: hidden;
    transition: background-color 1.2s;
    width: 100%;

    &--dark {
      background-color: rgba(0,0,0,1);
    }
  }
</style>