import { getPlayers } from "../actions/getAllPlayers";

export async function displayPlayers() {
    let playersIterable = getPlayers();
    let playersList = document.getElementById('player_list') as HTMLLIElement;
    playersList.innerHTML = '';
  
    for await (const player of await playersIterable) {
      console.log(player);
      let listItem = document.createElement('li');
      listItem.innerHTML = player.name;
      playersList.appendChild(listItem);
    }
  }